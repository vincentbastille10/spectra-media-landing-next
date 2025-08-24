import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Intégrer BettyBot sur votre site en 10 minutes — Spectra Media',
  description: 'Article de blog Spectra Media : Intégrer BettyBot sur votre site en 10 minutes'
};
export default function Post(){
  return (<main className="wrap section">
    <h1>Intégrer BettyBot sur votre site en 10 minutes</h1>
    <article className="card">
      <div className="muted" dangerouslySetInnerHTML={__html: ` <p><strong>Objectif :</strong> déployer un chatbot qualificateur de leads, sans code.</p>     <ol><li>Créez votre bot (nom, ton, objectifs).</li>     <li>Copiez le <em>script embed</em> fourni.</li>     <li>Collez-le avant <code>&lt;/body&gt;</code> sur votre site.</li>     <li>Connectez les actions : email, Calendly, Google Sheets.</li>     <li>Testez 3 cas utilisateurs (prospect chaud, froid, SAV).</li></ol>     <p>Résultat : un agent utile, mesurable (taux de qualif, conversions).</p>`} />
    </article>
  </main>);
}
