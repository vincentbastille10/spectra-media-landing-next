import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://spectramedia.online'),
  title: {
    default: 'Spectra Media — Accélérez capture de leads & ops',
    template: '%s | Spectra Media',
  },
  description:
    'BettyBot, InnovationPulse et utilitaires .dmg. Rapide. Mesurable. Rentable.',
  alternates: { canonical: 'https://spectramedia.online/' },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',               // ← présent dans /public
    // pas d’apple-touch-icon.png car il n’existe pas dans /public
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://spectramedia.online/',
    siteName: 'Spectra Media',
    title: 'Spectra Media — Accélérez capture de leads & ops',
    description:
      'BettyBot, InnovationPulse et utilitaires .dmg. Rapide. Mesurable. Rentable.',
    images: [
      {
        url: '/og-image.png',           // ← présent dans /public
        width: 1200,
        height: 630,
        alt: 'Spectra Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spectra Media — Accélérez capture de leads & ops',
    description:
      'BettyBot, InnovationPulse et utilitaires .dmg. Rapide. Mesurable. Rentable.',
    images: ['/og-image.png'],          // ← présent dans /public
  },
  other: {
    // fichier de vérification également dispo dans /public
    'google-site-verification':
      'gIEVCjrlWkcjjLzOLyzHkOMcbLtPEMaZwcOnB89oHNs',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD basés sur tes fichiers réels : icon.png, etc.
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Spectra Media',
    url: 'https://spectramedia.online/',
    logo: 'https://spectramedia.online/icon.png', // ← présent dans /public
    sameAs: ['https://spectramedia.gumroad.com'],
  }

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Spectra Media',
    url: 'https://spectramedia.online/',
  }

  return (
    <html lang="fr">
      <body>
        {children}

        {/* Données structurées */}
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </body>
    </html>
  )
}
