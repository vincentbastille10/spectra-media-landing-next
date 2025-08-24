import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Specs techniques : trieur de factures (Gmail, Sheets, PDF) — Spectra Media',
  description:
    'Article de blog Spectra Media : Specs techniques : trieur de factures (Gmail, Sheets, PDF)',
};

export default function Post() {
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1>Specs techniques : trieur de factures (Gmail, Sheets, PDF)</h1>
      <article>
        <ul>
          <li>macOS app (local‑first), icône dans la barre de menus.</li>
          <li>
            APIs : Gmail, Google Sheets, Together/OpenAI (optionnel).
          </li>
          <li>PDF : PyMuPDF, extraction des champs, détection des doublons.</li>
          <li>Planification : launchd.</li>
        </ul>
        <p>
          Objectif : fiabilité, rapidité et tolérance aux formats variés.
        </p>
      </article>
    </main>
  );
}