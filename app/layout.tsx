import './styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://spectramedia.ai'),
  title: 'Automatisation IA — Betty Bot, InnovationPulse & outils .dmg | Spectra Media',
  description: 'Flotte Betty Bot (chatbots), InnovationPulse (veille IA prédictive) et outils macOS en .dmg (trieur de factures). Déployez des automatisations IA rapides, fiables et rentables.',
  openGraph: {
    title: 'Automatisation IA — Betty Bot, InnovationPulse & .dmg',
    description: 'Chatbots Betty Bot, veille IA prédictive InnovationPulse et outils .dmg pour Mac. Automatisations sérieuses, prêtes à l\'emploi.',
    url: 'https://spectramedia.ai',
    siteName: 'Spectra Media',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatisation IA — Betty Bot, InnovationPulse & .dmg',
    description: 'Chatbots Betty Bot, veille IA prédictive InnovationPulse et outils .dmg pour Mac.'
  },
  alternates: { canonical: 'https://spectramedia.ai', languages: { 'fr-FR':'https://spectramedia.ai' } }
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="fr" prefix="og: https://ogp.me/ns#">
      <body>{children}</body>
    </html>
  );
}
