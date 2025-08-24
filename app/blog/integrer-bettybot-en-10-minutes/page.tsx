// app/blog/integrer-bettybot-en-10-minutes/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intégrer BettyBot sur votre site en 10 minutes",
  description: "Guide simple, pas de jargon. Copiez-collez et c’est en ligne.",
  alternates: { canonical: "/blog/integrer-bettybot-en-10-minutes" }
};

export default function Post() {
  return (
    <article className="prose prose-gray max-w-none">
      <h1>Intégrer BettyBot sur votre site en 10 minutes</h1>
      <p>
        Objectif : afficher un petit assistant qui pose les bonnes questions, prend un RDV
        (Calendly) et vous envoie les demandes automatiquement (email/Slack/CRM).
      </p>

      <h2>1) Créez votre widget</h2>
      <ol>
        <li>Définissez 4–6 questions utiles (nom, email, besoin, budget, délais…)</li>
        <li>Choisissez où envoyer les réponses (email, Slack, CRM).</li>
        <li>Activez la prise de RDV (Calendly).</li>
      </ol>

      <h2>2) Collez le code sur votre site</h2>
      <p>
        Ajoutez ce petit bout de code dans votre page (juste avant <code>&lt;/body&gt;</code>).
        Si vous utilisez un builder (WordPress, Webflow…), utilisez le bloc “Code/HTML”.
      </p>

      <pre><code>{`<script src="https://cdn.example.com/betty.js" defer></script>
<div id="betty-root" data-theme="light"></div>`}</code></pre>

      <p>Besoin d'aide ? <Link href="/#contact">Écrivez-nous</Link>.</p>

      <h2>Questions fréquentes</h2>
      <p><b>Est-ce compatible avec mon site ?</b> Oui. On branche ce que vous avez déjà.</p>
      <p><b>Est-ce que c’est RGPD ?</b> Oui. Rien n’est partagé sans votre accord.</p>
      <p><b>En combien de temps ?</b> Le plus souvent, quelques jours.</p>
    </article>
  );
}
