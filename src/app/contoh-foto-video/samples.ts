export type WorkSample = {
  slug: string
  label: string
  title: string
  description: string
  context: string
  details: { title: string; description: string; tags: string[] }[]
  facts: { label: string; value: string }[]
  relatedSlugs: string[]
  src: string
  alt: string
}

export const workSamples: WorkSample[] = [
  {
    slug: 'portrait-editorial',
    label: 'Portrait editorial',
    title: 'Portrait dengan karakter',
    description: 'Pendekatan portrait untuk personal branding, editorial, dan profil profesional.',
    context: 'Pendekatan portrait untuk personal branding, editorial, dan profil profesional. Gaya, lokasi, dan kebutuhan hasil akhir dibahas bersama sebelum produksi agar sesuai dengan brief dan kanal publikasi.',
    details: [
      { title: 'Konsep dan arahan visual', description: 'Setiap sesi dimulai dari karakter yang ingin ditampilkan. Moodboard, pilihan wardrobe, dan arahan pose dirancang untuk menjaga hasil tetap autentik.', tags: ['Moodboard review', 'Pose coaching', 'Lighting design'] },
      { title: 'Format foto dan video', description: 'Format hasil menyesuaikan kanal publikasi, dari portrait profesional hingga materi editorial untuk media digital.', tags: ['Portrait high-res', 'Social crop 4:5 & 1:1', 'Web compressed delivery'] },
      { title: 'Lokasi serta kebutuhan produksi', description: 'Sesi dapat dilakukan di studio, kantor, maupun lokasi pilihan dengan pencahayaan dan set yang disiapkan sesuai konsep.', tags: ['Studio Yogyakarta', 'Mobile studio kit', 'Pengarahan lokasi'] },
    ],
    facts: [{ label: 'Standar', value: 'Medium Format 4K/8K' }, { label: 'Lighting', value: 'High-Fashion Studio Setup' }, { label: 'Color grade', value: 'Editorial Color Chemistry' }],
    relatedSlugs: ['produksi-video', 'dokumentasi-event', 'visual-produk'],
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85',
    alt: 'Portrait editorial dengan pencahayaan natural',
  },
  {
    slug: 'produksi-video',
    label: 'Produksi video',
    title: 'Produksi video brand',
    description: 'Materi video yang disiapkan untuk memperkenalkan produk, layanan, atau perusahaan.',
    context: 'Produksi video merangkum karakter brand dalam cerita yang mudah diikuti. Gagasan, ritme, dan format tayang disesuaikan dengan audiens serta kanal distribusi.',
    details: [
      { title: 'Cerita dan arahan produksi', description: 'Kami menyusun brief menjadi konsep, treatment, dan alur visual yang jelas sebelum pengambilan gambar.', tags: ['Creative treatment', 'Storyboard', 'Production planning'] },
      { title: 'Format untuk setiap kanal', description: 'Materi utama dapat diturunkan menjadi potongan pendek sesuai kebutuhan website, presentasi, dan media sosial.', tags: ['Master video', 'Social cutdown', 'Subtitle'] },
      { title: 'Tim dan perlengkapan', description: 'Komposisi kru dan perlengkapan mengikuti skala produksi dan kebutuhan gambar.', tags: ['Camera crew', 'Lighting setup', 'Audio recording'] },
    ],
    facts: [{ label: 'Format', value: 'Video campaign' }, { label: 'Produksi', value: 'Kru profesional' }, { label: 'Distribusi', value: 'Multi-kanal' }],
    relatedSlugs: ['portrait-editorial', 'produksi-komersial', 'visual-produk'],
    src: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=85',
    alt: 'Kamera saat produksi video',
  },
  {
    slug: 'dokumentasi-event',
    label: 'Dokumentasi event',
    title: 'Momen acara dalam cerita visual',
    description: 'Dokumentasi suasana, rangkaian kegiatan, dan momen penting sebuah acara.',
    context: 'Dokumentasi acara menangkap suasana, interaksi, dan momen penting tanpa mengganggu jalannya kegiatan. Hasilnya disiapkan agar mudah dibagikan kepada peserta maupun audiens brand.',
    details: [
      { title: 'Momen utama dan suasana acara', description: 'Rundown menjadi panduan liputan agar momen penting dan interaksi peserta terabadikan.', tags: ['Rundown review', 'Key moment coverage', 'Guest candid'] },
      { title: 'Output untuk publikasi', description: 'Pilihan foto dan highlight video dapat disesuaikan untuk laporan, media sosial, dan publikasi pasca acara.', tags: ['Same-day edit', 'Social highlights', 'Web gallery'] },
      { title: 'Kru menyesuaikan skala acara', description: 'Jumlah titik liputan dan personel disesuaikan dengan venue, jadwal, dan kebutuhan dokumentasi.', tags: ['Multi-camera', 'Stage coverage', 'Mobile crew'] },
    ],
    facts: [{ label: 'Liputan', value: 'Multi-momen' }, { label: 'Format', value: 'Foto & video' }, { label: 'Hasil', value: 'Siap dibagikan' }],
    relatedSlugs: ['portrait-editorial', 'produksi-video', 'produksi-komersial'],
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85',
    alt: 'Suasana dokumentasi acara',
  },
  {
    slug: 'visual-produk',
    label: 'Visual produk',
    title: 'Foto untuk katalog dan promosi',
    description: 'Visual produk dengan komposisi yang mendukung karakter dan kebutuhan publikasi brand.',
    context: 'Visual produk dirancang agar bentuk, material, dan detail mudah dikenali. Pendekatan pencahayaan dan styling mengikuti karakter produk serta kebutuhan publikasinya.',
    details: [
      { title: 'Komposisi produk', description: 'Sudut pengambilan dan detail dipilih untuk menampilkan fungsi serta kualitas produk dengan jelas.', tags: ['Product hero', 'Detail macro', 'Catalog framing'] },
      { title: 'Format digital dan katalog', description: 'File akhir disiapkan mengikuti kebutuhan crop dan spesifikasi kanal yang akan digunakan.', tags: ['E-commerce', 'Social format', 'High-resolution'] },
      { title: 'Set dan styling', description: 'Latar, properti, dan styling ditentukan berdasarkan karakter visual brand.', tags: ['Studio setup', 'Props styling', 'Color consistency'] },
    ],
    facts: [{ label: 'Format', value: 'Katalog & digital' }, { label: 'Gaya', value: 'Studio / lifestyle' }, { label: 'Hasil', value: 'High-resolution' }],
    relatedSlugs: ['portrait-editorial', 'produksi-video', 'produksi-komersial'],
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85',
    alt: 'Perlengkapan kamera untuk produksi visual produk',
  },
  {
    slug: 'produksi-komersial',
    label: 'Produksi komersial',
    title: 'Konten kampanye dan iklan',
    description: 'Persiapan visual untuk materi promosi dan kampanye di kanal digital.',
    context: 'Konten komersial menghubungkan pesan brand dengan visual yang mudah diingat. Setiap elemen produksi diarahkan berdasarkan tujuan kampanye dan format penayangannya.',
    details: [
      { title: 'Konsep kampanye', description: 'Brief diterjemahkan menjadi arah kreatif, treatment, dan kebutuhan produksi yang terukur.', tags: ['Creative direction', 'Campaign treatment', 'Storyboard'] },
      { title: 'Versi tayang yang fleksibel', description: 'Satu produksi dapat menghasilkan beberapa versi materi untuk kanal dan durasi yang berbeda.', tags: ['Hero film', 'Short-form edit', 'Multi-ratio delivery'] },
      { title: 'Dukungan tim produksi', description: 'Kru, talent, dan lokasi disesuaikan agar visual kampanye konsisten dengan brand.', tags: ['Production crew', 'Talent direction', 'Location scouting'] },
    ],
    facts: [{ label: 'Tujuan', value: 'Brand campaign' }, { label: 'Format', value: 'Film & stills' }, { label: 'Distribusi', value: 'Digital / TVC' }],
    relatedSlugs: ['produksi-video', 'dokumentasi-event', 'visual-produk'],
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=85',
    alt: 'Persiapan produksi komersial',
  },
]
