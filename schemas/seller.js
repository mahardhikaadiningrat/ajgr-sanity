export default {
  name: 'seller',
  title: 'Rolodex (Seller & Builder)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Toko / Builder',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Toko Sparepart / Sepeda', value: 'shop' },
          { title: 'Custom Builder / Welder', value: 'builder' },
          { title: 'Workshop / Servis', value: 'workshop' },
          { title: 'Cafe Ramah Pesepeda', value: 'cafe' },
        ],
      },
    },
    {
      name: 'logo',
      title: 'Logo / Foto Toko',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'address',
      title: 'Alamat Lengkap',
      type: 'text',
      rows: 3,
    },
    {
      name: 'mapLink',
      title: 'Link Google Maps',
      type: 'url',
      description: 'Paste link share location dari Google Maps',
    },
    {
      name: 'whatsapp',
      title: 'Nomor WhatsApp',
      type: 'string',
      description: 'Format: 628123456789 (tanpa + atau 0 di depan)',
    },
    {
      name: 'specialties',
      title: 'Spesialisasi',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Contoh: Brompton, Ban Vintage, Restorasi Cat',
    },
    {
      name: 'isFeatured',
      title: 'Tampilkan di Homepage?',
      type: 'boolean',
      description: 'Centang jika ingin toko/seller ini muncul di bagian "Recommended Rolodex" di halaman depan',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo',
    },
  },
}