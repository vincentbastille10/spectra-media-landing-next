// components/Nav.tsx
import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">Spectra Media</Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/#produits">Produits</Link>
          <Link href="/blog/integrer-bettybot-en-10-minutes">Exemples</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
        </nav>
      </div>
    </header>
  );
}
