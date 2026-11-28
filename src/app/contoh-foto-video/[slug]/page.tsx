import type { Metadata } from 'next'
import Link from '../../components/SiteLink'
import { notFound } from 'next/navigation'
import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'
import { whatsappLink } from '../../contact'
import { workSamples } from '../samples'

type SamplePageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return workSamples.map(sample => ({ slug: sample.slug }))
}

export async function generateMetadata({ params }: SamplePageProps): Promise<Metadata> {
  const { slug } = await params
  const sample = workSamples.find(item => item.slug === slug)
  return sample
    ? { title: `${sample.label} | North Production`, description: sample.description }
    : { title: 'Portofolio tidak ditemukan | North Production' }
}

export default async function SamplePage({ params }: SamplePageProps) {
  const { slug } = await params
  const sampleIndex = workSamples.findIndex(item => item.slug === slug)
  if (sampleIndex < 0) notFound()

  const sample = workSamples[sampleIndex]
  const relatedSamples = sample.relatedSlugs
    .map(relatedSlug => workSamples.find(item => item.slug === relatedSlug))
    .filter((item): item is (typeof workSamples)[number] => Boolean(item))

  return <>
    <a className="skip-link" href="#main">Lewati ke konten utama</a>
    <SiteHeader />
    <main id="main" className="service-detail-page portfolio-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/contoh-foto-video">Portofolio</Link><span aria-hidden="true">/</span><span aria-current="page">{sample.label}</span>
          </nav>
          <p className="np-section-tag">Contoh foto dan video · 0{sampleIndex + 1}</p>
          <h1>{sample.title}</h1>
          <p className="service-detail-summary">{sample.description}</p>
          <div className="portfolio-hero-actions">
            <a href={whatsappLink(`Halo, saya ingin mendiskusikan proyek serupa dengan contoh ${sample.label}.`)} className="np-btn-primary" target="_blank" rel="noreferrer">Diskusikan proyek serupa <span aria-hidden="true">↗</span></a>
            <a className="price-secondary-link" href="#pendekatan-visual">Lihat pendekatan <span aria-hidden="true">↓</span></a>
          </div>
          <div className="portfolio-facts" aria-label="Detail produksi">
            {sample.facts.map(fact => <div className="portfolio-fact" key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
          </div>
        </div>
        <div className="service-detail-image">
          <img src={sample.src} alt={sample.alt} />
          <span>{sample.label}</span>
        </div>
      </section>
      <section className="portfolio-approach-section" id="pendekatan-visual">
        <div className="portfolio-approach-intro">
          <p className="np-section-tag">Pendekatan visual</p>
          <h2>Setiap karya mengikuti tujuan dan karakter brand.</h2>
          <p>{sample.context}</p>
          <Link href="/layanan" className="service-text-link">Lihat alur layanan produksi <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="portfolio-detail-list">
          <p className="np-section-tag">Elemen yang dapat disesuaikan</p>
          {sample.details.map((detail, index) => <article className="portfolio-detail-card" key={detail.title}>
            <span className="factor-timeline-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4.5" y="5" width="15" height="14" rx="2" />
                <path d="M4.5 9h15M9 9v10" />
                <circle cx="7" cy="7" r=".65" fill="currentColor" stroke="none" />
              </svg>
              <span>0{index + 1}</span>
            </span>
            <div><h3>{detail.title}</h3><p>{detail.description}</p><ul>{detail.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
          </article>)}
        </div>
      </section>
      <section className="service-detail-more">
        <div className="service-more-heading">
          <div><p className="np-section-tag">Pilihan visual lain</p><h2>Jelajahi portofolio</h2></div>
          <Link href="/contoh-foto-video">Semua contoh</Link>
        </div>
        <div className="service-more-grid">
          {relatedSamples.map(item => <Link href={`/contoh-foto-video/${item.slug}`} className="portfolio-related-card" key={item.slug}>
            <span>{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><span className="portfolio-related-link">Lihat portofolio <span aria-hidden="true">↗</span></span>
          </Link>)}
        </div>
      </section>
      <section className="portfolio-detail-cta">
        <p className="np-section-tag">North Production · Yogyakarta &amp; nationwide</p>
        <h2>Diskusikan kebutuhan visual Anda.</h2>
        <p>Bagikan jenis proyek, timeline, dan hasil akhir yang Anda butuhkan. Kami siap berkolaborasi menghadirkan visual yang berkarakter kuat dan berdampak.</p>
        <div><a href={whatsappLink('Halo, saya ingin berdiskusi tentang kebutuhan visual bersama North Production.')} className="np-btn-primary" target="_blank" rel="noreferrer">Hubungi kami sekarang <span aria-hidden="true">↗</span></a><Link href="/harga" className="portfolio-whatsapp-link">Lihat daftar harga</Link></div>
      </section>
    </main>
    <SiteFooter />
  </>
}
