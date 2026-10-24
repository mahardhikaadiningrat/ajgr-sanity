export default {
  name: 'event',
  title: 'Event / Kegiatan',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Event',
      type: 'string',
      description: 'Contoh: Gowes Bareng Minggu Pagi',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'startDate',
      title: 'Tanggal Mulai',
      type: 'datetime',
    },
    {
      name: 'endDate',
      title: 'Tanggal Selesai (Opsional)',
      type: 'datetime',
      description: 'Isi jika event lebih dari 1 hari',
    },
    {
      name: 'category',
      title: 'Kategori Event',
      type: 'string',
      options: {
        list: [
          { title: 'Gowes Bareng', value: 'gowes' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Meetup / Kopdar', value: 'meetup' },
          { title: 'Lomba / Race', value: 'race' },
          { title: 'Bazaar', value: 'bazaar' },
          { title: 'Lainnya', value: 'other' },
        ],
      },
    },
    {
      name: 'meetingPoint',
      title: ' Titik Kumpul',
      type: 'string',
      description: 'Lokasi tempat berkumpul sebelum acara dimulai',
    },
    {
      name: 'finishPoint',
      title: '🏁 Titik Finish',
      type: 'string',
      description: 'Lokasi finish atau tujuan akhir acara',
    },
    {
      name: 'location',
      title: 'Lokasi / Alamat (Alternatif)',
      type: 'string',
      description: 'Alamat lengkap tempat event (opsional, jika berbeda dengan titik finish)',
    },
    {
      name: 'mapsLink',
      title: 'Link Google Maps',
      type: 'url',
      description: 'Paste link share location dari Google Maps',
    },
    {
      name: 'description',
      title: 'Deskripsi Event',
      type: 'text',
      rows: 5,
    },
    {
      name: 'poster',
      title: 'Poster / Gambar Event',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'status',
      title: 'Status Event',
      type: 'string',
      options: {
        list: [
          { title: 'Coming Soon', value: 'coming-soon' },
          { title: 'Open Registration', value: 'open' },
          { title: 'Full', value: 'full' },
          { title: 'Selesai', value: 'finished' },
          { title: 'Dibatalkan', value: 'cancelled' },
        ],
      },
    },
    {
      name: 'price',
      title: 'Harga / Biaya',
      type: 'string',
      description: 'Contoh: Gratis atau Rp 50.000',
    },
    {
      name: 'quota',
      title: 'Kuota Peserta',
      type: 'number',
      description: 'Jumlah maksimal peserta (kosongkan jika unlimited)',
    },
    {
      name: 'registeredCount',
      title: 'Jumlah Peserta Terdaftar',
      type: 'number',
      description: 'Update manual saat ada pendaftar baru',
    },
    {
      name: 'registrationLink',
      title: 'Link Pendaftaran',
      type: 'url',
      description: 'Link Google Form atau WhatsApp',
    },
    {
      name: 'contactPIC',
      title: 'Kontak PIC (Penanggung Jawab)',
      type: 'string',
      description: 'Contoh: Made - 081234567890',
    },
    {
      name: 'isFeatured',
      title: 'Tampilkan di Homepage?',
      type: 'boolean',
      description: 'Centang jika ingin event ini muncul di halaman depan',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'poster',
    },
  },
}