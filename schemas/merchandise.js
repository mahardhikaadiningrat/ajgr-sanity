export default {
  name: 'merchandise',
  title: 'Merchandise',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nama Produk',
      type: 'string',
      description: 'Contoh: AJGR Classic Tee - Black',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'images',
      title: 'Gambar Produk',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload foto desain merchandise',
    },
    {
      name: 'price',
      title: 'Harga (Rp)',
      type: 'number',
      description: 'Contoh: 150000 (tanpa titik/koma)',
    },
    {
      name: 'description',
      title: 'Deskripsi Produk',
      type: 'text',
      rows: 4,
      description: 'Deskripsi singkat produk',
    },
    {
      name: 'availableSizes',
      title: 'Ukuran Tersedia',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Contoh: S, M, L, XL, XXL (tekan Enter setelah setiap ukuran)',
    },
    {
      name: 'paymentMethods',
      title: 'Metode Pembayaran',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Contoh: Transfer BCA, Dana, OVO, QRIS, COD',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Tersedia (Pre-Order)', value: 'available' },
          { title: 'Sold Out', value: 'sold-out' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    },
    {
      name: 'isFeatured',
      title: 'Tampilkan di Homepage?',
      type: 'boolean',
      description: 'Centang jika ingin merchandise ini muncul di homepage',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      status: 'status',
      media: 'images.0',
    },
    prepare({ title, price, status, media }) {
      return {
        title: title,
        subtitle: `Rp ${price?.toLocaleString('id-ID')} · ${status}`,
        media: media,
      }
    },
  },
}