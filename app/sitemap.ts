// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://spectramedia.online'
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog/automatiser-qualification-leads-chatbot`, priority: 0.7 },
    { url: `${base}/blog/integrer-bettybot-sur-votre-site-en-10-minutes`, priority: 0.7 },
    { url: `${base}/blog/guide-complet-trieur-factures-macos`, priority: 0.7 },
    { url: `${base}/blog/specs-trieur-factures-macos`, priority: 0.6 },
    { url: `${base}/mentions-legales`, priority: 0.2 },
    { url: `${base}/privacy`, priority: 0.2 },
  ]
}
