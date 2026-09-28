import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim & Fiyat Teklifi Al | Malatya Söve Fabrikası',
  description: 'Malatya söve imalatı ve EPS mantolama fiyat teklifi için doğrudan fabrikamızla iletişime geçin. 1. OSB Yeşilyurt/Malatya. Tel: 0532 258 52 44. Hemen arayın veya WhatsApp\'tan yazın.',
  keywords: [
    'Malatya söve iletişim',
    'Malatya söve fiyatları',
    'Malatya mantolama teklif al',
    'Malatya yalıtım fabrikası telefon',
    'MRC Yalıtım Söve adres',
    '1. OSB Malatya söve teklif',
    'mantolama fiyat teklifi al Malatya'
  ],
  alternates: {
    canonical: 'https://mrcyalitimsove.com/contact',
  },
  openGraph: {
    title: 'İletişim & Fiyat Teklifi Al | MRC Yalıtım Söve Malatya',
    description: 'Malatya 1. OSB söve ve EPS yalıtım fabrikamızdan doğrudan toptan/perakende fiyat teklifi alın. Tel: 0532 258 52 44.',
    url: 'https://mrcyalitimsove.com/contact',
    images: [
      {
        url: 'https://mrcyalitimsove.com/images/hero-factory.jpg',
        width: 1200,
        height: 630,
        alt: 'MRC Yalıtım Söve Fabrika İletişim ve Konum',
      }
    ],
  },
};

import { BreadcrumbSchema } from '@/components/shared/SEOAndTransitions';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Ana Sayfa', url: 'https://mrcyalitimsove.com' },
          { name: 'İletişim & Teklif', url: 'https://mrcyalitimsove.com/contact' }
        ]} 
      />
      {children}
    </>
  );
}
