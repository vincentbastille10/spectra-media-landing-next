import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guide complet : trieur de factures macOS (.dmg) — Spectra Media',
  description:
    "Article de blog Spectra Media : Guide complet — trieur de factures macOS (.dmg)",
};

export default function Post() {
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1>Guide complet : trieur de factures macOS (.dmg)</h1>
      <article>
        <p>
          Le trieur récupère les pièces jointes Gmail, extrait
          <strong>Montant/TVA/Date</strong> et alimente Google Sheets.
        </p>
        <h2>Installation</h2>
        <ol>
          <li>Lancer l’installeur .dmg/.pkg.</li>
          <li>Authentifier Google.</li>
          <li>Configurer le dossier <em>parsed</em>.</li>
        </ol>
        <h2>Bonnes pratiques</h2>
        <ul>
          <li>Nomenclature des fichiers stable.</li>
          <li>Vérification hebdomadaire des doublons.</li>
        </ul>
      </article>
    </main>
  );
}