export type ProductionService = {
  slug: string
  name: string
  eyebrow: string
  summary: string
  description: string
  detailTitle: string
  relatedSlugs: string[]
  ctaTitle: string
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
    detailTitle: 'Visual yang dirancang untuk kebutuhan Anda.',
    description: 'Kami membantu menyiapkan visual produk yang selaras dengan karakter brand dan tujuan publikasinya. Arah foto, latar, dan format hasil dibicarakan bersama sebelum produksi.',
    relatedSlugs: ['foto-video-event', 'portrait-corporate', 'brand-lifestyle'],
    ctaTitle: 'Siapkan proyek foto produk Anda.',
    scope: ['Foto katalog dan e-commerce', 'Foto detail dan variasi produk', 'Visual produk untuk materi promosi'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW999IS7TfUmCaaOVbj7s8vQAYv-DcnRckGTAQk9Y9pAEloxNU01N_XIEeTQkhiPRhurlNmBNJUYoT9HvikNobYehB5ix1MrG2IqEmj9OEaYR9Vg7inWM1NXnPdFB93qHgpP2sL4DO1-aQ1IAQRAbYARop5ROryi56PzDFpG6bzdgjB_HiB9V00fWOUGnY5S6OdTzLMIMn5q5U4WBiDWP-dB8yFSb4UoQGyYaLIJA',
    imageAlt: 'Foto produk untuk kebutuhan katalog dan promosi brand',
  },
  {
    slug: 'foto-video-event',
    name: 'Foto & Video Event',
    eyebrow: 'Dokumentasi acara',
    summary: 'Dokumentasi foto dan video untuk seminar, gathering, peluncuran, konser, dan acara perusahaan.',
    detailTitle: 'Menangkap setiap momen penting secara presisi.',
    description: 'Tim dokumentasi kami bekerja sigap dan senyap di lapangan untuk menangkap atmosfer acara, ekspresi autentik para tamu, serta momen puncak panggung tanpa mengganggu jalannya rangkaian acara Anda.',
    relatedSlugs: ['foto-produk', 'portrait-corporate', 'brand-lifestyle'],
    ctaTitle: 'Siapkan dokumentasi event Anda.',
    scope: ['Dokumentasi foto acara', 'Dokumentasi video dan highlight', 'Liputan seminar, gathering, dan peluncuran'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv1IIHnLIN1O3JKtfMOrYCwMhYB3lIAYx3Ehe9OxpawWHf7KGMymJpdEzY596bEVGKJ4jbf54uzntaH6MfgOBHlkQ5cxiVqgi7d8VfACdHRc4RLdWs5sLmBiugX4ueXXVjgs8aUjsfJ0mF8oze20QvUVsObAG6e539613YyMOwsODZxX3-y221A8dU69zHNQJSY8I47-UwaxE-aETL0v2uMkvbOHlIJiXzWOFmdnY',
    imageAlt: 'Suasana panggung dalam sebuah acara',
  },
  {
    slug: 'portrait-corporate',
    name: 'Foto Portrait & Corporate',
    eyebrow: 'Portrait profesional',
    summary: 'Headshot profesional, foto tim, dan portrait editorial untuk kebutuhan personal branding dan perusahaan.',
    detailTitle: 'Membangun citra otoritas dan kredibilitas tim.',
    description: 'Kami menghadirkan sesi portrait yang nyaman dengan pengarahan pose profesional untuk jajaran direksi, C-level, dan tim perusahaan. Setiap frame dirancang agar selaras dengan karakter kepemimpinan dan standar visual korporasi Anda.',
    relatedSlugs: ['foto-produk', 'foto-video-event', 'brand-lifestyle'],
    ctaTitle: 'Siapkan sesi portrait korporat Anda.',
    scope: ['Headshot dan portrait profesional', 'Foto tim dan lingkungan kerja', 'Portrait untuk profil dan publikasi perusahaan'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAouDsfwm7kPqRleZNtohp8Dax1Ai05bHzrO11rrJWkcm0KrZi-zTBgGUTZrdnA_yW9maycZOnnQS4vppl9AMcR6Q3O04c2zksljVry_-ANl8pTKmVlby2CKs340wAEpXTKLTE7QCq8J_xREqjXbkcJvjLYRhVNGUXya4G9Qmpf6-BwrHmfdKZ2mzPvZcYFIw_YG_rp-xW5g0g7xk9_6IkQjB0Fg72QRcKIYj0TkoY',
    imageAlt: 'Portrait editorial dengan pencahayaan natural',
  },
  {
    slug: 'brand-lifestyle',
    name: 'Brand & Lifestyle',
    eyebrow: 'Cerita visual brand',
    summary: 'Konten foto dan video yang memperkuat identitas brand dengan estetika yang konsisten.',
    detailTitle: 'Visual bercerita yang dekat dengan audiens.',
    description: 'Kami merancang narasi visual otentik yang menghubungkan karakter brand Anda dengan gaya hidup audiens secara emosional. Mulai dari kampanye fashion, F&B artisan, hingga resort dan hospitality, setiap frame diarahkan dengan presisi editorial dan konsistensi warna.',
    relatedSlugs: ['foto-produk', 'portrait-corporate', 'komersial-iklan'],
    ctaTitle: 'Siapkan kampanye brand Anda.',
    scope: ['Foto dan video campaign', 'Konten lifestyle untuk kanal digital', 'Visual brand untuk kebutuhan promosi'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEziX6mcNiC5ReES9ht9_5Z09emBXM2YysSI2tl3G18nznXJUUx0N_c0Rnbk6cMzEebeLL0AjHZPT_CuwoZGcMEf69-DYTeFgz9Ba3x6of8mHCgKbTt9gOngoy0GUrzRSL9Y0_7LrvaWnfbdxfvhXTfuuJ3ThDKl16Q5pcrvslHdS59JLqZ8239AhBQyyhTOJe7jhWOH5bgf5N4r_FuuhcFtULjtv4cbfjT6okcfA',
    imageAlt: 'Kampanye editorial brand dan lifestyle',
  },
  {
    slug: 'komersial-iklan',
    name: 'Komersial & Iklan',
    eyebrow: 'Produksi konten komersial',
    summary: 'Produksi video iklan komersial berstandar sinema untuk TVC, kampanye digital, dan peluncuran produk.',
    detailTitle: 'Produksi iklan sinematik berdaya pikat tinggi.',
    description: 'Kami mengeksekusi konsep kreatif secara menyeluruh, mulai dari pengembangan naskah, penyusunan storyboard, tata kamera anamorphic, hingga proses color grading berstandar tayang untuk memastikan pesan brand Anda tampil memukau di setiap layar.',
    relatedSlugs: ['foto-produk', 'brand-lifestyle', 'company-profile-visual-digital'],
    ctaTitle: 'Siapkan proyek iklan komersial Anda.',
    scope: ['Video iklan dan konten komersial', 'Foto untuk kampanye promosi', 'Materi visual untuk kanal digital'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7Rj2N4Z5s5aUPUxDdFt0QTeTjLTXk4Z4zceiwcq1PQv4gCwftBanYKSbSaQDXSL9Tzlk1Zb8e08C1eszD1Re6KvbElsycCrPlToELAEuBPW8d4Q3mudhnvZII8gg1gn2Z1DbRZK14d8N2si5SARxEuo_Kq64DE5_M2p0HjVRRk1GzKozTi8QYl0m6qOoco7lrhHhnVkaAseXQ07L_G0Y6r8GsIkSo1vzECCSr4Sk',
    imageAlt: 'Persiapan produksi komersial dengan kamera dan lampu',
  },
  {
    slug: 'company-profile-visual-digital',
    name: 'Company Profile & Visual Digital',
    eyebrow: 'Profil perusahaan',
    summary: 'Representasi visual otoritatif untuk memperkuat reputasi korporasi di mata mitra strategis dan investor.',
    detailTitle: 'Narasi korporat yang kredibel dan monumental.',
    description: 'Kami menggabungkan wawancara mendalam dengan pemangku kepentingan, dokumentasi fasilitas berpresisi tinggi, serta visual infografis yang terstruktur untuk membangun kepercayaan mitra strategis dan investor.',
    relatedSlugs: ['foto-video-event', 'portrait-corporate', 'komersial-iklan'],
    ctaTitle: 'Siapkan video company profile Anda.',
    scope: ['Video company profile', 'Foto perusahaan dan tim', 'Konten visual untuk website dan media sosial'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrIYyCSj0FUzGnUM0PZKre5BmO7aDXT1nEAnEXa6dqhM1Ce4wXzazOrjRElJVZ7fQqC2x1N0635yVl0mDUuygYSdiDMhm_et2WM2u2uObrfzINcJsnoi_DDM_W7qCvNYMNwxlGhL2WB0LW4cap8Ft4M5ZasGsKi1esLrlMVegCLL0IJ8SSaSnghc_nAeh301Lk1taIK_ckUlGAkUYTt97f44ewaSb50DejQQ4inAs',
    imageAlt: 'Kamera profesional saat produksi video',
  },
]
