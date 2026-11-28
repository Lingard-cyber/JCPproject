import type { Metadata } from 'next'
import Link from '../../components/SiteLink'
import { notFound } from 'next/navigation'
import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'
import { whatsappLink } from '../../contact'
import { priceCategories } from '../packages'

type PricePageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return priceCategories.map(category => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: PricePageProps): Promise<Metadata> {
  const { slug } = await params
  const category = priceCategories.find(item => item.slug === slug)
  return category
    ? { title: `${category.name} | North Production`, description: category.summary }
    : { title: 'Harga tidak ditemukan | North Production' }
}

export default async function PricePage({ params }: PricePageProps) {
  const { slug } = await params
  const category = priceCategories.find(item => item.slug === slug)
  if (!category) notFound()
  const quoteWhatsAppHref = whatsappLink(`Halo, saya ingin meminta penawaran untuk ${category.name}.`)

  return <>
    <a className="skip-link" href="#main">Lewati ke konten utama</a>
    <SiteHeader />
    <main id="main" className="service-detail-page price-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/harga">Daftar Harga</Link><span aria-hidden="true">/</span><span aria-current="page">{category.name}</span>
          </nav>
          <p className="np-section-tag">{category.eyebrow} · 0{priceCategories.indexOf(category) + 1}</p>
          <h1>{category.name}</h1>
          <p className="service-detail-summary">{category.summary}</p>
          <div className="price-hero-actions">
            <a href={quoteWhatsAppHref} className="np-btn-primary" target="_blank" rel="noreferrer">Minta penawaran</a>
            <a className="price-secondary-link" href="#faktor-estimasi">Pelajari faktor biaya <span aria-hidden="true">↓</span></a>
          </div>
          <div className="price-facts" aria-label="Ringkasan produksi">
            {category.facts.map(fact => <div className="price-fact" key={fact.label}>
              <span>{fact.label}</span><strong>{fact.value}</strong>
            </div>)}
          </div>
        </div>
        <div className="service-detail-image">
          <img src={category.image} alt={category.imageAlt} />
          <span>{category.eyebrow}</span>
        </div>
      </section>
      <section className="price-factors-section" id="faktor-estimasi">
        <div className="price-factors-intro">
          <p className="np-section-tag">Ruang lingkup harga</p>
          <h2>Penawaran disusun sesuai kebutuhan produksi.</h2>
          <p>{category.description}</p>
          <div className="price-consult-card">
            <span>Konsultasi terbuka</span>
            <p>Kirim brief dan jadwal yang diinginkan. Tim kami akan membantu menyusun kebutuhan produksinya.</p>
            <Link href="/layanan">Jelajahi layanan North Production <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="price-factor-list">
          <p className="np-section-tag">Faktor yang dibahas dalam estimasi</p>
          {category.factors.map((factor, index) => <article className="price-factor-card" key={factor.title}>
            <span className="factor-timeline-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="4.5" y="5" width="15" height="14" rx="2" />
                <path d="M4.5 9h15M9 9v10" />
                <circle cx="7" cy="7" r=".65" fill="currentColor" stroke="none" />
              </svg>
              <span>0{index + 1}</span>
            </span>
            <div><h3>{factor.title}</h3><p>{factor.description}</p></div>
            <span className="price-factor-tag">{factor.tag}</span>
          </article>)}
        </div>
      </section>
      <section className="price-packages-section" id="paket-estimasi">
        <div className="price-packages-heading">
          <p className="np-section-tag">Paket acuan estimasi</p>
          <h2>Rancangan format liputan</h2>
          <p>Gunakan pilihan di bawah ini sebagai titik awal. Cakupan akhir dapat disesuaikan bersama tim kami.</p>
        </div>
        <div className="price-package-grid">
          {category.packages.map((item, index) => <article className={`price-package-card${item.badge ? ' is-featured' : ''}`} key={item.tier}>
            <div className="price-package-top"><span>{item.tier}</span><span>{['Cakupan inti', 'Cakupan lengkap', 'Produksi khusus'][index]}</span></div>
            {item.badge && <span className="price-package-badge">{item.badge}</span>}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <ul>{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
            <a href={quoteWhatsAppHref} target="_blank" rel="noreferrer">{item.action}<span aria-hidden="true">↗</span></a>
          </article>)}
        </div>
      </section>
      <section className="service-detail-cta">
        <p className="np-section-tag">North Production · Yogyakarta</p>
        <h2>Diskusikan kebutuhan produksi Anda.</h2>
        <p>Bagikan jenis proyek, jadwal, dan hasil akhir yang Anda butuhkan. Kami siap membantu merancang estimasinya.</p>
        <a href={quoteWhatsAppHref} className="np-btn-primary" target="_blank" rel="noreferrer">Hubungi kami sekarang</a>
      </section>
    </main>
    <SiteFooter />
  </>
}
