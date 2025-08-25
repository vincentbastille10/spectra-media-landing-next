import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spectra Media — Accélérez capture de leads & ops',
  description:
    'BettyBot, InnovationPulse et utilitaires .dmg : qualif de leads, veille IA actionnable, tri de factures. Rapide à déployer. Mesurable. Rentable.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://spectramedia.online/' },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Spectra Media — Automatisation IA, sans blabla',
    description:
      'Agents de qualif, veille IA actionnable, utilitaires macOS (.dmg).',
    url: 'https://spectramedia.online/',
    images: ['/og-image.png'],
    siteName: 'Spectra Media',
  },
  other: { 'google-site-verification': 'gIEVCjrlWkcjjLzOLyzHkOMcbLtPEMaZwcOnB89oHNs' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
