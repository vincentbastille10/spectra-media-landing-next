import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatiser la qualification de leads avec un chatbot — Spectra Media',
  description:
    "Article de blog Spectra Media : Automatiser la qualification de leads avec un chatbot",
};

export default function Post() {
  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1>Automatiser la qualification de leads avec un chatbot</h1>
      <article>
        <p>
          Un chatbot bien conçu filtre et enrichit les demandes entrantes et
          fournit des réponses pertinentes.
        </p>
        <h2>Framework conversationnel</h2>
        <ol>
          <li>Intention → routage</li>
          <li>Qualification → critères</li>
          <li>Action → rendez‑vous / email / documentation</li>
        </ol>
        <p>
          Mesurez les performances : taux de complétion, temps de réponse,
          conversions.
        </p>
      </article>
    </main>
  );
}