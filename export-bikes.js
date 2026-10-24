import { createClient } from '@sanity/client'
import fs from 'fs'

const client = createClient({
  projectId: '7aulmgx4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN
})

async function exportBikes() {
  console.log('📤 Exporting bikes from Sanity...')
  const bikes = await client.fetch(`*[_type == "bike"]`)
  
  const headers = [
    'title', 'slug', 'year', 'country', 'type', 'frameMaterial', 'frameSize',
    'weight', 'groupset', 'barSet', 'stem', 'wheelset', 'spokes', 'tireSize',
    'crankset', 'cassette', 'chain', 'brakes', 'brakeLevers', 'shifters',
    'derailleurFront', 'derailleurRear', 'saddle', 'seatpost', 'pedals', 'hubs',
    'gearCount', 'condition', 'story', 'notes', 'isFeatured'
  ]
  
  const csvRows = [headers.join(',')]
  
  bikes.forEach(bike => {
    const row = headers.map(header => {
      let value = header === 'slug' ? bike.slug?.current || '' : bike[header]
      if (typeof value === 'boolean') value = value.toString()
      else if (value === null || value === undefined) value = '-'
      if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
        value = `"${value.replace(/"/g, '""')}"`
      }
      return value
    })
    csvRows.push(row.join(','))
  })
  
  const filename = `bikes-export-${new Date().toISOString().split('T')[0]}.csv`
  fs.writeFileSync(filename, csvRows.join('\n'))
  console.log(`✅ Exported ${bikes.length} bikes to ${filename}`)
}

exportBikes()
  .then(() => process.exit(0))
  .catch((error) => { console.error('❌ Export failed:', error); process.exit(1) })