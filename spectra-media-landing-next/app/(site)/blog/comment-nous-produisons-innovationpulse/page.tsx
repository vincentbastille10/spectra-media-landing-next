import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Comment nous produisons InnovationPulse (méthode & qualité) — Spectra Media',
  description:
    "Article de blog Spectra Media : Comment nous produisons InnovationPulse (méthode & qualité)",
};

export default function Post() {
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1>
        Comment nous produisons InnovationPulse (méthode &amp; qualité)
      </h1>
      <article>
        <h2>Pipeline</h2>
        <ul>
          <li>Collecte multi‑sources vérifiées.</li>
          <li>
            Scoring par <em>signal strength</em> (impact, confiance, fraîcheur).
          </li>
          <li>Vérification humaine et synthèse actionnable.</li>
        </ul>
        <p>
          Livraison quotidienne par email avec un lien de téléchargement. Idéal pour
          prioriser la R&amp;D et le contenu.
        </p>
      </article>
    </main>
  );
}