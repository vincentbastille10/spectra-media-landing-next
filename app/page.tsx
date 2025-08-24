// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import SalesBot from '../components/SalesBot';

export const metadata = {
  title:
    'Spectra Media — Automatisation IA (BettyBot, InnovationPulse, outils .dmg)',
  description:
    "Chatbots BettyBot, veille IA prédictive InnovationPulse et ...— déployez des automatisations rapides, fiables et mesurables.",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>

        <div className="container hero-inner">
          <div className="hero-left">
            <div className="badge">🚀 Automatisation IA, sans blabla</div>
            <h1>
              Accélérez capture de leads & ops
              <br />
              avec <span className="grad">BettyBot</span>,{' '}
              <span className="grad">InnovationPulse</span> & outils{' '}
              <span className="grad">.dmg</span>
            </h1>
            <p className="lead">
              Des agents qui qualifient, une veille IA prédictive actionnable, et
              des utilitaires macOS qui trient vos factures. Rapide à déployer.
              Mesurable. Rentable.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="#produits">
                Voir les produits
              </Link>
              <Link className="btn btn-ghost" href="#contact">
                Nous contacter
              </Link>
            </div>

            <ul className="ticks">
              <li>⏱️ Mise en place en jours, pas en mois</li>
              <li>📊 KPI clairs : taux de qualif, conversion, temps gagné</li>
              <li>🔒 Respect des données & confidentialité</li>
            </ul>
          </div>

          <div className="hero-right">
            <div className="ring">
              <Image
                src="/favicon.png"
                alt="Spectra Media — anneau"
                width={360}
                height={360}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUITS */}
      <section id="produits" className="section container">
        <h2>Nos produits</h2>
        <p className="muted">
          Choisissez le point d’impact le plus direct. Nous intégrons à votre stack existante.
        </p>

        <div className="grid">
          {/* BettyBot */}
          <article className="card">
            <div className="card-head">
              <span className="pill pill-green">Chatbot qualif</span>
              <h3>BettyBot — capture & qualification de leads</h3>
            </div>
            <p>
              Un agent conversationnel qui qualifie, route et prend des RDV, directement sur
              votre site ou WhatsApp. Branché Sheets/CRM, métriques claires.
            </p>
            <ul className="list">
              <li>🧭 Script de qualif personnalisable</li>
              <li>📈 Score & routage (email/Slack/CRM)</li>
              <li>📅 Prise de RDV (Calendly)</li>
            </ul>
            <div className="card-cta">
              <a
                className="btn btn-primary"
                href="https://bettybotdelph.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                Essayer BettyBot
              </a>
              <Link
                className="btn btn-ghost"
                href="/(site)/blog/integrer-bettybot-sur-votre-site-en-10-minutes"
              >
                Guide d’intégration →
              </Link>
            </div>
          </article>

          {/* InnovationPulse */}
          <article className="card">
            <div className="card-head">
              <span className="pill pill-blue">Veille IA prédictive</span>
              <h3>InnovationPulse — signaux faibles utilisables</h3>
            </div>
            <p>
              Une veille IA qui anticipe les tendances (modèles, frameworks,
              usages) et propose des “moves” concrets pour votre roadmap ou vos
              campagnes.
            </p>
            <ul className="list">
              <li>🔮 Détection de signaux faibles par grappes</li>
              <li>🧪 Idées testables (MVP, hooks, contenus)</li>
              <li>📬 Remontées hebdo + alertes</li>
            </ul>
            <div className="card-cta">
              <a
                className="btn btn-primary"
                href="https://spectramedia.gumroad.com/l/InnovationPulse"
                target="_blank"
                rel="noreferrer"
              >
                InnovationPulse sur Gumroad
              </a>
            </div>
          </article>

          {/* Trieur de factures (.dmg) */}
          <article className="card">
            <div className="card-head">
              <span className="pill pill-purple">Utilitaire macOS</span>
              <h3>Trieur de factures — .dmg local-first</h3>
            </div>
            <p>
              Application macOS qui récupère vos factures (Gmail), extrait les montants/TVA/dates,
              détecte les doublons et alimente vos Google Sheets.
            </p>
            <ul className="list">
              <li>📥 Récupération Gmail + PDF</li>
              <li>🧾 Extraction champs clés</li>
              <li>📊 Export vers Google Sheets</li>
            </ul>
            <div className="card-cta">
              <Link className="btn btn-ghost" href="/(site)/blog/specs-trieur-factures-macos">
                Specs techniques →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section container">
        <h2>Nous contacter</h2>
        <p className="muted">
          Expliquez l’objectif et on vous propose le setup le plus court vers la
          valeur.
        </p>

        <form
          action="https://script.google.com/macros/s/AKfycbwv68x_ZdlBoibZVJBxb5vS9Y58nAPXOpSjo37PBl5vnZo0J74dIgGJ6JqmASrXSEWbHA/exec"
          method="POST"
          className="form"
        >
          <label className="field">
            <span>Email</span>
            <input name="email" type="email" required placeholder="votre@email.com" />
          </label>

          <label className="field">
            <span>Nom</span>
            <input name="nom" type="text" placeholder="Prénom Nom / Entreprise" />
          </label>

          <label className="field">
            <span>Objet</span>
            <input
              name="objet"
              type="text"
              required
              placeholder="Ex : qualif de leads pour site SaaS"
            />
          </label>

          <button className="btn btn-primary" type="submit">
            Envoyer
          </button>
        </form>
      </section>

      <SalesBot />
    </main>
  );
}
