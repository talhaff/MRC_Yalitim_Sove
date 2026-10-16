/**
 * services.ts — Single Source of Truth for SEO Service Landing Pages
 * 
 * Every service page's metadata, schema, and content structure is defined here.
 * Used by:
 *  - /hizmetler/[slug]/page.tsx  (generateStaticParams + generateMetadata)
 *  - /hizmetler/page.tsx         (service hub listing)
 *  - sitemap.ts                  (dynamic sitemap generation)
 *  - Footer SEO links component
 */

export interface ServicePage {
  /** URL slug: /hizmetler/{slug} */
  slug: string;

  /** Primary H1 — the exact keyword-targeted title */
  title: string;

  /** <title> tag — hyper-targeted, max 60 chars */
  metaTitle: string;

  /** <meta description> — compelling, keyword-rich, max 160 chars */
  metaDescription: string;

  /** Open Graph title */
  ogTitle: string;

  /** Open Graph description */
  ogDescription: string;

  /** Hero image path (relative to public/) */
  heroImage: string;

  /** Short intro paragraph for the hero section */
  heroSubtitle: string;

  /** Primary target keywords for this page */
  keywords: string[];

  /** Schema.org Service data */
  schema: {
    serviceType: string;
    description: string;
    areaServed: string[];
    provider: string;
  };

  /** Sections of rich content — each will generate an <article> block */
  contentSections: {
    heading: string;
    body: string;
    listItems?: string[];
    image?: string;
    imageAlt?: string;
  }[];

  /** FAQ items specific to this service page (for FAQPage schema + on-page accordion) */
  faq: {
    question: string;
    answer: string;
  }[];

  /** Related services (slugs) for internal cross-linking */
  relatedServices: string[];

  /** CTA text */
  ctaText: string;

  /** Badge label shown on the service hub card */
  badgeLabel: string;

  /** Icon identifier for visual distinction */
  iconKey: 'sove' | 'mantolama' | 'yalitim' | 'eps' | 'tasyunu' | 'dekoratif';

  /** Priority for sitemap (0.0 - 1.0) */
  sitemapPriority: number;
}

export const SITE_URL = 'https://mrcyalitimsove.com';

export const BUSINESS_INFO = {
  name: 'MRC Yalıtım Söve',
  legalName: 'MRC Yalıtım Söve A.Ş.',
  phone: '+905322585244',
  phoneFormatted: '+90 532 258 52 44',
  email: 'mrcyalitim@gmail.com',
  address: {
    street: '1. Organize Sanayi Bölgesi, 5. Cadde No: 13/2',
    locality: 'Yeşilyurt',
    region: 'Malatya',
    postalCode: '44900',
    country: 'TR',
  },
  geo: {
    latitude: 38.334732,
    longitude: 38.193420,
  },
  whatsapp: 'https://wa.me/905322585244?text=Merhaba,%20fiyat%20ve%20teklif%20almak%20istiyorum.',
  googleMaps: 'https://maps.app.goo.gl/MtQKYRun3dske8zQ7',
} as const;

// ─── SERVICE PAGES DATA ───────────────────────────────────────────────────────

