import type { Metadata } from 'next'
import Link from '../../components/SiteLink'
import { notFound } from 'next/navigation'
import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'
import { whatsappLink } from '../../contact'
import { productionServices } from '../services'

type ServicePageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return productionServices.map(service => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = productionServices.find(item => item.slug === slug)
  if (!service) return { title: 'Layanan tidak ditemukan | North Production' }
  return {
    title: `${service.name} | North Production`,
    description: service.summary,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const serviceIndex = productionServices.findIndex(item => item.slug === slug)
  if (serviceIndex < 0) notFound()

  const service = productionServices[serviceIndex]
  const otherServices = service.relatedSlugs
    .map(relatedSlug => productionServices.find(item => item.slug === relatedSlug))
    .filter((item): item is (typeof productionServices)[number] => Boolean(item))

  return <>
    <a className="skip-link" href="#main">Lewati ke konten utama</a>
    <SiteHeader />
    <main id="main" className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/layanan">Layanan</Link><span aria-hidden="true">/</span><span aria-current="page">{service.name}</span>
          </nav>
          <p className="np-section-tag">Layanan 0{serviceIndex + 1}</p>
          <h1>{service.name}</h1>
          <p className="service-detail-summary">{service.summary}</p>
          <a href={whatsappLink(`Halo, saya ingin mendiskusikan proyek ${service.name} bersama North Production.`)} className="np-btn-primary" target="_blank" rel="noreferrer">
            Diskusikan proyek
          </a>
        </div>
        <div className="service-detail-image">
          <img src={service.image} alt={service.imageAlt} />
          <span>{service.eyebrow}</span>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="service-detail-intro">
          <p className="np-section-tag">Tentang layanan</p>
          <h2>{service.detailTitle}</h2>
        </div>
        <div className="service-detail-body">
          <p>{service.description}</p>
          <h2>Ruang lingkup</h2>
          <ul>
            {service.scope.map(item => <li key={item}>{item}</li>)}
          </ul>
          <p className="service-detail-note">
            Setiap proyek dibahas berdasarkan tujuan, lokasi, jadwal, dan hasil akhir yang Anda butuhkan.
          </p>
          <Link href="/harga" className="service-text-link">Lihat ruang lingkup penawaran</Link>
        </div>
      </section>

      <section className="service-detail-more">
        <div className="service-more-heading">
          <div><p className="np-section-tag">Layanan lainnya</p><h2>Jelajahi layanan kami</h2></div>
          <Link href="/layanan">Semua layanan</Link>
        </div>
        <div className="service-more-grid">
          {otherServices.map(item => <Link href={`/layanan/${item.slug}`} className="service-more-card" key={item.slug}>
            <span>0{productionServices.findIndex(serviceItem => serviceItem.slug === item.slug) + 1}</span>
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
          </Link>)}
        </div>
      </section>

      <section className="service-detail-cta">
        <p className="np-section-tag">North Production · Yogyakarta</p>
        <h2>{service.ctaTitle}</h2>
        <p>Ceritakan kebutuhan, jadwal, dan tujuan visual Anda kepada tim kami.</p>
        <a href={whatsappLink(`Halo, saya ingin memulai proyek ${service.name} bersama North Production.`)} className="np-btn-primary" target="_blank" rel="noreferrer">Mulai diskusi</a>
      </section>
    </main>
    <SiteFooter />
  </>
}
