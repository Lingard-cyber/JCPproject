export type PriceCategory = {
  slug: string
  name: string
  eyebrow: string
  summary: string
  description: string
  factors: { title: string; description: string; tag: string }[]
  facts: { label: string; value: string }[]
  packages: { tier: string; name: string; badge?: string; description: string; features: string[]; action: string }[]
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
    factors: [
      { title: 'Durasi dan jadwal acara', description: 'Cakupan produksi disesuaikan dengan rangkaian acara, dari persiapan hingga momen penutup. Jadwal panjang dapat memerlukan pergantian kru.', tag: 'Waktu produksi' },
      { title: 'Jumlah kru dan operator kamera', description: 'Kebutuhan fotografer, videografer, dan operator kamera ditentukan oleh ukuran area dan momen yang perlu direkam bersamaan.', tag: 'Personel' },
      { title: 'Lokasi serta kebutuhan perjalanan', description: 'Akses lokasi, jarak tempuh, dan kebutuhan akomodasi membantu kami menyusun rencana produksi yang realistis.', tag: 'Lokasi' },
      { title: 'Pilihan foto, video, dan hasil akhir', description: 'Pilih dokumentasi foto, highlight video, atau keduanya. Format dan durasi hasil mengikuti kanal publikasi Anda.', tag: 'Hasil akhir' },
    ],
    facts: [{ label: 'Format', value: 'Foto & video' }, { label: 'Tim', value: 'Multi-kamera' }, { label: 'Hasil', value: 'Siap publikasi' }],
    packages: [
      { tier: 'Tier 01', name: 'Essential Event', description: 'Cakupan inti untuk acara dengan satu lokasi dan rangkaian yang ringkas.', features: ['Fotografer atau videografer', 'Dokumentasi momen utama', 'Galeri digital hasil akhir'], action: 'Minta estimasi biaya' },
      { tier: 'Tier 02', name: 'Comprehensive Coverage', badge: 'Paling direkomendasikan', description: 'Dokumentasi menyeluruh untuk rangkaian acara dan kebutuhan publikasi.', features: ['Fotografi dan sinematografi', 'Liputan beberapa sesi acara', 'Video highlight dan foto pilihan', 'Pengiriman file digital'], action: 'Pilih cakupan ini' },
      { tier: 'Tier 03', name: 'Festival & Commercial', description: 'Produksi skala besar dengan beberapa titik liputan dan kebutuhan output khusus.', features: ['Multi-kamera dan kru tambahan', 'Liputan beberapa area', 'Format hasil untuk berbagai kanal', 'Koordinasi produksi khusus'], action: 'Diskusikan proyek besar' },
    ],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Panggung acara dengan pencahayaan warna-warni',
  },
  {
    slug: 'foto-produk',
    name: 'Harga Foto Produk',
    eyebrow: 'Foto produk dan katalog',
    summary: 'Penawaran foto produk disesuaikan dengan jumlah produk, konsep visual, dan format penggunaan.',
    description: 'Kami membahas kebutuhan katalog, e-commerce, atau materi promosi terlebih dahulu agar jumlah foto, pendekatan visual, dan hasil akhir sesuai dengan kebutuhan brand.',
    factors: [
      { title: 'Jumlah dan variasi produk', description: 'Jumlah SKU, variasi warna, dan detail yang perlu ditampilkan menentukan waktu set dan jumlah foto akhir.', tag: 'Volume produk' },
      { title: 'Konsep, set, dan latar foto', description: 'Arah visual dapat menggunakan set sederhana atau tata artistik khusus sesuai karakter brand.', tag: 'Konsep' },
      { title: 'Talent atau properti pendukung', description: 'Kebutuhan model, food stylist, properti, dan set tambahan dibahas sejak perencanaan produksi.', tag: 'Tim & properti' },
      { title: 'Jumlah foto dan format publikasi', description: 'Format katalog, marketplace, media sosial, dan iklan memiliki spesifikasi serta kebutuhan crop yang berbeda.', tag: 'Hasil akhir' },
    ],
    facts: [{ label: 'Format', value: 'Katalog & campaign' }, { label: 'Gaya', value: 'Studio / lifestyle' }, { label: 'Hasil', value: 'Siap publikasi' }],
    packages: [
      { tier: 'Tier 01', name: 'Essential Catalog', description: 'Visual katalog yang rapi untuk lini produk inti.', features: ['Satu konsep latar', 'Foto katalog pilihan', 'Retouch dasar', 'File digital resolusi tinggi'], action: 'Minta estimasi biaya' },
      { tier: 'Tier 02', name: 'Brand Collection', badge: 'Paling direkomendasikan', description: 'Ragam visual produk untuk katalog dan kanal promosi brand.', features: ['Beberapa setup visual', 'Foto detail dan lifestyle', 'Art direction produksi', 'Format untuk kanal digital'], action: 'Pilih cakupan ini' },
      { tier: 'Tier 03', name: 'Campaign Production', description: 'Produksi kampanye lengkap dengan set, talent, dan aset yang lebih beragam.', features: ['Konsep visual campaign', 'Talent dan properti sesuai brief', 'Foto hero dan variasi konten', 'Aset untuk beberapa kanal'], action: 'Diskusikan proyek besar' },
    ],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Jam tangan sebagai contoh fotografi produk',
  },
  {
    slug: 'company-profile',
    name: 'Harga Company Profile',
    eyebrow: 'Video profil perusahaan',
    summary: 'Biaya produksi profil perusahaan ditentukan oleh konsep cerita, lokasi, durasi, dan kebutuhan versi video.',
    description: 'Ruang lingkup dapat mencakup perencanaan cerita, pengambilan gambar, dan penyuntingan. Detail pekerjaan disesuaikan dengan pesan perusahaan dan kanal publikasi.',
    factors: [
      { title: 'Konsep dan kebutuhan pra-produksi', description: 'Riset, naskah, wawancara, dan perencanaan visual disesuaikan dengan pesan perusahaan.', tag: 'Pra-produksi' },
      { title: 'Lokasi dan hari pengambilan gambar', description: 'Jumlah fasilitas, lokasi, dan jadwal narasumber menentukan kebutuhan hari produksi.', tag: 'Produksi' },
      { title: 'Durasi serta format video akhir', description: 'Video utama, versi pendek, subtitle, dan format vertikal dapat disiapkan sesuai kanal.', tag: 'Deliverables' },
      { title: 'Foto pendukung atau versi tambahan', description: 'Foto tim, fasilitas, dan versi bahasa lain dapat dimasukkan ke ruang lingkup proyek.', tag: 'Tambahan' },
    ],
    facts: [{ label: 'Format', value: 'Company profile' }, { label: 'Cakupan', value: 'End-to-end' }, { label: 'Hasil', value: 'Multi-kanal' }],
    packages: [
      { tier: 'Tier 01', name: 'Core Profile', description: 'Video profil inti untuk kebutuhan perkenalan perusahaan.', features: ['Perencanaan cerita', 'Satu hari produksi', 'Video utama hasil suntingan', 'File digital siap presentasi'], action: 'Minta estimasi biaya' },
      { tier: 'Tier 02', name: 'Corporate Story', badge: 'Paling direkomendasikan', description: 'Cerita perusahaan yang lebih lengkap dengan beberapa narasumber dan lokasi.', features: ['Riset dan arahan cerita', 'Beberapa lokasi dan narasumber', 'Video utama dan versi singkat', 'Foto pendukung terpilih'], action: 'Pilih cakupan ini' },
      { tier: 'Tier 03', name: 'Visual Ecosystem', description: 'Paket aset visual untuk komunikasi korporat di berbagai kanal.', features: ['Produksi multi-hari', 'Video dan fotografi perusahaan', 'Versi kanal digital dan presentasi', 'Aset visual terkoordinasi'], action: 'Diskusikan proyek besar' },
    ],
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Ruang kerja modern untuk profil perusahaan',
  },
]
