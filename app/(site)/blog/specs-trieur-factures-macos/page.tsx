import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Specs techniques : trieur de factures (Gmail, Sheets, PDF) — Spectra Media',
  description: 'Article de blog Spectra Media : Specs techniques : trieur de factures (Gmail, Sheets, PDF)'
};
export default function Post(){
  return (<main className="wrap section">
    <h1>Specs techniques : trieur de factures (Gmail, Sheets, PDF)</h1>
    <article className="card">
      <div className="muted" dangerouslySetInnerHTML={{__html: ` <ul><li>macOS app (local-first), icône barre de menus</li>     <li>APIs: Gmail, Google Sheets, Together/OpenAI (optionnel)</li>     <li>PDF: PyMuPDF, extraction champs, détection doublons</li>     <li>Planification: launchd</li></ul>     <p>Objectif: fiabilité, rapidité, tolérance aux formats variés.</p>`} />
    </article>
  </main>);
}
