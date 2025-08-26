import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://spectramedia.online'
  const now = new Date()
  const urls = [
    '/',
    '/blog',
    '/blog/automatiser-qualification-leads-chatbot',
    '/blog/comment-nous-produisons-innovationpulse',
    '/blog/guide-complet-trieur-factures-macos',
    '/blog/integrer-bettybot-sur-votre-site-en-10-minutes',
    '/blog/specs-trieur-factures-macos',
    '/mentions-legales',
    '/privacy',
  ]
  return urls.map((path, i) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: i <= 1 ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/blog' ? 0.8 : 0.6,
  }))
}
