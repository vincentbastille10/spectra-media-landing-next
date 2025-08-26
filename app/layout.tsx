import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spectra Media — Accélérez capture de leads & ops',
  description: 'BettyBot, InnovationPulse et utilitaires .dmg. Rapide. Mesurable. Rentable.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://spectramedia.online/' },
  openGraph: {
    title: 'Spectra Media',
    url: 'https://spectramedia.online/',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png', // tu as `public/icon.png`
  },
  other: { 'google-site-verification': 'gIEVCjrlWkcjjLzOLyzHkOMcbLtPEMaZwcOnB89oHNs' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
