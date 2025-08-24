import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Comment nous produisons InnovationPulse (méthode & qualité) — Spectra Media',
  description: 'Article de blog Spectra Media : Comment nous produisons InnovationPulse (méthode & qualité)'
};
export default function Post(){
  return (<main className="wrap section">
    <h1>Comment nous produisons InnovationPulse (méthode & qualité)</h1>
    <article className="card">
      <div className="muted" dangerouslySetInnerHTML={{__html: ` <h2>Pipeline</h2>     <ul><li>Collecte multi-sources vérifiées</li>     <li>Scoring par <em>signal strength</em> (impact, confiance, fraîcheur)</li>     <li>Vérification humaine & synthèse actionnable</li></ul>     <p>Livraison quotidienne par email + lien de téléchargement. Idéal pour prioriser la R&D et le contenu.</p>`} />
    </article>
  </main>);
}
