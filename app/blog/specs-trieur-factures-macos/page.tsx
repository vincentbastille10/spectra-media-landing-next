// app/blog/specs-trieur-factures-macos/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specs simples — Trieur de factures (Mac)",
  description: "Récupère vos factures Gmail, extrait montants/TVA/dates et remplit votre Google Sheet.",
  alternates: { canonical: "/blog/specs-trieur-factures-macos" }
};

export default function Post() {
  return (
    <article className="prose prose-gray max-w-none">
      <h1>Specs simples — Trieur de factures (Mac)</h1>
      <p>
        Application Mac (installation simple par double-clic). Connexion à Gmail pour lire les
        emails avec pièces jointes (PDF) contenant les mots “facture / invoice”.
      </p>
      <h2>Ce que le trieur fait</h2>
      <ul>
        <li>Copie les factures dans un dossier “parsed”.</li>
        <li>Lit le PDF et extrait : <b>Montant TTC</b>, <b>TVA</b>, <b>Date</b>, <b>Émetteur</b>.</li>
        <li>Remplit un Google Sheet dédié.</li>
        <li>Détecte les doublons pour éviter les erreurs.</li>
      </ul>
      <h2>Ce que vous obtenez</h2>
      <ul>
        <li>Une feuille Google propre pour votre comptabilité.</li>
        <li>Moins de temps passé à trier, moins d’oubli.</li>
      </ul>
      <p>Questions ? Écrivez-nous, on vous montre la démo.</p>
    </article>
  );
}
