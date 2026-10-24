export default {
  name: 'bike',
  title: 'Vintage Archive',
  type: 'document',
  fields: [
    // === INFO DASAR ===
    {
      name: 'title',
      title: 'Nama / Model Sepeda',
      type: 'string',
      description: 'Contoh: Panasonic Presage 1988',
    },
    {
      name: 'brand',
      title: 'Brand / Merk',
      type: 'reference',
      to: [{ type: 'brand' }],
      description: 'Pilih brand yang sudah ada, atau klik "Create new" untuk menambah brand baru',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'year',
      title: 'Tahun Pembuatan',
      type: 'number',
    },
    {
      name: 'country',
      title: 'Negara Asal',
      type: 'string',
      options: {
        list: [
          { title: 'Jepang', value: 'japan' },
          { title: 'Eropa', value: 'europe' },
          { title: 'Amerika', value: 'usa' },
          { title: 'Taiwan', value: 'taiwan' },
          { title: 'Indonesia', value: 'indonesia' },
          { title: 'Kanada', value: 'canada' },
          { title: 'Lainnya', value: 'other' },
        ],
      },
    },
    {
      name: 'type',
      title: 'Tipe Sepeda',
      type: 'string',
      options: {
        list: [
          { title: 'Road Bike', value: 'road' },
          { title: 'Track / Fixie', value: 'track' },
          { title: 'MTB / ATB', value: 'mtb' },
          { title: 'City / Commuter', value: 'city' },
          { title: 'Touring', value: 'touring' },
          { title: 'BMX', value: 'bmx' },
        ],
      },
    },
    {
      name: 'mainImage',
      title: 'Foto Utama',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'gallery',
      title: 'Galeri Foto Detail',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'story',
      title: 'Cerita / Sejarah Sepeda',
      type: 'text',
      rows: 6,
    },

    // === SPESIFIKASI TEKNIS ===
    {
      name: 'frameMaterial',
      title: 'Material Frame',
      type: 'string',
      options: {
        list: [
          { title: 'Steel (CroMoly)', value: 'steel' },
          { title: 'Steel (Hi-Ten)', value: 'hi-ten' },
          { title: 'Aluminium', value: 'aluminium' },
          { title: 'Carbon Fiber', value: 'carbon' },
          { title: 'Titanium', value: 'titanium' },
          { title: 'Bamboo', value: 'bamboo' },
        ],
      },
    },
    {
      name: 'frameSize',
      title: 'Ukuran Frame',
      type: 'string',
      description: 'Contoh: 54cm / M / 21 inch',
    },
    {
      name: 'weight',
      title: 'Berat Sepeda (kg)',
      type: 'number',
      description: 'Contoh: 9.5',
    },
    {
      name: 'groupset',
      title: 'Groupset',
      type: 'string',
      description: 'Contoh: Shimano 600 Arabesque',
    },
    {
      name: 'barSet',
      title: 'Bar Set / Stang',
      type: 'string',
      description: 'Contoh: Nitto B123 Drop Bar, 42cm',
    },
    {
      name: 'stem',
      title: 'Stem',
      type: 'string',
      description: 'Contoh: Nitto Technomic, 100mm',
    },
    {
      name: 'wheelset',
      title: 'Wheelset (Rim + Hub)',
      type: 'string',
      description: 'Contoh: Araya 700C + Shimano 600 Hub',
    },
    {
      name: 'spokes',
      title: 'Jari-jari (Spokes)',
      type: 'string',
      description: 'Contoh: DT Swiss 14g, 32H',
    },
    {
      name: 'tireSize',
      title: 'Ukuran Ban',
      type: 'string',
      description: 'Contoh: 700x25c / 27x1 1/4',
    },
    {
      name: 'crankset',
      title: 'Crankset',
      type: 'string',
      description: 'Contoh: Shimano 600 EX 170mm, 52/42T',
    },
    {
      name: 'cassette',
      title: 'Cassette / Freewheel',
      type: 'string',
      description: 'Contoh: Shimano 6-Speed 13-24T',
    },
    {
      name: 'chain',
      title: 'Rantai',
      type: 'string',
      description: 'Contoh: KMC Z7',
    },
    {
      name: 'brakes',
      title: 'Rem (Brakes)',
      type: 'string',
      description: 'Contoh: Shimano 600 Side Pull',
    },
    {
      name: 'brakeLevers',
      title: 'Tuas Rem (Brake Levers)',
      type: 'string',
      description: 'Contoh: Shimano 600',
    },
    {
      name: 'shifters',
      title: 'Shifter',
      type: 'string',
      description: 'Contoh: Shimano 600 Friction Down Tube',
    },
    {
      name: 'derailleurFront',
      title: 'Front Derailleur',
      type: 'string',
      description: 'Contoh: Shimano 600 EX',
    },
    {
      name: 'derailleurRear',
      title: 'Rear Derailleur',
      type: 'string',
      description: 'Contoh: Shimano 600 EX Long Cage',
    },
    {
      name: 'saddle',
      title: 'Saddle / Sadel',
      type: 'string',
      description: 'Contoh: Brooks B17, San Marco Rolls',
    },
    {
      name: 'seatpost',
      title: 'Seatpost',
      type: 'string',
      description: 'Contoh: Nitto S65, 27.2mm',
    },
    {
      name: 'pedals',
      title: 'Pedal',
      type: 'string',
      description: 'Contoh: MKS Sylvan Track',
    },
    {
      name: 'hubs',
      title: 'Hub',
      type: 'string',
      description: 'Contoh: Shimano 600 32H',
    },
    {
      name: 'gearCount',
      title: 'Jumlah Gear',
      type: 'string',
      description: 'Contoh: 12 Speed (2x6)',
    },
    {
      name: 'condition',
      title: 'Kondisi',
      type: 'string',
      options: {
        list: [
          { title: 'Original / Stock', value: 'original' },
          { title: 'Restored', value: 'restored' },
          { title: 'Modified / Custom', value: 'modified' },
          { title: 'Project (Belum Selesai)', value: 'project' },
        ],
      },
    },
    {
      name: 'notes',
      title: 'Catatan Tambahan',
      type: 'text',
      rows: 4,
      description: 'Info tambahan: sejarah kepemilikan, keunikan, dll',
    },

    // === PENGATURAN TAMPILAN ===
    {
      name: 'isFeatured',
      title: 'Tampilkan di Homepage?',
      type: 'boolean',
      description: 'Centang jika ingin sepeda ini muncul di bagian "Latest from Archive" di halaman depan',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'mainImage',
    },
  },
}