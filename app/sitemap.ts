import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://spectramedia.ai';
  const routes = ['', '/blog', 
    '/blog/integrer-bettybot-sur-votre-site-en-10-minutes',
    '/blog/comment-nous-produisons-innovationpulse',
    '/blog/guide-complet-trieur-factures-macos',
    '/blog/specs-trieur-factures-macos',
    '/blog/automatiser-qualification-leads-chatbot'
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: base + r,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.7
  }));
}
