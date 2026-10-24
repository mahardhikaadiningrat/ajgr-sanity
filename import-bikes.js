import fs from 'fs'
import csv from 'csv-parser'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '7aulmgx4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN
})

const fieldMapping = {
  title: 'title', brand: 'brand', slug: 'slug', year: 'year', country: 'country',
  type: 'type', frameMaterial: 'frameMaterial', frameSize: 'frameSize',
  weight: 'weight', groupset: 'groupset', barSet: 'barSet', stem: 'stem',
  wheelset: 'wheelset', spokes: 'spokes', tireSize: 'tireSize',
  crankset: 'crankset', cassette: 'cassette', chain: 'chain',
  brakes: 'brakes', brakeLevers: 'brakeLevers', shifters: 'shifters',
  derailleurFront: 'derailleurFront', derailleurRear: 'derailleurRear',
  saddle: 'saddle', seatpost: 'seatpost', pedals: 'pedals', hubs: 'hubs',
  gearCount: 'gearCount', condition: 'condition', story: 'story',
  notes: 'notes', isFeatured: 'isFeatured'
}

function convertValue(key, value) {
  if (!value || value === '-') return null
  if (['year', 'weight'].includes(key)) {
    const num = parseFloat(value)
    return isNaN(num) ? null : num
  }
  if (key === 'isFeatured') return value.toLowerCase() === 'true'
  return value
}

async function importBikes(csvFilePath) {
  const bikes = []
  console.log('📖 Membaca file CSV...')
  
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (row) => {
        const bike = {
          _type: 'bike',
          title: row.title,
          slug: { _type: 'slug', current: row.slug }
        }
        Object.keys(fieldMapping).forEach(csvKey => {
          if (csvKey !== 'title' && csvKey !== 'slug') {
            const sanityKey = fieldMapping[csvKey]
            const value = convertValue(csvKey, row[csvKey])
            if (value !== null) bike[sanityKey] = value
          }
        })
        bikes.push(bike)
      })
      .on('end', async () => {
        console.log(`✅ Ditemukan ${bikes.length} sepeda untuk di-import\n`)
        for (let i = 0; i < bikes.length; i++) {
          const bike = bikes[i]
          try {
            const existing = await client.fetch(
              `*[_type == "bike" && slug.current == $slug][0]`,
              { slug: bike.slug.current }
            )
            if (existing) {
              console.log(`⚠️  [${i + 1}/${bikes.length}] ${bike.title} - Sudah ada, skip`)
              continue
            }
            await client.create(bike)
            console.log(`✅ [${i + 1}/${bikes.length}] ${bike.title} - Berhasil di-import`)
          } catch (error) {
            console.error(`❌ [${i + 1}/${bikes.length}] ${bike.title} - Error: ${error.message}`)
          }
        }
        console.log('\n Import selesai!')
        resolve()
      })
      .on('error', (error) => {
        console.error('❌ Error membaca CSV:', error.message)
        reject(error)
      })
  })
}

const csvFilePath = process.argv[2]
if (!csvFilePath) {
  console.error('❌ Usage: node import-bikes.js <path-to-csv-file>')
  process.exit(1)
}
if (!fs.existsSync(csvFilePath)) {
  console.error(`❌ File tidak ditemukan: ${csvFilePath}`)
  process.exit(1)
}

importBikes(csvFilePath)
  .then(() => process.exit(0))
  .catch((error) => { console.error('❌ Import gagal:', error); process.exit(1) })