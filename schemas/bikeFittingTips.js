export default {
  name: 'bikeFittingTips',
  title: 'Panduan & Tips Bike Fitting',
  type: 'document',
  fields: [
    {
      name: 'roadBikeAdvice',
      title: 'Saran untuk Road Bike',
      type: 'text',
      rows: 4,
      initialValue: 'Untuk road bike, posisi saddle yang tepat sangat krusial untuk efisiensi kayuhan. Pastikan lutut tidak terlalu lurus (lock) di bagian bawah kayuhan.'
    },
    {
      name: 'mtbAdvice',
      title: 'Saran untuk MTB / Gravel',
      type: 'text',
      rows: 4,
      initialValue: 'Untuk MTB/Gravel, saddle biasanya diatur sedikit lebih rendah dari road bike untuk memberikan ruang gerak tubuh saat menghadapi medan teknis dan turunan.'
    },
    {
      name: 'generalAdvice',
      title: 'Saran Umum (Disclaimer)',
      type: 'text',
      rows: 4,
      initialValue: 'Perhitungan ini adalah estimasi awal berdasarkan antropometri dasar. Untuk hasil presisi tinggi, sangat disarankan melakukan fitting langsung bersama profesional bike fitter.'
    }
  ]
}