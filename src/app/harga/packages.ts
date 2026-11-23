export type PriceCategory = {
  slug: string
  name: string
  eyebrow: string
  summary: string
  description: string
  factors: string[]
  image: string
  imageAlt: string
}

export const priceCategories: PriceCategory[] = [
  {
    slug: 'dokumentasi-event',
    name: 'Harga Produksi Event',
    eyebrow: 'Foto dan video event',
    summary: 'Ruang lingkup dokumentasi acara menyesuaikan durasi, lokasi, dan kebutuhan hasil akhir.',
    description: 'Setiap acara memiliki susunan momen dan kebutuhan publikasi yang berbeda. Kami menyusun penawaran setelah memahami rundown, cakupan dokumentasi, dan format materi yang dibutuhkan.',
    factors: ['Durasi dan jadwal acara', 'Jumlah fotografer atau videografer', 'Lokasi serta kebutuhan perjalanan', 'Pilihan foto, video highlight, atau keduanya'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Panggung acara dengan pencahayaan warna-warni',
  },
  {
    slug: 'foto-produk',
    name: 'Harga Foto Produk',
    eyebrow: 'Foto produk dan katalog',
    summary: 'Penawaran foto produk disesuaikan dengan jumlah produk, konsep visual, dan format penggunaan.',
    description: 'Kami membahas kebutuhan katalog, e-commerce, atau materi promosi terlebih dahulu agar jumlah foto, pendekatan visual, dan hasil akhir sesuai dengan kebutuhan brand.',
    factors: ['Jumlah dan variasi produk', 'Konsep, set, dan latar foto', 'Kebutuhan talent atau properti', 'Jumlah foto akhir dan format publikasi'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Jam tangan sebagai contoh fotografi produk',
  },
  {
    slug: 'company-profile',
    name: 'Harga Company Profile',
    eyebrow: 'Video profil perusahaan',
    summary: 'Biaya produksi profil perusahaan ditentukan oleh konsep cerita, lokasi, durasi, dan kebutuhan versi video.',
    description: 'Ruang lingkup dapat mencakup perencanaan cerita, pengambilan gambar, dan penyuntingan. Detail pekerjaan disesuaikan dengan pesan perusahaan dan kanal publikasi.',
    factors: ['Konsep dan kebutuhan pra-produksi', 'Jumlah lokasi dan hari pengambilan gambar', 'Durasi serta format video akhir', 'Kebutuhan foto pendukung atau versi tambahan'],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Ruang kerja modern untuk profil perusahaan',
  },
]
