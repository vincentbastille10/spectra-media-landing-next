import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spectra Media — Automatisation IA & Chatbots',
  description: 'Flotte Betty Bot, InnovationPulse, Tri Factures macOS et bien plus',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}