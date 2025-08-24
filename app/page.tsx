// app/page.tsx
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Automatisation simple pour <span className="underline">gagner des clients</span> — sans blabla
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Assistant de capture de contacts, idées d’actions concrètes, tri automatique des factures.
          <br className="hidden md:block" />
          Livré rapidement. Mesurable. Rentable.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="#produits" className="rounded-full px-5 py-3 border border-gray-900">
            Découvrir nos produits
          </Link>
          <Link href="#contact" className="rounded-full px-5 py-3 bg-gray-900 text-white">
            Nous écrire
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-5 text-sm text-gray-600">
          <li>Installation en quelques jours</li>
          <li>Chiffres clairs (contacts, RDV, temps gagné)</li>
          <li>Respect des données (RGPD)</li>
        </ul>
      </section>

      {/* Produits */}
      <section id="produits" className="space-y-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">BettyBot — capter & qualifier des contacts</h2>
            <p className="text-gray-700">
              Un petit assistant sur votre site/WhatsApp : il pose les <b>bonnes questions</b>, prend des <b>RDV</b> (Calendly)
              et envoie chaque demande à la <b>bonne personne</b> (email/Slack/CRM).
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Questions personnalisées • Envoi automatique • RDV en un clic</li>
              <li>Compatible avec vos outils existants</li>
            </ul>
            <div className="flex gap-3">
              <Link href="/blog/integrer-bettybot-en-10-minutes" className="underline">Voir le guide</Link>
              <Link href="#contact" className="underline">Demander une démo</Link>
            </div>
          </div>
          <div className="rounded-2xl border p-6">
            <p className="font-medium mb-2">Résultat visible</p>
            <p className="text-gray-700">Un tableau simple : <b>contacts qualifiés</b>, <b>RDV pris</b>, <b>temps gagné</b>.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">InnovationPulse — votre veille IA utile</h2>
            <p className="text-gray-700">
              Chaque jour, nous lisons pour vous et envoyons <b>l’essentiel</b> : 5 infos concrètes + <b>idées d’actions</b> pour vos offres,
              contenus ou roadmap. Pas de bruit, que du pratico-pratique.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Infos triées • Idées prêtes à tester • Alertes hebdo</li>
            </ul>
            <div className="flex gap-3">
              <Link href="https://spectramedia.gumroad.com/l/haubanai" className="underline">Voir l’offre</Link>
            </div>
          </div>
          <div className="rounded-2xl border p-6">
            <p className="font-medium mb-2">Concret, mesurable</p>
            <p className="text-gray-700">Des pistes d’actions reliées à vos objectifs. Focus <b>résultats</b>, pas jargon.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">Trieur de factures (Mac)</h2>
            <p className="text-gray-700">
              Une application Mac qui récupère vos <b>factures Gmail</b>, lit montants/TVA/dates et <b>remplit</b> votre Google Sheet.
              Installation simple (double-clic), détection des doublons incluse.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Installation simple • Données sur votre compte • Google Sheet à jour</li>
            </ul>
            <div className="flex gap-3">
              <Link href="/blog/specs-trieur-factures-macos" className="underline">Specs simples</Link>
            </div>
          </div>
          <div className="rounded-2xl border p-6">
            <p className="font-medium mb-2">Prêt pour la compta</p>
            <p className="text-gray-700">Export direct vers Google Sheets. Moins d’oubli, plus de temps gagné.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQ express</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-medium">Combien de temps pour démarrer ?</h3>
            <p className="text-gray-700">Le plus souvent <b>quelques jours</b>.</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium">Dois-je changer mes outils ?</h3>
            <p className="text-gray-700">Non. On <b>branche</b> ce que vous avez déjà (site, email, agenda, CRM).</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium">Comment je vois les résultats ?</h3>
            <p className="text-gray-700">Un tableau clair : <b>contacts qualifiés</b>, <b>RDV</b>, <b>temps gagné</b>.</p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium">Et mes données ?</h3>
            <p className="text-gray-700">Nous respectons le RGPD. <b>Rien n’est partagé</b> sans votre accord.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Parlez-nous de votre besoin</h2>
        <p className="text-gray-700">Dites-nous le résultat que vous voulez obtenir, on propose <b>le chemin le plus court</b>.</p>
        <ContactForm />
      </section>
    </div>
  );
}
