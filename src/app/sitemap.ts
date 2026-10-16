import { MetadataRoute } from 'next';
import { services, SITE_URL } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Mevcut sabit sayfalar
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/hizmetler`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kvkk`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/MRC_2026_Katalog.pdf`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dinamik hizmet sayfaları — services.ts'den otomatik üretim
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/hizmetler/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: service.sitemapPriority,
  }));

  return [...staticPages, ...servicePages];
}
