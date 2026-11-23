import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'
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

  return <>
    <a className="skip-link" href="#main">Lewati ke konten utama</a>
    <SiteHeader />
    <main id="main" className="service-detail-page price-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-copy">
          <nav className="service-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/harga">Daftar Harga</Link>
          </nav>
          <p className="np-section-tag">{category.eyebrow}</p>
          <h1>{category.name}</h1>
          <p className="service-detail-summary">{category.summary}</p>
          <a href={`mailto:jogjacreativeproduction@gmail.com?subject=${encodeURIComponent(`Penawaran ${category.name}`)}`} className="np-btn-primary">
            Minta penawaran <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="service-detail-image">
          <img src={category.image} alt={category.imageAlt} />
          <span>{category.eyebrow}</span>
        </div>
      </section>
      <section className="service-detail-content">
        <div className="service-detail-intro">
          <p className="np-section-tag">Ruang lingkup harga</p>
          <h2>Penawaran disusun sesuai kebutuhan produksi.</h2>
        </div>
        <div className="service-detail-body">
          <p>{category.description}</p>
          <h2>Faktor yang dibahas</h2>
          <ul>{category.factors.map(factor => <li key={factor}>{factor}</li>)}</ul>
          <p className="service-detail-note">Kirim brief dan jadwal yang diinginkan agar tim kami dapat menyiapkan penawaran yang sesuai.</p>
          <Link href="/layanan" className="service-text-link">Jelajahi layanan North Production <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="service-detail-cta">
        <p className="np-section-tag">North Production · Yogyakarta</p>
        <h2>Diskusikan kebutuhan produksi Anda.</h2>
        <p>Bagikan jenis proyek, jadwal, dan hasil akhir yang Anda butuhkan.</p>
        <a href={`mailto:jogjacreativeproduction@gmail.com?subject=${encodeURIComponent(`Penawaran ${category.name}`)}`} className="np-btn-primary">Hubungi kami <span aria-hidden="true">↗</span></a>
      </section>
    </main>
    <SiteFooter />
  </>
}
