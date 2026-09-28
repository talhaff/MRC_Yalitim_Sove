import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/shared/SEOAndTransitions';

export const metadata: Metadata = {
  title: 'Hakkımızda & Malatya Söve İmalat Fabrikası',
  description: 'Malatya 1. OSB modern tesislerimizde yıllık 300.000 m² yüksek dansite EPS yalıtım levhası ve söve imalatı. MRC Yalıtım Söve kurumsal vizyonu ve fabrika üretim gücü.',
  keywords: [
    'Malatya söve fabrikası',
    'Malatya söve imalatı',
    'Malatya yalıtım fabrikası',
    'MRC Yalıtım Söve kurumsal',
    'Malatya EPS üreticisi',
    '1. OSB yalıtım tesisi',
    'Yeşilyurt söve imalatı'
  ],
  alternates: {
    canonical: 'https://mrcyalitimsove.com/about',
  },
  openGraph: {
    title: 'Hakkımızda & Malatya Söve İmalat Fabrikası | MRC Yalıtım Söve',
    description: 'Malatya 1. OSB modern tesislerimizde tam otomasyonlu EPS yalıtım levhası ve dış cephe söve üretimi.',
    url: 'https://mrcyalitimsove.com/about',
    images: [
      {
        url: 'https://mrcyalitimsove.com/images/about-factory.jpg',
        width: 1200,
        height: 630,
        alt: 'MRC Yalıtım Söve Fabrika Üretim Hattı Malatya',
      }
    ],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Ana Sayfa', url: 'https://mrcyalitimsove.com' },
          { name: 'Kurumsal & Hakkımızda', url: 'https://mrcyalitimsove.com/about' }
        ]} 
      />
      {children}
    </>
  );
}
