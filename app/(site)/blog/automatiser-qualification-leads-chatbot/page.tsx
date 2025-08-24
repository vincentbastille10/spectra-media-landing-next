import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Automatiser la qualification de leads avec un chatbot — Spectra Media',
  description: 'Article de blog Spectra Media : Automatiser la qualification de leads avec un chatbot'
};
export default function Post(){
  return (<main className="wrap section">
    <h1>Automatiser la qualification de leads avec un chatbot</h1>
    <article className="card">
      <div className="muted" dangerouslySetInnerHTML={__html: ` <p>Un chatbot bien conçu filtre et enrichit les demandes entrantes.</p>     <h2>Framework conversationnel</h2>     <ol><li>Intention → routage</li><li>Qualification → critères</li><li>Action → RDV / email / doc</li></ol>     <p>Mesurez: taux de complétion, temps à la réponse, conversions.</p>`} />
    </article>
  </main>);
}
