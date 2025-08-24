import Link from 'next/link';

export const metadata = {
  title: 'Blog — Spectra Media',
  description:
    'Articles sur les chatbots, la veille IA prédictive et nos outils d’automatisation.',
};

export default function BlogIndex() {
  const posts = [
    {
      title: 'Intégrer BettyBot sur votre site en 10 minutes',
      slug: 'integrer-bettybot-sur-votre-site-en-10-minutes',
    },
    {
      title: 'Comment nous produisons InnovationPulse (méthode & qualité)',
      slug: 'comment-nous-produisons-innovationpulse',
    },
    {
      title: 'Guide complet : trieur de factures macOS (.dmg)',
      slug: 'guide-complet-trieur-factures-macos',
    },
    {
      title: 'Automatiser la qualification de leads avec un chatbot',
      slug: 'automatiser-qualification-leads-chatbot',
    },
    {
      title: 'Specs techniques : trieur de factures (Gmail, Sheets, PDF)',
      slug: 'specs-trieur-factures-macos',
    },
  ];
  return (
    <main className="p-8 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Blog</h1>
      <ul className="list-disc list-inside space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}