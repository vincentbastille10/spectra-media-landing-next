import Link from 'next/link';

export const metadata = {
  title: 'Blog — Automatisation IA (Spectra Media)',
  description: 'Guides SEO sur chatbots, veille IA prédictive et automatisation macOS.'
};

const posts = [
  ['integrer-bettybot-sur-votre-site-en-10-minutes','Intégrer BettyBot sur votre site en 10 minutes'],
  ['comment-nous-produisons-innovationpulse','Comment nous produisons InnovationPulse (méthode & qualité)'],
  ['guide-complet-trieur-factures-macos','Guide complet : trieur de factures macOS (.dmg)'],
  ['specs-trieur-factures-macos','Specs techniques : trieur de factures (Gmail, Sheets, PDF)'],
  ['automatiser-qualification-leads-chatbot','Automatiser la qualification de leads avec un chatbot']
];

export default function Blog(){
  return (
    <main className="wrap section">
      <h1>Blog — Automatisation IA</h1>
      <p className="muted">Guides détaillés pour mettre en place vos automatisations avec sérénité.</p>
      <ul>
        {posts.map(([slug, title]) => (
          <li key={slug}><Link href={`/blog/${slug}`}>{title}</Link></li>
        ))}
      </ul>
    </main>
  );
}
