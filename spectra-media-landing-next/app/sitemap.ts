import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    { url: 'https://spectramedia.online/', lastModified: now },
    {
      url: 'https://spectramedia.online/blog/integrer-bettybot-sur-votre-site-en-10-minutes',
      lastModified: now,
    },
    {
      url: 'https://spectramedia.online/blog/comment-nous-produisons-innovationpulse',
      lastModified: now,
    },
    {
      url: 'https://spectramedia.online/blog/guide-complet-trieur-factures-macos',
      lastModified: now,
    },
    {
      url: 'https://spectramedia.online/blog/automatiser-qualification-leads-chatbot',
      lastModified: now,
    },
    {
      url: 'https://spectramedia.online/blog/specs-trieur-factures-macos',
      lastModified: now,
    },
  ];
}