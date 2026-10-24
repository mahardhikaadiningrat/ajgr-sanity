export default {
  name: 'brand',
  title: 'Brand Sepeda',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nama Brand',
      type: 'string',
      description: 'Contoh: Marin, Bridgestone, Panasonic',
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
      name: 'country',
      title: 'Negara Asal Brand',
      type: 'string',
      options: {
        list: [
          { title: 'Jepang', value: 'japan' },
          { title: 'Amerika', value: 'usa' },
          { title: 'Eropa', value: 'europe' },
          { title: 'Taiwan', value: 'taiwan' },
          { title: 'Indonesia', value: 'indonesia' },
          { title: 'Kanada', value: 'canada' },
          { title: 'Lainnya', value: 'other' },
        ],
      },
    },
    {
      name: 'foundedYear',
      title: 'Tahun Berdiri (Opsional)',
      type: 'number',
      description: 'Contoh: 1986',
    },
    {
      name: 'logo',
      title: 'Logo Brand',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Deskripsi Singkat Brand',
      type: 'text',
      rows: 3,
      description: 'Contoh: Brand sepeda gunung asal California, USA',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'country',
      media: 'logo',
    },
  },
}