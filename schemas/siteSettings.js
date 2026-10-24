export default {
  name: 'siteSettings',
  title: 'Pengaturan Website',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Judul Website (Tab Browser)',
      type: 'string',
      initialValue: 'AJGR.cc - Komunitas Sepeda Gianyar'
    },
    {
      name: 'siteDescription',
      title: 'Deskripsi Website (untuk SEO)',
      type: 'text',
      rows: 3,
      initialValue: 'Komunitas sepeda vintage & klasik di Gianyar, Bali.'
    },
    {
      name: 'favicon',
      title: 'Site Icon / Favicon',
      type: 'image',
      description: 'Ikon kecil yang muncul di tab browser (format PNG/SVG, ukuran 32x32px atau 64x64px)'
    },
    {
      name: 'logo',
      title: 'Logo Website',
      type: 'image',
      description: 'Logo yang muncul di header website'
    },
    {
      name: 'headerMenu',
      title: 'Menu Navigasi Header',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Nama Menu', type: 'string' },
            { name: 'link', title: 'Tujuan Link (misal: /, /journal)', type: 'string' }
          ]
        }
      ],
      initialValue: [
        { label: 'Home', link: '/' },
        { label: 'Journal', link: '/journal' },
        { label: 'Archive', link: '/archive' },
        { label: 'Rolodex', link: '/rolodex' }
      ]
    },
    {
      name: 'footerCredit',
      title: 'Teks Footer / Credit',
      type: 'string',
      initialValue: '© 2026 AJGR.cc - Komunitas Sepeda Gianyar, Bali'
    },
    {
      name: 'themeColor',
      title: 'Warna Utama (Accent)',
      type: 'string',
      description: 'Kode HEX warna (misal: #C84B8E)',
      initialValue: '#C84B8E'
    },
    {
      name: 'heroSection',
      title: 'Bagian Hero (Halaman Depan)',
      type: 'object',
      fields: [
        {
          name: 'subtitle',
          title: 'Subtitle Kecil di Atas Judul',
          type: 'string',
          description: 'Contoh: — KOMUNITAS SEPEDA GIANYAR',
          initialValue: '— KOMUNITAS SEPEDA GIANYAR'
        },
        {
          name: 'footerTagline',
          title: 'Teks Tagline Footer (Pojok Kanan)',
          type: 'string',
          description: 'Teks kecil yang muncul di pojok kanan bawah footer',
          initialValue: 'DESIGNED FOR VELOCITY'
        }, 
        {
          name: 'titleLine1',
          title: 'Judul Baris 1',
          type: 'string',
          initialValue: 'Bersepeda,'
        },
        {
          name: 'titleLine2',
          title: 'Judul Baris 2 (Italic)',
          type: 'string',
          initialValue: 'bercerita,'
        },
        {
          name: 'titleLine3',
          title: 'Judul Baris 3',
          type: 'string',
          initialValue: 'bersama.'
        },
        {
          name: 'description',
          title: 'Deskripsi di Bawah Judul',
          type: 'text',
          rows: 3,
          initialValue: 'AJGR.cc adalah ruang digital untuk komunitas sepeda vintage dan klasik di Gianyar, Bali. Tempat kami berbagi perjalanan, merawat sepeda tua, dan bertemu sesama pesepeda.'
        }
      ]
    },

    // === PENGATURAN HALAMAN JOURNAL ===
    {
      name: 'journalSection',
      title: 'Pengaturan Halaman Journal',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label Section (contoh: "03 — STORIES")',
          type: 'string',
          initialValue: '03 — STORIES',
        },
        {
          name: 'title',
          title: 'Judul Halaman',
          type: 'string',
          initialValue: 'The Journal',
        },
        {
          name: 'description',
          title: 'Deskripsi Halaman',
          type: 'text',
          rows: 2,
          initialValue: 'Catatan perjalanan, cerita dari jalanan, dan pemikiran tentang dunia sepeda dari anggota AJGR.cc.',
        },
      ],
    },

    // === PENGATURAN HALAMAN ARCHIVE ===
    {
      name: 'archiveSection',
      title: 'Pengaturan Halaman Archive',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label Section (contoh: "02 — COLLECTION")',
          type: 'string',
          initialValue: '02 — COLLECTION',
        },
        {
          name: 'title',
          title: 'Judul Halaman',
          type: 'string',
          initialValue: 'The Archive',
        },
        {
          name: 'description',
          title: 'Deskripsi Halaman',
          type: 'text',
          rows: 2,
          initialValue: 'Katalog sepeda vintage yang dirawat dengan cinta oleh anggota AJGR.cc. Setiap sepeda memiliki cerita dan sejarahnya sendiri.',
        },
      ],
    },

    // === PENGATURAN HALAMAN MARKETPLACE ===
    {
      name: 'marketplaceSection',
      title: 'Pengaturan Halaman Marketplace',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label Section (contoh: "04 — MARKETPLACE")',
          type: 'string',
          initialValue: '04 — MARKETPLACE',
        },
        {
          name: 'title',
          title: 'Judul Halaman',
          type: 'string',
          initialValue: 'The Marketplace',
        },
        {
          name: 'description',
          title: 'Deskripsi Halaman',
          type: 'text',
          rows: 2,
          initialValue: 'Jual-beli part sepeda vintage dari anggota AJGR.cc. Hubungi penjual langsung via WhatsApp.',
        },
      ],
    },

    // === PENGATURAN HALAMAN EVENTS ===
    {
      name: 'eventsSection',
      title: 'Pengaturan Halaman Events',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label Section (contoh: "05 — CALENDAR")',
          type: 'string',
          initialValue: '05 — CALENDAR',
        },
        {
          name: 'title',
          title: 'Judul Halaman',
          type: 'string',
          initialValue: 'Upcoming Events',
        },
        {
          name: 'description',
          title: 'Deskripsi Halaman',
          type: 'text',
          rows: 2,
          initialValue: 'Agenda kegiatan, gowes bersama, dan event komunitas AJGR.cc.',
        },
      ],
    },

    // === PENGATURAN HALAMAN ROLODEX ===
    {
      name: 'rolodexSection',
      title: 'Pengaturan Halaman Rolodex',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label Section (contoh: "01 — DIRECTORY")',
          type: 'string',
          initialValue: '01 — DIRECTORY',
        },
        {
          name: 'title',
          title: 'Judul Halaman',
          type: 'string',
          initialValue: 'The Rolodex',
        },
        {
          name: 'description',
          title: 'Deskripsi Halaman',
          type: 'text',
          rows: 2,
          initialValue: 'Direktori toko, builder, dan komunitas sepeda di Gianyar dan sekitarnya.',
        },
      ],
    },

    // === PENGATURAN SECTION HOMEPAGE (DITAMBAHKAN FIELD COUNT) ===
    {
      name: 'homepageSections',
      title: 'Pengaturan Section Homepage',
      type: 'object',
      fields: [
        // --- JOURNAL ---
        {
          name: 'showJournal',
          title: 'Tampilkan Section "Latest from Journal"',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'journalTitle',
          title: 'Judul Section Journal di Homepage',
          type: 'string',
          initialValue: 'Latest from Journal',
        },
        {
          name: 'journalCount',
          title: 'Jumlah Artikel yang Ditampilkan',
          type: 'number',
          description: 'Berapa artikel terbaru yang ditampilkan (misal: 4)',
          initialValue: 4,
        },
        
        // --- ARCHIVE ---
        {
          name: 'showArchive',
          title: 'Tampilkan Section "Latest from Archive"',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'archiveTitle',
          title: 'Judul Section Archive di Homepage',
          type: 'string',
          initialValue: 'Latest from Archive',
        },
        {
          name: 'archiveCount',
          title: 'Jumlah Sepeda yang Ditampilkan',
          type: 'number',
          description: 'Berapa sepeda terbaru yang ditampilkan (misal: 4)',
          initialValue: 4,
        },
        
        // --- ROLODEX ---
        {
          name: 'showRolodex',
          title: 'Tampilkan Section "Recommended Rolodex"',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'rolodexTitle',
          title: 'Judul Section Rolodex di Homepage',
          type: 'string',
          initialValue: 'Recommended Rolodex',
        },
        {
          name: 'rolodexCount',
          title: 'Jumlah Seller yang Ditampilkan',
          type: 'number',
          description: 'Berapa seller yang ditampilkan (misal: 4)',
          initialValue: 4,
        },
        
        // --- MARKETPLACE ---
        {
          name: 'showMarketplace',
          title: 'Tampilkan Section "Featured Parts" (Marketplace)',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'marketplaceTitle',
          title: 'Judul Section Marketplace di Homepage',
          type: 'string',
          initialValue: 'Featured Parts',
        },
        {
          name: 'marketplaceLabel',
          title: 'Label Section Marketplace di Homepage',
          type: 'string',
          initialValue: '06 — MARKETPLACE',
        },
        {
          name: 'marketplaceCount',
          title: 'Jumlah Part yang Ditampilkan',
          type: 'number',
          description: 'Berapa part marketplace yang ditampilkan (misal: 4)',
          initialValue: 4,
        },
        
        // --- EVENTS ---
        {
          name: 'showEvents',
          title: 'Tampilkan Section "Upcoming Events"',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'eventsTitle',
          title: 'Judul Section Events di Homepage',
          type: 'string',
          initialValue: 'Upcoming Events',
        },
        {
          name: 'eventsLabel',
          title: 'Label Section Events di Homepage',
          type: 'string',
          initialValue: '05 — CALENDAR',
        },
        {
          name: 'eventsCount',
          title: 'Jumlah Event yang Ditampilkan',
          type: 'number',
          description: 'Berapa event yang ditampilkan (misal: 4)',
          initialValue: 4,
        },
        {
          name: 'collaborationWhatsApp',
          title: 'Nomor WhatsApp untuk Permintaan Kerja Sama',
          type: 'string',
          description: 'Nomor WhatsApp yang akan menerima pesan dari form kerja sama. Format: 6281234567890 (tanpa +, tanpa spasi, tanpa 0 di depan).',
          initialValue: '6281234567890',
          validation: Rule => Rule.required().min(10),
        },
      ],
    },
  ]
}