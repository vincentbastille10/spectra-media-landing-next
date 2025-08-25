cat > app/layout.tsx <<'TSX'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spectra Media — Accélérez capture de leads & ops',
  description: 'BettyBot, InnovationPulse et utilitaires .dmg. Rapide. Mesurable. Rentable.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://spectramedia.online/' },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  openGraph: { title:'Spectra Media', images:['/og-image.png'], url:'https://spectramedia.online/' },
  other: { 'google-site-verification':'gIEVCjrlWkcjjLzOLyzHkOMcbLtPEMaZwcOnB89oHNs' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
TSX