export const services: ServicePage[] = [
  // ─── 1. MALATYA SÖVE İMALATI ─────────────────────────────────────────────
  {
    slug: 'malatya-sove-imalati',
    title: 'Malatya Söve İmalatı — Fabrikadan Söve Profilleri',
    metaTitle: 'Malatya Söve İmalatı | Fabrika Fiyatlarıyla Söve Üretimi',
    metaDescription: 'Malatya söve imalatı: 1. OSB\'de CNC kesim pencere sövesi, kat silmesi, taç ve köşe taşı üretimi. Fabrikadan toptan & perakende en uygun fiyat. Hemen teklif alın!',
    ogTitle: 'Malatya Söve İmalatı | MRC Yalıtım Söve Fabrikası',
    ogDescription: 'Malatya 1. OSB\'de tam otomasyonlu CNC makinelerle söve profili üretimi. Pencere sövesi, kat silmesi, saray tacı. Fabrika fiyatıyla toptan sevkiyat.',
    heroImage: '/images/katalog/sove-hero.webp',
    heroSubtitle: 'Malatya 1. Organize Sanayi Bölgesi\'nde son teknoloji CNC makineleriyle üretilen yüksek kaliteli dış cephe söve profilleri. Pencere sövesi, kapı sövesi, kat silmesi ve dekoratif taç modellerinde Doğu Anadolu\'nun lider üreticisi.',
    keywords: [
      'Malatya söve',
      'Malatya söve imalatı',
      'söve imalatı Malatya',
      'Malatya strafor söve',
      'pencere sövesi Malatya',
      'dış cephe söve Malatya',
      'söve modelleri',
      'söve fiyatları Malatya',
      'CNC söve kesimi',
      'MRC söve',
    ],
    schema: {
      serviceType: 'Söve İmalatı ve Satışı',
      description: 'Malatya 1. OSB\'de CNC teknolojisiyle EPS ve taşyünü bazlı pencere sövesi, kat silmesi, saray tacı, payanda ve köşe taşı üretimi.',
      areaServed: ['Malatya', 'Elazığ', 'Adıyaman', 'Kahramanmaraş', 'Sivas', 'Bingöl', 'Diyarbakır', 'Gaziantep'],
      provider: 'MRC Yalıtım Söve',
    },
    contentSections: [
      {
        heading: 'Malatya Söve İmalatında Profesyonel Üretim',
        body: 'MRC Yalıtım Söve olarak, Malatya 1. Organize Sanayi Bölgesi\'ndeki modern üretim tesisimizde yüksek dansite EPS (Genleştirilmiş Polistiren) hammaddeden CNC kesim teknolojisiyle milimetrik hassasiyette söve profilleri üretiyoruz. Pencere sövesi, kapı sövesi, kat silmesi, bina köşe taşı, payanda, sütun ve dekoratif saray tacı gibi geniş ürün yelpazemizle konut, villa, toplu konut, otel ve ticari yapı projelerine çözüm sunuyoruz.',
        listItems: [
          'CNC teknolojisiyle milimetrik hassasiyette söve kesimi',
          'Yüksek dansite EPS ve taşyünü hammadde seçenekleri',
          'Akrilik polimer zırh kaplama ile UV, don ve yağmur dayanımı',
          'Pencere sövesi, kat silmesi, saray tacı, köşe taşı çeşitleri',
          'Villa, konut, otel ve ticari proje uygulamaları',
          'Malatya ve çevre illere hızlı sevkiyat',
        ],
        image: '/images/katalog/sove-modelleri.webp',
        imageAlt: 'Malatya söve imalatı - CNC kesim pencere söve profilleri ve ölçüleri',
      },
      {
        heading: 'Söve Profil Çeşitlerimiz ve Kat Silmeleri',
        body: 'Farklı mimari projelerin ihtiyaçlarına yönelik geniş söve profil yelpazesi sunuyoruz. Her profil, fabrikamızda üretildikten sonra elastik akrilik polimer ve mikronize kalsit harcıyla kaplanarak zırhlandırılır. Bu sayede söve profilleri; UV ışınlarına, dona, yağmura ve mekanik darbelere karşı çatlama yapmadan onlarca yıl dayanıklılık gösterir.',
        listItems: [
          'Düz ve bombeli pencere söve profilleri (P serisi)',
          'Kat silmesi ve bina bordür profilleri (S serisi)',
          'Saray tacı ve dekoratif kemerler (T serisi)',
          'Bina köşe taşı ve L-köşe elemanları (K serisi)',
          'Sütun ve payanda dekoratif elemanlar (D serisi)',
          'Özel proje için CAD destekli özel kalıp söve üretimi',
        ],
        image: '/images/katalog/sove-kat-silmesi.webp',
        imageAlt: 'Malatya söve çeşitleri - kat silmesi ve söve profili modelleri',
      },
      {
        heading: 'Neden Malatya\'da MRC Söve Tercih Edilmeli?',
        body: 'Malatya merkezli üretim avantajımız sayesinde Doğu Anadolu, Güneydoğu Anadolu ve İç Anadolu bölgelerindeki müşterilerimize en kısa sürede ve en uygun fabrika fiyatlarıyla söve teslimatı gerçekleştiriyoruz. Aracı maliyeti olmadan doğrudan fabrikadan toptan ve perakende satış imkânı sunuyoruz.',
        listItems: [
          'Doğrudan fabrika fiyatı — aracısız toptan/perakende satış',
          'Malatya, Elazığ, Adıyaman, K.Maraş, Sivas, Bingöl sevkiyatı',
          'ISO kalite standartlarında üretim',
          'Teknik destek ve projeye özel üretim danışmanlığı',
          '7/24 WhatsApp üzerinden hızlı teklif',
        ],
      },
    ],
    faq: [
      {
        question: 'Malatya\'da söve imalatı nereden temin edilir?',
        answer: 'MRC Yalıtım Söve, Malatya 1. Organize Sanayi Bölgesi\'nde (5. Cd. No: 13/2, Yeşilyurt) söve imalatı yapan lider fabrikadır. CNC kesim teknolojisiyle pencere sövesi, kat silmesi, saray tacı ve köşe taşı üretimi gerçekleştirmektedir.',
      },
      {
        question: 'Söve fiyatları ne kadardır?',
        answer: 'Söve fiyatları profil tipine, boyutuna ve sipariş miktarına göre değişir. MRC Yalıtım Söve fabrika fiyatlarıyla aracısız doğrudan satış yapar. Güncel fiyat teklifi için +90 532 258 52 44 numarasını arayabilir veya WhatsApp\'tan proje detaylarınızı gönderebilirsiniz.',
      },
      {
        question: 'Söve profilleri ne kadar dayanıklıdır?',
        answer: 'MRC söve profilleri akrilik polimer zırh kaplama ile işlenir. UV, don, yağmur ve mekanik darbelere karşı çatlama yapmadan 25+ yıl dayanıklılık gösterir. A1 sınıfı yanmaz taşyünü çekirdekli modeller de mevcuttur.',
      },
    ],
    relatedServices: ['malatya-dis-cephe-mantolama', 'malatya-yalitim', 'dekoratif-dis-cephe-kaplama'],
    ctaText: 'Söve Fiyat Teklifi Alın',
    badgeLabel: 'En Çok Aranan',
    iconKey: 'sove',
    sitemapPriority: 0.95,
  },

  // ─── 2. MALATYA DIŞ CEPHE MANTOLAMA ──────────────────────────────────────
  {
    slug: 'malatya-dis-cephe-mantolama',
    title: 'Malatya Dış Cephe Mantolama — EPS Isı Yalıtım Sistemi',
    metaTitle: 'Dış Cephe Mantolama Malatya | EPS Mantolama Fiyatları 2026',
    metaDescription: 'Malatya dış cephe mantolama: Yüksek dansite EPS levhayla %50 enerji tasarrufu. Fabrikadan mantolama malzemesi ve uygulama. 2026 fiyatları için arayın!',
    ogTitle: 'Malatya Dış Cephe Mantolama | MRC Yalıtım Söve',
    ogDescription: 'EPS ısı yalıtım levhası ile profesyonel dış cephe mantolama. Malatya 1. OSB üretim, fabrika fiyatlarıyla malzeme tedariği.',
    heroImage: '/images/katalog/mantolama-hero.webp',
    heroSubtitle: 'Yüksek dansite EPS ısı yalıtım levhaları ile profesyonel dış cephe mantolama sistemi. Binanızın enerji performansını %50\'ye varan tasarrufla artırın. Malatya fabrikamızdan doğrudan tedarik avantajı.',
    keywords: [
      'Malatya mantolama',
      'dış cephe mantolama Malatya',
      'Malatya mantolama firmaları',
      'Malatya mantolama fiyatları',
      'EPS mantolama',
      'dış cephe mantolama fiyatları',
      'mantolama malzemesi Malatya',
      'ısı yalıtım mantolama',
      'bina mantolama',
    ],
    schema: {
      serviceType: 'Dış Cephe Mantolama ve Isı Yalıtım Sistemi',
      description: 'Yüksek dansite EPS ısı yalıtım levhalarıyla profesyonel dış cephe mantolama uygulaması ve malzeme tedariği.',
      areaServed: ['Malatya', 'Elazığ', 'Adıyaman', 'Kahramanmaraş', 'Sivas', 'Bingöl', 'Diyarbakır'],
      provider: 'MRC Yalıtım Söve',
    },
    contentSections: [
      {
        heading: 'Malatya\'da Profesyonel Dış Cephe Mantolama',
        body: 'MRC Yalıtım Söve olarak dış cephe mantolama sistemlerinde kullanılan yüksek dansite EPS (Genleştirilmiş Polistiren) ısı yalıtım levhalarını Malatya 1. OSB\'deki fabrikamızda üretiyoruz. 16-30 kg/m³ yoğunluklardaki karbonlu ve beyaz EPS levhalarımız, binalarda %50\'ye varan enerji tasarrufu sağlar. TS 7316 EN 13163 standartlarına uygun üretim yapılmaktadır.',
        listItems: [
          '16-30 kg/m³ yüksek dansite EPS yalıtım levhaları',
          'Karbonlu (grafit katkılı) ve beyaz EPS seçenekleri',
          '%50\'ye varan enerji tasarrufu performansı',
          'TS 7316 EN 13163 standart uyumlu üretim',
          'Bina Enerji Kimlik Belgesi uyumu',
          'Fabrika fiyatıyla toptan ve perakende satış',
        ],
        image: '/images/katalog/mantolama-katmanlar.webp',
        imageAlt: 'Malatya dış cephe mantolama - EPS ısı yalıtım levhası ve aksesuarları',
      },
      {
        heading: 'Mantolama Sistemi Bileşenleri ve Köşe Elemanları',
        body: 'Eksiksiz bir mantolama sistemi; ısı yalıtım levhaları, yapıştırıcı, sıva harcı, alkali dayanımlı donatı filesi, plastik veya çelik çivili dübeller ve köşe profillerinden oluşur. MRC Yalıtım Söve paket mantolama sistemiyle tüm bileşenler birbiriyle %100 uyumlu olarak şantiyenize sevk edilir.',
        listItems: [
          'Paket mantolama çözümü — tek elden eksiksiz malzeme',
          'Yüksek aderanslı yapıştırıcı ve sıva harçları',
          '160 gr/m² alkali dayanımlı donatı filesi',
          'Darbe dayanımlı köşe profilleri ve L-köşe elemanları',
          'TS EN standartlarına tam uygunluk',
        ],
        image: '/images/katalog/mantolama-kose-elemanlari.webp',
        imageAlt: 'Dış cephe mantolama köşe elemanları ve L-köşe söve profilleri',
      },
      {
        heading: 'Mantolama Fiyatları ve Teklif Süreci',
        body: 'Dış cephe mantolama fiyatları; binanın metrekaresi, kullanılacak EPS levha kalınlığı ve dansitesi, söve ve silme miktarı, iş gücü ve bölgesel faktörlere göre değişir. MRC Yalıtım Söve olarak fabrikadan doğrudan aracısız malzeme tedariği sayesinde piyasa fiyatlarının altında maliyet avantajı sunuyoruz.',
        listItems: [
          'Metrekare bazlı detaylı maliyet analizi',
          'Fabrika fiyatıyla aracısız EPS levha tedariği',
          'Söve, silme ve dekoratif eleman dahil paket teklif',
          'Ücretsiz keşif ve proje danışmanlığı (Malatya ve çevresi)',
          'Toplu konut ve müteahhit özel iskonto',
        ],
      },
    ],
    faq: [
      {
        question: 'Malatya\'da dış cephe mantolama ne kadara mal olur?',
        answer: 'Mantolama fiyatları binanın büyüklüğüne, EPS levha kalınlığına ve yoğunluğuna göre değişir. MRC Yalıtım Söve, fabrikadan doğrudan satış avantajıyla piyasa fiyatlarının altında teklif sunar. Güncel fiyat için 0532 258 52 44\'ü arayın.',
      },
      {
        question: 'Mantolama ne kadar enerji tasarrufu sağlar?',
        answer: 'Doğru kalınlıkta ve dansitede EPS levha ile yapılan profesyonel dış cephe mantolama, ısıtma ve soğutma giderlerinde %40-50 oranında enerji tasarrufu sağlar.',
      },
      {
        question: 'Mantolama yapılırken söve zorunlu mu?',
        answer: 'Zorunlu olmamakla birlikte söve uygulaması, mantolamanın hem estetik görünümünü artırır hem de pencere ve kapı çevresindeki ısı köprülerini kapatarak yalıtım performansını yükseltir.',
      },
    ],
    relatedServices: ['malatya-sove-imalati', 'malatya-yalitim', 'eps-isi-yalitim-levhasi'],
    ctaText: 'Mantolama Teklifi Alın',
    badgeLabel: 'Popüler Hizmet',
    iconKey: 'mantolama',
    sitemapPriority: 0.95,
  },

  // ─── 3. MALATYA YALITIM ──────────────────────────────────────────────────
  {
    slug: 'malatya-yalitim',
    title: 'Malatya Yalıtım — EPS Isı Yalıtım Levhası Üretimi',
    metaTitle: 'Malatya Yalıtım | EPS Isı Yalıtım Levhası Fabrikası',
    metaDescription: 'Malatya yalıtım: 1. OSB\'de yüksek dansite EPS ısı yalıtım levhası üretimi. Karbonlu ve beyaz strafor levha toptan fabrika fiyatıyla. Bina yalıtım çözümleri.',
    ogTitle: 'Malatya Yalıtım | EPS Isı Yalıtım Fabrikası — MRC Yalıtım Söve',
    ogDescription: 'Malatya 1. OSB\'de yüksek dansite EPS ısı yalıtım levhası üretimi. Karbonlu, beyaz ve yüksek yoğunluklu levhalar. Fabrika fiyatıyla toptan satış.',
    heroImage: '/images/katalog/yalitim-hero.webp',
    heroSubtitle: 'Malatya 1. Organize Sanayi Bölgesi\'nde tam otomasyonlu üretim hatlarıyla yüksek dansite EPS (Genleştirilmiş Polistiren) ısı yalıtım levhası üretimi. Karbonlu, beyaz ve yüksek yoğunluklu strafor çeşitleri.',
    keywords: [
      'Malatya yalıtım',
      'Malatya yalıtım firmaları',
      'EPS yalıtım levhası Malatya',
      'ısı yalıtım Malatya',
      'strafor yalıtım Malatya',
      'yalıtım malzemesi Malatya',
      'Malatya EPS üreticisi',
      'karbonlu EPS levha',
      'yüksek dansite EPS',
    ],
    schema: {
      serviceType: 'EPS Isı Yalıtım Levhası Üretimi ve Satışı',
      description: 'Malatya 1. OSB\'de yüksek dansite karbonlu ve beyaz EPS ısı yalıtım levhası üretimi ve toptan/perakende satışı.',
      areaServed: ['Malatya', 'Elazığ', 'Adıyaman', 'Kahramanmaraş', 'Sivas', 'Bingöl', 'Diyarbakır', 'Gaziantep', 'Tunceli'],
      provider: 'MRC Yalıtım Söve',
    },
    contentSections: [
      {
        heading: 'Malatya\'da EPS Isı Yalıtım Levhası Üretimi',
        body: 'MRC Yalıtım Söve, Malatya\'nın önde gelen EPS ısı yalıtım levhası üreticisidir. 1. Organize Sanayi Bölgesi\'ndeki modern tesisimizde, 16 kg/m³ ile 30 kg/m³ arasında değişen yoğunluklarda beyaz ve karbonlu (grafit katkılı) EPS ısı yalıtım levhaları üretmekteyiz. Ürünlerimiz TS 7316 EN 13163 standartlarına uygundur.',
        listItems: [
          'Beyaz EPS yalıtım levhaları (16-20 kg/m³)',
          'Karbonlu (grafit katkılı) EPS levhalar (18-30 kg/m³)',
          'Yüksek dansite endüstriyel yalıtım levhaları',
          'Özel kesim ve kalınlık seçenekleri',
          'Teras, çatı, döşeme ve duvar yalıtım uygulamaları',
          'TS 7316 EN 13163 standart belgeli üretim',
        ],
        image: '/images/katalog/yalitim-levhalar.webp',
        imageAlt: 'Malatya EPS ısı yalıtım levhası blokları ve kalınlıkları',
      },
      {
        heading: 'EPS Yalıtım Levhasının Avantajları',
        body: 'EPS (Genleştirilmiş Polistiren) ısı yalıtım levhası, düşük ısı iletkenlik katsayısı (λ ≤ 0.035 W/mK) sayesinde binalarda üstün ısı yalıtım performansı sağlar. Hafif yapısı, kolay işlenebilirliği ve uzun ömürlü dayanıklılığıyla hem yeni bina projelerinde hem de mevcut bina yenileme (retrofit) uygulamalarında en çok tercih edilen yalıtım malzemesidir.',
        listItems: [
          'Düşük ısı iletkenlik katsayısı (λ ≤ 0.035 W/mK)',
          'Hafif yapı — binaya ek yük bindirmez',
          'Kolay kesim ve işlenebilirlik',
          'Nem ve suya karşı kapalı hücre yapısı',
          '%98 hava içeriğiyle mükemmel yalıtım',
          'Çevre dostu, geri dönüştürülebilir malzeme',
        ],
        image: '/images/katalog/yalitim-asmolen.webp',
        imageAlt: 'Membran, brüt beton astarı ve EPS strafor yalıtım ürünleri',
      },
      {
        heading: 'Malatya ve Çevre İllere Yalıtım Malzemesi Tedariği',
        body: 'Fabrikamızdan Malatya merkez, Yeşilyurt, Battalgazi ilçeleri ile Elazığ, Adıyaman, Kahramanmaraş, Sivas, Bingöl, Diyarbakır ve Gaziantep illerine düzenli olarak toptan ve perakende EPS yalıtım levhası sevkiyatı gerçekleştirmekteyiz. Aracı maliyeti olmadan doğrudan fabrika fiyatıyla tedarik avantajı sunuyoruz.',
        listItems: [
          'Malatya merkez, Yeşilyurt ve Battalgazi teslimat',
          'Elazığ, Adıyaman ve K.Maraş sevkiyatı',
          'Sivas, Bingöl, Diyarbakır ve Gaziantep gönderimi',
          'Toptan ve perakende satış seçenekleri',
          'Müteahhit ve bayilere özel iskonto programı',
        ],
      },
    ],
    faq: [
      {
        question: 'Malatya\'da yalıtım malzemesi nereden alınır?',
        answer: 'MRC Yalıtım Söve, Malatya 1. OSB\'de EPS ısı yalıtım levhası üreten fabrikadır. Fabrika fiyatıyla toptan ve perakende satış yapmaktadır. Teklif için 0532 258 52 44\'ü arayabilirsiniz.',
      },
      {
        question: 'Karbonlu EPS ile beyaz EPS arasındaki fark nedir?',
        answer: 'Karbonlu (grafit katkılı) EPS, beyaz EPS\'ye göre %20 daha yüksek ısı yalıtım performansı sunar. Aynı kalınlıkta daha iyi yalıtım sağladığı için ince yalıtım gereken projelerde tercih edilir.',
      },
      {
        question: 'Malatya dışına yalıtım levhası sevkiyatı yapılıyor mu?',
        answer: 'Evet. Malatya fabrikamızdan Elazığ, Adıyaman, Kahramanmaraş, Sivas, Bingöl, Diyarbakır, Gaziantep ve tüm Türkiye\'ye güvenli sevkiyat yapılmaktadır.',
      },
    ],
    relatedServices: ['malatya-dis-cephe-mantolama', 'eps-isi-yalitim-levhasi', 'malatya-sove-imalati'],
    ctaText: 'Yalıtım Teklifi Alın',
    badgeLabel: 'Fabrika Üretim',
    iconKey: 'yalitim',
    sitemapPriority: 0.95,
  },

  // ─── 4. EPS ISI YALITIM LEVHASI ──────────────────────────────────────────
  {
    slug: 'eps-isi-yalitim-levhasi',
    title: 'EPS Isı Yalıtım Levhası — Malatya Üretim',
    metaTitle: 'EPS Isı Yalıtım Levhası | Malatya Fabrika Fiyatıyla',
    metaDescription: 'EPS ısı yalıtım levhası üretimi: Karbonlu ve beyaz yüksek dansite EPS strafor. Malatya 1. OSB fabrikasından toptan fiyatla. TS EN 13163 belgeli.',
    ogTitle: 'EPS Isı Yalıtım Levhası Üretimi | MRC Yalıtım Söve Malatya',
    ogDescription: 'Yüksek dansite karbonlu ve beyaz EPS ısı yalıtım levhası. Malatya fabrikasından doğrudan toptan ve perakende satış.',
    heroImage: '/images/katalog/eps-hero.webp',
    heroSubtitle: 'Yüksek dansite karbonlu ve beyaz EPS ısı yalıtım levhaları. 16-30 kg/m³ yoğunluk seçenekleriyle dış cephe, çatı, teras ve döşeme yalıtımında profesyonel çözümler.',
    keywords: [
      'EPS ısı yalıtım levhası',
      'karbonlu EPS levha',
      'beyaz EPS strafor',
      'yüksek dansite EPS',
      'strafor yalıtım levhası',
      'EPS levha fiyatları',
      'EPS üretici Malatya',
      'ısı yalıtım malzemesi',
      'mantolama levhası',
    ],
    schema: {
      serviceType: 'EPS Isı Yalıtım Levhası Üretimi',
      description: '16-30 kg/m³ yoğunluk aralığında karbonlu ve beyaz EPS ısı yalıtım levhası üretimi. TS 7316 EN 13163 belgeli.',
      areaServed: ['Malatya', 'Türkiye'],
      provider: 'MRC Yalıtım Söve',
    },
    contentSections: [
      {
        heading: 'EPS Isı Yalıtım Levhası Nedir?',
        body: 'EPS (Expanded Polystyrene — Genleştirilmiş Polistiren), %98 hava ve %2 polistiren polimerinden oluşan kapalı hücreli bir ısı yalıtım malzemesidir. Düşük ısı iletkenlik katsayısı, hafif yapısı ve kolay işlenebilirliğiyle bina dış cephe mantolama, çatı, teras, döşeme ve radye temel yalıtımında en yaygın kullanılan yalıtım ürünüdür.',
        listItems: [
          '%98 hava içeriğiyle üstün ısı yalıtımı',
          'Düşük ısı iletkenlik katsayısı (λ ≤ 0.035 W/mK)',
          'Hafif yapı — m³ başına sadece 16-30 kg',
          'Kapalı hücre yapısı — neme karşı dayanıklı',
          'Kolay kesim, şekillendirme ve uygulama',
          'Geri dönüştürülebilir, çevre dostu malzeme',
        ],
        image: '/images/katalog/eps-dansite.webp',
        imageAlt: 'EPS ısı yalıtım levhası - paketleme ve dansite seçenekleri',
      },
      {
        heading: 'Karbonlu EPS vs Beyaz EPS Karşılaştırması',
        body: 'Karbonlu EPS (grafit katkılı EPS), içerdiği grafit partikülleri sayesinde ısı radyasyonunu yansıtarak beyaz EPS\'ye göre aynı kalınlıkta %20 daha yüksek ısı yalıtım performansı sunar. Bu sayede daha ince levhalarla aynı yalıtım değerine ulaşmak mümkündür.',
        listItems: [
          'Karbonlu EPS: λ ≤ 0.031 W/mK yalıtım performansı',
          'Beyaz EPS: λ ≤ 0.035 W/mK yalıtım performansı',
          'Karbonlu EPS ile %20 daha az kalınlıkta aynı yalıtım',
          'Her iki tür de TS EN 13163 standart belgeli',
          'Uygulama alanına göre dansite seçimi rehberliği',
        ],
        image: '/images/katalog/eps-asmolen.webp',
        imageAlt: 'Asmolen strafor ve döşeme yalıtım levhaları',
      },
    ],
    faq: [
      {
        question: 'EPS yalıtım levhası ile XPS arasındaki fark nedir?',
        answer: 'EPS kapalı hücreli, hafif ve ekonomik bir yalıtım malzemesidir. XPS ise daha yoğun, su emme oranı daha düşük olup genellikle toprak altı ve ıslak zeminlerde tercih edilir. Dış cephe mantolama için EPS en uygun ve ekonomik seçenektir.',
      },
      {
        question: 'EPS levha fiyatları neye göre değişir?',
        answer: 'EPS levha fiyatları yoğunluk (dansite), kalınlık, karbonlu veya beyaz olması ve sipariş miktarına göre değişir. MRC Yalıtım Söve fabrika fiyatlarıyla doğrudan satış yapar.',
      },
    ],
    relatedServices: ['malatya-yalitim', 'malatya-dis-cephe-mantolama', 'malatya-sove-imalati'],
    ctaText: 'EPS Levha Teklifi Alın',
    badgeLabel: 'Ürün',
    iconKey: 'eps',
    sitemapPriority: 0.85,
  },

  // ─── 5. DEKORATİF DIŞ CEPHE KAPLAMA ──────────────────────────────────────
  {
    slug: 'dekoratif-dis-cephe-kaplama',
    title: 'Dekoratif Dış Cephe Kaplama — Malatya Üretim',
    metaTitle: 'Dekoratif Dış Cephe Kaplama Malatya | Fugalı Panel & Taş Desen',
    metaDescription: 'Malatya dekoratif dış cephe kaplama: Fugalı panel, taş desen kaplama, köşe taşı ve ahşap görünümlü cephe elemanları. Fabrika üretimi, toptan fiyat.',
    ogTitle: 'Dekoratif Dış Cephe Kaplama | MRC Yalıtım Söve Malatya',
    ogDescription: 'Fugalı dış cephe panelleri, taş desen kaplama ve dekoratif cephe elemanları. Malatya fabrikasından doğrudan satış.',
    heroImage: '/images/katalog/cephe-kaplama-hero.webp',
    heroSubtitle: 'Fugalı dış cephe panelleri, taş desen kaplama, bina köşe taşları ve dekoratif mimari elemanlarla binalarınıza estetik ve modern bir görünüm kazandırın.',
    keywords: [
      'dekoratif dış cephe kaplama',
      'fugalı dış cephe kaplama',
      'dış cephe kaplama Malatya',
      'taş desen kaplama',
      'bina köşe taşı',
      'dış cephe panel',
      'cephe kaplama modelleri',
      'dekoratif cephe elemanları',
    ],
    schema: {
      serviceType: 'Dekoratif Dış Cephe Kaplama Uygulaması',
      description: 'Fugalı panel, taş desen kaplama, bina köşe taşı ve dekoratif dış cephe elemanları üretimi ve uygulaması.',
      areaServed: ['Malatya', 'Elazığ', 'Adıyaman', 'Kahramanmaraş'],
      provider: 'MRC Yalıtım Söve',
    },
    contentSections: [
      {
        heading: 'Dekoratif Dış Cephe Kaplama Çözümleri',
        body: 'MRC Yalıtım Söve olarak bina dış cephelerine hem estetik hem de fonksiyonel çözümler sunuyoruz. Fugalı dış cephe panelleri, taş desen kaplama elemanları, ahşap görünümlü cephe profilleri ve bina köşe taşları ile yapılarınıza modern, rustik veya klasik görünüm kazandırabilirsiniz.',
        listItems: [
          'Fugalı EPS dış cephe mantolama panelleri',
          'Doğal taş görünümlü dış cephe kaplamaları',
          'Ahşap desen dekoratif cephe profilleri',
          'Bina köşe taşları ve L-köşe elemanları',
          'Saray tacı ve dekoratif pencere üstü motifleri',
          'Sütun, payanda ve mimari aksesuarlar',
        ],
        image: '/images/katalog/tas-desen-panel.webp',
        imageAlt: 'Dekoratif dış cephe kaplama - taş desen panel ve cephe kaplama modelleri',
      },
      {
        heading: 'Dekoratif Saray Tacı ve Mimari Motifler',
        body: 'Pencere üstü kemerler, saray tacı modelleri ve bina alınlık süslemeleri binanıza görkemli bir mimari hava katar. Fabrikamızda CNC teknolojisiyle üretilen ve akrilik zırhla kaplanan taç modelleri çatlama ve dökülme yapmaz.',
        listItems: [
          'Özel saray tacı ve kemer profilleri',
          'Akrilik polimer zırh kaplama dayanımı',
          'Standart ve özel CAD çizim üretimi',
          'Bina girişleri ve pencere üstü estetiği',
        ],
        image: '/images/katalog/saray-taci-motif.webp',
        imageAlt: 'Dekoratif saray tacı ve pencere üstü süsleme modelleri',
      },
    ],
    faq: [
      {
        question: 'Dekoratif dış cephe kaplama mantolama ile birlikte uygulanabilir mi?',
        answer: 'Evet. Fugalı panellerimiz EPS bazlı olduğu için hem ısı yalıtımı hem de dekoratif kaplama işlevini tek üründe birleştirir. Mantolama sistemiyle tam uyumlu çalışır.',
      },
    ],
    relatedServices: ['malatya-sove-imalati', 'malatya-dis-cephe-mantolama', 'malatya-yalitim'],
    ctaText: 'Kaplama Teklifi Alın',
    badgeLabel: 'Dekoratif',
    iconKey: 'dekoratif',
    sitemapPriority: 0.80,
  },

  // ─── 6. TASYÜNÜ SÖVE VE YALITIM ──────────────────────────────────────────
  {
    slug: 'tasyunu-yanmaz-sove',
    title: 'Taşyünü Yanmaz Söve — A1 Sınıfı Yangın Güvenlikli',
    metaTitle: 'Taşyünü Yanmaz Söve | A1 Sınıfı Yangın Güvenlikli Söve',
    metaDescription: 'Taşyünü yanmaz söve: A1 sınıfı tam yanmaz, 150 kg/m³ yoğunlukta taşyünü çekirdekli güvenlik söve profilleri. Yangın yönetmeliğine uygun. Malatya üretimi.',
    ogTitle: 'Taşyünü Yanmaz Söve Profilleri | MRC Yalıtım Söve',
    ogDescription: 'A1 sınıfı tam yanmaz taşyünü çekirdekli söve profilleri. Yangın yönetmeliğine tam uyumlu, 150 kg/m³ yoğunluk.',
    heroImage: '/images/katalog/tasyunu-hero.webp',
    heroSubtitle: 'A1 sınıfı tam yanmaz taşyünü çekirdekli söve profilleri. 150 kg/m³ yoğunlukta taşyünü ile yangın güvenliği ve mimari estetiği bir arada sunar.',
    keywords: [
      'taşyünü söve',
      'yanmaz söve',
      'A1 sınıfı söve',
      'taşyünü yalıtım',
      'yangın güvenlikli söve',
      'taşyünü söve Malatya',
      'yanmaz yalıtım söve profili',
    ],
    schema: {
      serviceType: 'Taşyünü Yanmaz Söve Üretimi',
      description: 'A1 sınıfı tam yanmaz, 150 kg/m³ yoğunlukta taşyünü çekirdekli söve profilleri üretimi.',
      areaServed: ['Malatya', 'Türkiye'],
      provider: 'MRC Yalıtım Söve',
    },
    contentSections: [
      {
        heading: 'A1 Sınıfı Yanmaz Taşyünü Söve Profilleri',
        body: 'Yangın güvenliği gerektiren bina projelerinde A1 sınıfı tam yanmaz taşyünü çekirdekli söve profilleri zorunludur. MRC Yalıtım Söve olarak 150 kg/m³ yoğunluktaki taşyünü çekirdek üzerine akrilik zırh kaplamalı söve profilleri üretmekteyiz. Yüksek katlı binalar, AVM, otel, hastane ve kamu yapılarında yangın yönetmeliğine tam uyumlu çözüm sunar.',
        listItems: [
          'A1 sınıfı — tam yanmaz sertifikalı',
          '150 kg/m³ yoğunlukta taşyünü çekirdek',
          'Akrilik polimer zırh kaplama',
          'Yüksek katlı bina yangın yönetmeliği uyumu',
          'AVM, otel, hastane ve kamu yapıları için uygun',
          'EPS söveler ile aynı estetik görünüm',
        ],
        image: '/images/katalog/tasyunu-yanmaz.webp',
        imageAlt: 'Taşyünü yanmaz söve profili ve yalıtım levhası - A1 sınıfı',
      },
      {
        heading: 'Ahşap Desenli ve Taşyünü Güvenlik Profilleri',
        body: 'Yangın yönetmeliğine uygun taşyünü çekirdekli söve modellerimiz, ahşap desenli kaplama seçenekleriyle de üretilmektedir. Böylece hem yangın güvenliği hem de doğal ahşap sıcaklığı tek bir profilde buluşur.',
        listItems: [
          'Ahşap dokulu estetik görünüm',
          'A1 sınıfı yanmazlık garantisi',
          '10x20 cm ve 15x20 cm profil ebatları',
          'Dış hava koşullarına tam direnç',
        ],
        image: '/images/katalog/tasyunu-profiller.webp',
        imageAlt: 'Taşyünü ve ahşap desenli dekoratif dış cephe profilleri',
      },
    ],
    faq: [
      {
        question: 'Taşyünü söve ile EPS söve arasındaki fark nedir?',
        answer: 'Taşyünü söve A1 sınıfı tam yanmaz malzemeden üretilir ve yüksek katlı binalarda zorunludur. EPS söve ise daha hafif ve ekonomik olup, konut projelerinde yaygın kullanılır. Her ikisi de aynı estetik görünümü sunar.',
      },
    ],
    relatedServices: ['malatya-sove-imalati', 'malatya-dis-cephe-mantolama', 'malatya-yalitim'],
    ctaText: 'Taşyünü Söve Teklifi Alın',
    badgeLabel: 'Yangın Güvenlik',
    iconKey: 'tasyunu',
    sitemapPriority: 0.80,
  },
];

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────────────────

/** Get a service by its slug */
export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}

/** Get all service slugs for generateStaticParams */
export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

/** Get related service objects from slugs */
export function getRelatedServices(slugs: string[]): ServicePage[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServicePage => s !== undefined);
}
