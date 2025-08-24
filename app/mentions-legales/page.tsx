// app/mentions-legales/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Spectra Media",
  description: "Informations légales de l’éditeur du site.",
  alternates: { canonical: "/mentions-legales" }
};

export default function Mentions() {
  return (
    <article className="prose prose-gray max-w-none">
      <h1>Mentions légales</h1>
      <p><b>Éditeur :</b> Spectra Media (SASU) — [Adresse à compléter] — [SIREN à compléter]</p>
      <p><b>Contact :</b> <a href="mailto:spectramediabots@gmail.com">spectramediabots@gmail.com</a></p>
      <p><b>Hébergement :</b> Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
      <p><b>Propriété intellectuelle :</b> Tous les contenus de ce site (textes, images, logos) sont protégés.</p>
    </article>
  );
}
