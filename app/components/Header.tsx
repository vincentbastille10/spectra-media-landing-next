'use client';
import Link from 'next/link';

export default function Header(){
  return (
    <header role="banner">
      <div className="wrap nav" aria-label="Barre de navigation">
        <div className="brand" aria-label="Spectra Media">
          <svg className="logo" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#00e5ff"/><stop offset="1" stopColor="#6affb0"/></linearGradient></defs><circle cx="32" cy="32" r="28" fill="url(#g)"/><path d="M18 40c6 6 22 6 28 0M22 26a10 10 0 0120 0" stroke="#001428" strokeWidth="4" fill="none" strokeLinecap="round"/><circle cx="26" cy="28" r="3" fill="#001428"/><circle cx="38" cy="28" r="3" fill="#001428"/></svg>
          <b>Spectra Media — Automatisation IA</b>
        </div>
        <nav className="cta-row" aria-label="Liens rapides">
          <Link className="btn" href="#produits">Produits</Link>
          <Link className="btn" href="/blog">Blog</Link>
          <Link className="btn" href="#faq">FAQ</Link>
          <Link className="btn primary" href="#contact">Parler à un humain</Link>
        </nav>
      </div>
    </header>
  );
}
