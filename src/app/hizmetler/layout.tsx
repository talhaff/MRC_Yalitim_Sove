import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/shared/SEOAndTransitions';
import { SITE_URL } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Malatya Söve, Mantolama ve Yalıtım Çözümleri',
  description:
    'Malatya 1. OSB fabrikamızda CNC söve imalatı, yüksek dansite EPS dış cephe mantolama levhası, fugalı kaplama ve taşyünü yanmaz söve üretimi. MRC Yalıtım Söve hizmetleri.',
  keywords: [
    'Malatya söve imalatı',
    'Malatya mantolama',
    'Malatya yalıtım',
    'Malatya söve fabrikası',
    'dış cephe mantolama Malatya',
    'EPS ısı yalıtım levhası Malatya',
    'taşyünü söve',
    'fugalı kaplama Malatya',
    'pencere sövesi modelleri',
    'MRC Yalıtım Söve hizmetleri',
  ],
  alternates: {
    canonical: `${SITE_URL}/hizmetler`,
  },
  openGraph: {
    title: 'Hizmetlerimiz | Malatya Söve İmalatı, Mantolama ve Yalıtım',
    description:
      'Malatya 1. OSB modern tesislerimizde CNC söve üretimi, EPS mantolama levhaları ve cephe kaplama. Doğrudan fabrika fiyatları.',
    url: `${SITE_URL}/hizmetler`,
    siteName: 'MRC Yalıtım Söve',
    images: [
      {
        url: `${SITE_URL}/images/about-factory.jpg`,
        width: 1200,
        height: 630,
        alt: 'MRC Yalıtım Söve Malatya Fabrika Üretim Hizmetleri',
      },
    ],
  },
};

export default function HizmetlerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: SITE_URL },
          { name: 'Hizmetlerimiz', url: `${SITE_URL}/hizmetler` },
        ]}
      />
      {children}
    </>
  );
}
