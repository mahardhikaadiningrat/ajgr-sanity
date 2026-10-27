export default {
  name: 'post',
  title: 'Journal & Rides',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Artikel',
      type: 'string',
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
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Laporan Gowes', value: 'rides' },
          { title: 'Artikel', value: 'article' },
          { title: 'Tips & Trick', value: 'tips' },
          { title: 'Review', value: 'review' },
          { title: 'Opini', value: 'opinion' },
        ],
      },
    },
    {
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Foto Utama',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Isi Artikel',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Number', value: 'number' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', type: 'string', title: 'Caption' },
          ],
        },
      ],
    },
    // === FIELD RUTE ===
    {
      name: 'routeUrl',
      title: 'Link Rute / GPX',
      type: 'url',
      description: 'Paste link rute dari Relive, Komoot, Strava, atau Google Maps. Kosongkan jika tidak ada rute.',
    },
    {
      name: 'routePlatform',
      title: 'Platform Rute',
      type: 'string',
      options: {
        list: [
          { title: 'Relive', value: 'relive' },
          { title: 'Komoot', value: 'komoot' },
          { title: 'Strava', value: 'strava' },
          { title: 'Google Maps', value: 'google' },
          { title: 'Lainnya (hanya tombol)', value: 'other' },
        ],
        layout: 'radio',
      },
      description: 'Pilih platform rute untuk menentukan cara tampilan embed',
      hidden: ({ parent }) => !parent?.routeUrl,
    },
    {
      name: 'routeDistance',
      title: 'Jarak Tempuh (km)',
      type: 'number',
      description: 'Contoh: 45',
      hidden: ({ parent }) => !parent?.routeUrl,
    },
    {
      name: 'routeDuration',
      title: 'Durasi (jam)',
      type: 'string',
      description: 'Contoh: 2.5 jam',
      hidden: ({ parent }) => !parent?.routeUrl,
    },
    // === FIELD BARU: DOKUMENTASI DRIVE ===
    {
      name: 'documentationDriveLink',
      title: 'Link Dokumentasi Google Drive',
      type: 'url',
      description: 'Paste link folder Google Drive berisi foto dokumentasi kegiatan (opsional).',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
}