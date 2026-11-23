export type ProductionService = {
  slug: string
  name: string
  eyebrow: string
  summary: string
  description: string
  scope: string[]
  image: string
  imageAlt: string
}

export const productionServices: ProductionService[] = [
  {
    slug: 'foto-produk',
    name: 'Foto Produk',
    eyebrow: 'Foto produk untuk brand dan bisnis',
    summary: 'Foto produk yang tajam, bersih, dan bercerita untuk katalog, e-commerce, dan iklan digital.',
    description: 'Kami membantu menyiapkan visual produk yang selaras dengan karakter brand dan tujuan publikasinya. Arah foto, latar, dan format hasil dibicarakan bersama sebelum produksi.',
    scope: ['Foto katalog dan e-commerce', 'Foto detail dan variasi produk', 'Visual produk untuk materi promosi'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Perlengkapan kamera untuk produksi foto produk',
  },
  {
    slug: 'foto-video-event',
    name: 'Foto & Video Event',
    eyebrow: 'Dokumentasi acara',
    summary: 'Dokumentasi foto dan video untuk seminar, gathering, peluncuran, konser, dan acara perusahaan.',
    description: 'Momen penting, suasana acara, dan interaksi peserta dirangkum menjadi dokumentasi yang siap digunakan untuk arsip maupun publikasi setelah acara.',
    scope: ['Dokumentasi foto acara', 'Dokumentasi video dan highlight', 'Liputan seminar, gathering, dan peluncuran'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Suasana panggung dalam sebuah acara',
  },
  {
    slug: 'portrait-corporate',
    name: 'Foto Portrait & Corporate',
    eyebrow: 'Portrait profesional',
    summary: 'Headshot profesional, foto tim, dan portrait editorial untuk kebutuhan personal branding dan perusahaan.',
    description: 'Sesi portrait dirancang agar orang dan tim tampil percaya diri serta tetap terasa sesuai dengan identitas brand. Kebutuhan lokasi dan gaya foto disesuaikan dengan penggunaan hasilnya.',
    scope: ['Headshot dan portrait profesional', 'Foto tim dan lingkungan kerja', 'Portrait untuk profil dan publikasi perusahaan'],
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Portrait editorial dengan pencahayaan natural',
  },
  {
    slug: 'brand-lifestyle',
    name: 'Brand & Lifestyle',
    eyebrow: 'Cerita visual brand',
    summary: 'Konten foto dan video yang memperkuat identitas brand dengan estetika yang konsisten.',
    description: 'Kami menerjemahkan karakter brand menjadi cerita visual yang terasa dekat dengan audiens. Konsep, talent, lokasi, dan gaya produksi mengikuti kebutuhan komunikasi Anda.',
    scope: ['Foto dan video campaign', 'Konten lifestyle untuk kanal digital', 'Visual brand untuk kebutuhan promosi'],
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Produksi visual di sebuah panggung acara',
  },
  {
    slug: 'komersial-iklan',
    name: 'Komersial & Iklan',
    eyebrow: 'Produksi konten komersial',
    summary: 'TVC, foto iklan, dan konten kampanye yang dirancang untuk menarik perhatian audiens.',
    description: 'Produksi komersial dimulai dari tujuan komunikasi dan kanal tayang. Kami membantu mengembangkan kebutuhan visual menjadi materi kampanye yang terarah.',
    scope: ['Video iklan dan konten komersial', 'Foto untuk kampanye promosi', 'Materi visual untuk kanal digital'],
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Persiapan produksi komersial dengan kamera dan lampu',
  },
  {
    slug: 'company-profile-visual-digital',
    name: 'Company Profile & Visual Digital',
    eyebrow: 'Profil perusahaan',
    summary: 'Video profil perusahaan dan konten visual untuk website, media sosial, dan presentasi bisnis.',
    description: 'Kami menyusun cerita perusahaan menjadi materi visual yang mudah dipahami dan sesuai dengan konteks penggunaannya, dari presentasi hingga kanal digital.',
    scope: ['Video company profile', 'Foto perusahaan dan tim', 'Konten visual untuk website dan media sosial'],
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Kamera profesional saat produksi video',
  },
]
