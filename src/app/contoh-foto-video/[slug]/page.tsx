import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'
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
  const relatedSamples = workSamples.filter(item => item.slug !== sample.slug).slice(0, 3)

  return <>
    <a className="skip-link" href="#main">Lewati ke konten utama</a>
    <SiteHeader />
    <main id="main" className="service-detail-page portfolio-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/contoh-foto-video">Portofolio</Link>
          </nav>
          <p className="np-section-tag">Contoh foto dan video · 0{sampleIndex + 1}</p>
          <h1>{sample.title}</h1>
          <p className="service-detail-summary">{sample.description}</p>
          <Link href="/#contact" className="np-btn-primary">Diskusikan proyek serupa <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="service-detail-image">
          <img src={sample.src} alt={sample.alt} />
          <span>{sample.label}</span>
        </div>
      </section>
      <section className="service-detail-content">
        <div className="service-detail-intro">
          <p className="np-section-tag">Pendekatan visual</p>
          <h2>Setiap karya mengikuti tujuan dan karakter brand.</h2>
        </div>
        <div className="service-detail-body">
          <p>{sample.description} Gaya, lokasi, dan kebutuhan hasil akhir dibahas bersama sebelum produksi agar sesuai dengan brief dan kanal publikasi.</p>
          <h2>Yang dapat disesuaikan</h2>
          <ul>
            <li>Konsep dan arahan visual</li>
            <li>Format foto atau video sesuai kebutuhan publikasi</li>
            <li>Lokasi serta kebutuhan produksi</li>
          </ul>
          <Link href="/layanan" className="service-text-link">Lihat layanan produksi <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="service-detail-more">
        <div className="service-more-heading">
          <div><p className="np-section-tag">Pilihan visual lain</p><h2>Jelajahi portofolio</h2></div>
          <Link href="/contoh-foto-video">Semua contoh <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="service-more-grid">
          {relatedSamples.map(item => <Link href={`/contoh-foto-video/${item.slug}`} className="service-more-card" key={item.slug}>
            <span>{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><span className="service-more-arrow" aria-hidden="true">↗</span>
          </Link>)}
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
}
