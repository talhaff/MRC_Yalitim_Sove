import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Factory,
  Flame,
  Layers,
  Paintbrush,
  Boxes,
  Truck,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import {
  services,
  getServiceBySlug,
  getRelatedServices,
  getAllServiceSlugs,
  SITE_URL,
  BUSINESS_INFO,
} from '@/lib/services';

// ─── SSG: Build zamanında tüm sluglar için statik HTML üret ─────────────────
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

// ─── Dinamik Metadata: Her sayfa için benzersiz SEO etiketleri ──────────────
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return { title: 'Sayfa Bulunamadı' };
  }

  const pageUrl = `${SITE_URL}/hizmetler/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: pageUrl,
      siteName: 'MRC Yalıtım Söve',
      title: service.ogTitle,
      description: service.ogDescription,
      images: [
        {
          url: `${SITE_URL}${service.heroImage}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.ogTitle,
      description: service.ogDescription,
      images: [`${SITE_URL}${service.heroImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ─── İkon Eşleştirme ────────────────────────────────────────────────────────
const iconMap = {
  sove: ShieldCheck,
  mantolama: Layers,
  yalitim: Factory,
  eps: Boxes,
  tasyunu: Flame,
  dekoratif: Paintbrush,
} as const;

// ─── SAYFA BİLEŞENİ ────────────────────────────────────────────────────────
export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-500">Hizmet sayfası bulunamadı.</p>
      </div>
    );
  }

  const pageUrl = `${SITE_URL}/hizmetler/${service.slug}`;
  const relatedServices = getRelatedServices(service.relatedServices);
  const IconComponent = iconMap[service.iconKey];

  // ── JSON-LD: Service Schema ──────────────────────────────────────────────
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: service.title,
    description: service.schema.description,
    serviceType: service.schema.serviceType,
    url: pageUrl,
    image: `${SITE_URL}${service.heroImage}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#organization`,
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.locality,
        addressRegion: BUSINESS_INFO.address.region,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: BUSINESS_INFO.address.country,
      },
    },
    areaServed: service.schema.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'TRY',
      },
    },
  };

  // ── JSON-LD: FAQPage Schema ──────────────────────────────────────────────
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  // ── JSON-LD: BreadcrumbList Schema ───────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Hizmetlerimiz',
        item: `${SITE_URL}/hizmetler`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: pageUrl,
      },
    ],
  };

  const titleParts = service.title.split('—');
  const mainTitle = titleParts[0].trim();
  const subTitlePart = titleParts[1] ? titleParts[1].trim() : 'Fabrikadan Üretim';

  return (
    <div className="flex flex-col w-full bg-white overflow-x-hidden">
      {/* ── JSON-LD Enjeksiyonu ──────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── 1. PREMIUM HEADER — EXACT UNIFIED LUXURY DESIGN ──────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-40 lg:pb-32 bg-[#050B15] overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left">
          {/* Breadcrumb Navigasyonu */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center lg:justify-start">
            <ol className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs md:text-sm text-slate-300 backdrop-blur-md flex-wrap">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <ChevronRight size={14} className="text-brand-gold/70 shrink-0" />
              <li>
                <Link href="/hizmetler" className="hover:text-brand-gold transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <ChevronRight size={14} className="text-brand-gold/70 shrink-0" />
              <li className="text-brand-gold font-semibold truncate max-w-[200px] sm:max-w-none">
                {mainTitle}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Sol: Metin Bloğu */}
            <div className="lg:col-span-7 space-y-6">
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 via-brand-gold/10 to-transparent border border-brand-gold/30 text-brand-gold font-bold text-[11px] md:text-xs uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_2px_15px_rgba(212,175,55,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                {service.badgeLabel} • Malatya 1. OSB Fabrikası
              </div>

              {/* H1 — Ana SEO Başlığı */}
              <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight font-display">
                {mainTitle} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold bg-[length:200%_auto] animate-gradient">
                  {subTitlePart}
                </span>
              </h1>

              {/* Alt başlık */}
              <p className="text-slate-300 text-base md:text-xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                {service.heroSubtitle}
              </p>

              {/* CTA Butonları */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2 justify-center lg:justify-start">
                <a
                  href={BUSINESS_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-gold text-brand-navy font-bold text-base md:text-lg hover:bg-white transition-colors shadow-lg shadow-brand-gold/20 active:scale-95"
                >
                  <MessageCircle size={20} />
                  <span>{service.ctaText}</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/10 border border-white/15 text-white font-bold text-base hover:bg-white/20 transition-colors active:scale-95"
                >
                  <Phone size={18} />
                  <span>{BUSINESS_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Sağ: Hero Görseli & Floating Fabrika Rozeti */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative z-10 w-full aspect-[4/3] rounded-[32px] lg:rounded-[44px] overflow-hidden shadow-2xl border-[6px] lg:border-[8px] border-white/20 bg-white p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                
                {/* Alt rozet */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-2xl bg-[#050B15]/95 border border-brand-gold/40 backdrop-blur-md flex items-center justify-between z-20 shadow-lg">
                  <span className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5 sm:gap-2">
                    <Sparkles size={14} className="text-brand-gold shrink-0" />
                    MRC 2026 Katalog
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-extrabold text-brand-gold uppercase tracking-wider">
                    TS EN 13163 Belgeli
                  </span>
                </div>
              </div>

              {/* Altın ve Lacivert Arka Köşe Süsleri */}
              <div className="absolute -top-3 -right-3 lg:-top-5 lg:-right-5 w-24 h-24 lg:w-32 lg:h-32 bg-brand-gold/80 rounded-2xl lg:rounded-[32px] -z-10 rotate-12 shadow-lg" />
              <div className="absolute -bottom-3 -left-3 lg:-bottom-5 lg:-left-5 w-24 h-24 lg:w-32 lg:h-32 bg-brand-navy border border-brand-gold/30 rounded-2xl lg:rounded-[32px] -z-10 -rotate-6 shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK SPECS FLOATING CARDS ────────────────────────────────── */}
      <section className="pt-8 pb-12 md:pt-0 md:pb-20 md:-mt-14 lg:-mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: 'Hammadde Kalitesi',
                value: 'A Sınıfı EPS',
                sub: '16-30 kg/m³ Dansite',
              },
              {
                title: 'Kaplama Zırhı',
                value: 'Akrilik Polimer',
                sub: 'UV & Don Çatlamaz',
              },
              {
                title: 'Teslimat Ağı',
                value: 'Malatya & Bölge',
                sub: 'Hızlı Korumalı Sevk',
              },
              {
                title: 'Fiyat Avantajı',
                value: 'Fabrika Fiyatı',
                sub: 'Doğrudan Aracısız',
              },
            ].map((spec, i) => (
              <div
                key={i}
                className="bg-white p-5 sm:p-6 rounded-2xl md:rounded-[24px] border border-slate-100 shadow-lg shadow-slate-900/5 hover:border-brand-gold/30 transition-all"
              >
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  {spec.title}
                </p>
                <p className="text-xl sm:text-2xl font-black text-brand-navy font-display">
                  {spec.value}
                </p>
                <p className="text-xs font-semibold text-brand-gold mt-1">
                  {spec.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. RICH CONTENT SECTIONS (CONTENT SILO) ──────────────────────── */}
      <main className="bg-white">
        {service.contentSections.map((section, index) => (
          <section
            key={index}
            className={`py-16 md:py-24 ${index % 2 === 1 ? 'bg-[#FAFAFB]' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <div
                className={`grid grid-cols-1 ${
                  section.image
                    ? 'lg:grid-cols-2 gap-12 lg:gap-16 items-center'
                    : 'max-w-4xl mx-auto'
                }`}
              >
                {/* Metin Bloğu */}
                <div
                  className={`space-y-6 ${
                    section.image && index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="inline-flex items-center gap-3 text-brand-gold font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
                    <span className="w-8 h-0.5 bg-brand-gold" />
                    Bölüm 0{index + 1}
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy font-display leading-tight pl-5 relative">
                    <span className="absolute left-0 top-0 w-1.5 h-full bg-brand-gold rounded-full" />
                    {section.heading}
                  </h2>

                  <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light">
                    {section.body}
                  </p>

                  {/* Detay listesi */}
                  {section.listItems && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      {section.listItems.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-emerald-500 shrink-0 mt-0.5"
                          />
                          <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Görsel Bloğu */}
                {section.image && (
                  <div
                    className={`relative ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="relative rounded-[28px] lg:rounded-[40px] overflow-hidden border-[6px] border-slate-100 shadow-xl aspect-[4/3] bg-white p-3 sm:p-4 flex items-center justify-center">
                      <Image
                        src={section.image}
                        alt={section.imageAlt || section.heading}
                        fill
                        className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* ── 4. SSS (FAQ) BÖLÜMÜ ───────────────────────────────────────────── */}
        {service.faq.length > 0 && (
          <section className="py-16 md:py-24 bg-[#050B15] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
              <div className="text-center mb-12 md:mb-16">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">
                  Merak Edilen Sorular
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mt-3">
                  {mainTitle} Sıkça Sorulanlar
                </h2>
                <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
              </div>

              <div className="space-y-4">
                {service.faq.map((item, i) => (
                  <details
                    key={i}
                    className="group bg-white/5 rounded-2xl border border-white/10 hover:border-brand-gold/40 transition-all overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none font-bold text-white text-base md:text-lg">
                      <span className="pr-4">{item.question}</span>
                      <ChevronRight
                        size={20}
                        className="text-brand-gold shrink-0 transition-transform group-open:rotate-90"
                      />
                    </summary>
                    <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-white/5 mt-2">
                      <p className="text-slate-300 leading-relaxed text-sm md:text-base font-light pt-3">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 5. İLGİLİ HİZMETLER (CROSS LINKING) ────────────────────────── */}
        {relatedServices.length > 0 && (
          <section className="py-16 md:py-24 bg-[#FAFAFB]">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">
                  İlgili Hizmetlerimiz
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-display mt-3">
                  Diğer Yalıtım ve Söve Çözümleri
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {relatedServices.map((related) => {
                  const RelatedIcon = iconMap[related.iconKey];
                  return (
                    <Link
                      key={related.slug}
                      href={`/hizmetler/${related.slug}`}
                      className="group bg-white p-7 rounded-[28px] border border-slate-200/90 hover:border-brand-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-xl bg-[#050B15] text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                            <RelatedIcon size={22} />
                          </div>
                          <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-3 py-1 rounded-full">
                            {related.badgeLabel}
                          </span>
                        </div>

                        <h3 className="font-bold text-brand-navy text-lg md:text-xl font-display mb-2 group-hover:text-brand-gold transition-colors">
                          {related.title.split('—')[0].trim()}
                        </h3>

                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6 font-light">
                          {related.heroSubtitle}
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold group-hover:gap-3 transition-all pt-4 border-t border-slate-100">
                        Detaylı İncele <ArrowRight size={16} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── 6. FACTORY DIRECT CTA — MATCHING ABOUT & CONTACT ───────────── */}
        <section className="py-12 md:py-16 bg-[#050B15] border-t border-white/10 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em]">
                Doğrudan Fabrika Satış Hattı
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-display">
                {mainTitle} İçin Hemen Fiyat Alın
              </h3>
              <p className="text-slate-400 text-sm md:text-base">
                Malatya 1. OSB fabrikamızdan doğrudan toptan/perakende teklif alın.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-gold text-brand-navy font-bold text-base md:text-lg hover:bg-white transition-colors shadow-lg active:scale-95 w-full sm:w-auto"
              >
                <Phone size={20} />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/10 border border-white/15 text-white font-bold text-base hover:bg-white/20 transition-colors w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Teklif</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
