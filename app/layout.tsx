// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://spectramedia.online"),
  title: "Spectra Media — Automatisation simple pour gagner des clients",
  description:
    "Assistant de capture de contacts, idées d’actions concrètes, tri automatique de factures. Livré rapidement. Mesurable. Rentable.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Spectra Media — Automatisation simple",
    description:
      "Assistant de capture de contacts, idées d’actions concrètes, tri auto des factures.",
    url: "https://spectramedia.online",
    siteName: "Spectra Media",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Nav />
        <main className="mx-auto max-w-6xl px-4 md:px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
