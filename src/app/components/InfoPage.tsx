import Link from 'next/link'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { productionServices } from '../layanan/services'
import { priceCategories } from '../harga/packages'
import { workSamples } from '../contoh-foto-video/samples'


type PageKind = 'layanan' | 'harga' | 'contoh'

const pageCopy: Record<PageKind, { eyebrow: string; title: string; description: string }> = {
  layanan: {
    eyebrow: 'Yang kami kerjakan',
    title: 'Layanan foto dan video untuk cerita brand Anda.',
    description: 'Dari kebutuhan satu hari produksi hingga materi visual untuk kampanye, kami bantu merencanakan dan mengerjakan setiap tahapnya.',
  },
  harga: {
    eyebrow: 'Ruang lingkup produksi',
    title: 'Rencana produksi disesuaikan dengan kebutuhan proyek.',
    description: 'Biaya bergantung pada durasi, lokasi, jumlah kru, perlengkapan, serta hasil akhir yang dibutuhkan. Ceritakan kebutuhan Anda untuk mendapat penawaran yang sesuai.',
  },
  contoh: {
    eyebrow: 'Contoh foto dan video',
    title: 'Beragam format, satu cerita visual yang kuat.',
    description: 'Lihat beberapa contoh pendekatan untuk portrait, event, produk, dan produksi komersial. Hasil setiap proyek disesuaikan dengan brief dan karakter brand.',
  },
}

export default function InfoPage({ kind }: { kind: PageKind }) {
  const copy = pageCopy[kind]
  return <>
    <a className="skip-link" href="#main">Lewati ke konten utama</a>
    <SiteHeader />
    <main id="main" className="info-page" data-page={kind}>
      <section className="info-hero">
        <p className="info-eyebrow">NORTH PRODUCTION <span>·</span> {copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <div className="info-hero-bottom">
          <p>{copy.description}</p>
          <Link className="np-btn-primary" href="/#contact">Diskusikan proyek <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      {kind === 'layanan' && <section className="info-section">
        <div className="info-section-heading"><p className="np-section-tag">Ruang lingkup</p><h2>Layanan produksi</h2></div>
        <div className="info-service-grid">
          {productionServices.map((service, index) => <Link className="info-service" href={`/layanan/${service.slug}`} key={service.slug}>
            <span className="info-number">0{index + 1}</span><h3>{service.name}</h3><p>{service.summary}</p><span className="info-service-link">Lihat layanan <span aria-hidden="true">↗</span></span>
          </Link>)}
        </div>
      </section>}

      {kind === 'harga' && <section className="info-section">
        <div className="info-section-heading"><p className="np-section-tag">Estimasi dan penawaran</p><h2>Mulai dari kebutuhan Anda</h2></div>
        <div className="info-price-grid">
          {priceCategories.map(category => <Link className="info-price-card" href={`/harga/${category.slug}`} key={category.slug}>
            <p className="np-section-tag">{category.name}</p><p>{category.summary}</p>
            <span className="info-service-link">Lihat detail harga <span aria-hidden="true">↗</span></span>
          </Link>)}
        </div>
      </section>}

      {kind === 'contoh' && <section className="info-section">
        <div className="info-section-heading"><p className="np-section-tag">Pilihan visual</p><h2>Foto & video</h2></div>
        <div className="info-sample-grid">
          {workSamples.map((sample, index) => <Link href={`/contoh-foto-video/${sample.slug}`} className={`info-sample info-sample-${index + 1}`} key={sample.slug} aria-label={`Lihat contoh ${sample.label}`}>
            <img src={sample.src} alt={sample.alt} loading="lazy" />
            <span className="info-sample-caption">{sample.label} <span aria-hidden="true">↗</span></span>
          </Link>)}
        </div>
      </section>}

      <section className="info-next">
        <p className="np-section-tag">North Production · Yogyakarta</p>
        <h2>Sudah punya gambaran proyeknya?</h2>
        <Link href="/#contact" className="np-btn-primary">Hubungi tim kami <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
    <SiteFooter />
  </>
}
