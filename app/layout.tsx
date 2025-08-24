import type { Metadata } from 'next';
import './globals.css';

// Meta configuration for the entire site. It declares
// the canonical domain, SEO descriptions, Open Graph and Twitter metadata,
// as well as favicon definitions. Update `url` fields if the domain changes.
export const metadata: Metadata = {
  metadataBase: new URL('https://spectramedia.online'),
  title: 'Automatisation IA — Betty Bot, InnovationPulse & outils .dmg | Spectra Media',
  description:
    'Flotte Betty Bot (chatbots), InnovationPulse (veille IA prédictive) et outils macOS en .dmg (trieur de factures). Déployez des automatisations IA rapides, fiables et rentables.',
  openGraph: {
    title: 'Automatisation IA — Betty Bot, InnovationPulse & .dmg',
    description:
      "Chatbots Betty Bot, veille IA prédictive InnovationPulse et outils .dmg pour Mac. Automatisations sérieuses, prêtes à l'emploi.",
    url: 'https://spectramedia.online',
    siteName: 'Spectra Media',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatisation IA — Betty Bot, InnovationPulse & .dmg',
    description:
      "Chatbots Betty Bot, veille IA prédictive InnovationPulse et outils .dmg pour Mac.",
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: 'https://spectramedia.online',
    languages: {
      'fr-FR': 'https://spectramedia.online',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" prefix="og: https://ogp.me/ns#">
      <body>{children}</body>
    </html>
  );
}