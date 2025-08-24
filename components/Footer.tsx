// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center justify-between">
        <p>© {new Date().getFullYear()} Spectra Media. Tous droits réservés.</p>
        <nav className="flex items-center gap-4">
          <Link href="/privacy" className="underline">Confidentialité</Link>
          <Link href="/mentions-legales" className="underline">Mentions légales</Link>
        </nav>
      </div>
    </footer>
  );
}
