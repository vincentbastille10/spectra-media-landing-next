import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="badge">🚀 Automatisation IA, sans blabla</span>
            <h1 style={{ marginTop: 16 }}>
              Accélérez capture de leads & ops<br />
              avec <span className="text-rainbow">BettyBot, InnovationPulse</span><br />
              et outils <span className="text-rainbow">.dmg</span>
            </h1>
            <p style={{ marginTop: 16, fontSize: 18, color: '#555' }}>
              Des agents qui qualifient, une veille IA prédictive actionnable, et des utilitaires macOS qui trient vos factures.
              Rapide à déployer. Mesurable. Rentable.
            </p>
            <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="#produits" className="btn btn-primary">Voir les produits</Link>
              <Link href="#contact" className="btn">Nous contacter</Link>
            </div>
            <ul style={{ marginTop: 16, color: '#555', fontSize: 14, lineHeight: 1.7 }}>
              <li>✅ Mise en place en jours, pas en mois</li>
              <li>📊 KPI clairs : taux de qualif, conversion, temps gagné</li>
              <li>🔒 Respect des données & confidentialité</li>
            </ul>
          </div>

          <div style={{ justifySelf: 'center' }}>
            <Image src="/icon.png" alt="Spectra Media" width={260} height={260} priority />
          </div>
        </div>
      </section>

      {/* PRODUITS */}
      <section id="produits" className="section">
        <div className="wrap">
          <h2>Nos produits</h2>
          <p style={{ color: '#666', marginTop: 8, marginBottom: 16 }}>
            Choisissez le point d’impact le plus direct. Nous intégrons à votre stack existante.
          </p>

          <div className="products">
            {/* BettyBot */}
            <div className="card">
              <span className="badge" style={{ marginBottom: 12 }}>CHATBOT QUALIF</span>
              <h3>BettyBot — capture & qualification de leads</h3>
              <p style={{ color: '#444' }}>
                Agent conversationnel qui qualifie, route et prend des RDV (Calendly). Site ou WhatsApp. Branché Sheets/CRM.
              </p>
              <ul style={{ marginTop: 8, color: '#555', fontSize: 14, lineHeight: 1.7 }}>
                <li>Script de qualif personnalisable</li>
                <li>Score & routage (email/Slack/CRM)</li>
                <li>Prise de RDV</li>
              </ul>
              <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link className="btn btn-primary" href="/blog/integrer-bettybot-sur-votre-site-en-10-minutes">Essayer BettyBot</Link>
                <Link className="btn" href="/blog/automatiser-qualification-leads-chatbot">Guide d’intégration →</Link>
              </div>
            </div>

            {/* InnovationPulse */}
            <div className="card">
              <span className="badge" style={{ marginBottom: 12 }}>VEILLE IA PRÉDICTIVE</span>
              <h3>InnovationPulse — signaux faibles utilisables</h3>
              <p style={{ color: '#444' }}>
                Détecte tendances par grappes → idées testables (MVP, hooks, contenus) → moves concrets.
              </p>
              <ul style={{ marginTop: 8, color: '#555', fontSize: 14, lineHeight: 1.7 }}>
                <li>Détection par grappes</li>
                <li>Idées prêtes à tester</li>
                <li>Remontées hebdo + alertes</li>
              </ul>
              <Link className="btn btn-primary" style={{ marginTop: 12 }} href="/blog/comment-nous-produisons-innovationpulse">
                InnovationPulse sur Gumroad
              </Link>
            </div>

            {/* Trieur de factures */}
            <div className="card">
              <span className="badge" style={{ marginBottom: 12 }}>UTILITAIRE MACOS</span>
              <h3>Trieur de factures — .dmg local-first</h3>
              <p style={{ color: '#444' }}>
                Récupère Gmail + PDF, extrait TTC/TVA/dates, dédoublonne et remplit Google Sheets.
              </p>
              <ul style={{ marginTop: 8, color: '#555', fontSize: 14, lineHeight: 1.7 }}>
                <li>Récupération Gmail + PDF</li>
                <li>Extraction champs clés</li>
                <li>Export vers Google Sheets</li>
              </ul>
              <Link className="btn" style={{ marginTop: 12 }} href="/blog/specs-trieur-factures-macos">Specs techniques →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="wrap">
          <h2>Nous contacter</h2>
          <p style={{ color: '#666', margin: '8px 0 16px' }}>
            Expliquez l’objectif et on vous propose le setup le plus court vers la valeur.
          </p>
          <form className="card form" action="https://formspree.io/f/mayzkxxx" method="POST">
            <input name="email" type="email" placeholder="Email" className="input" required />
            <input name="name" placeholder="Nom" className="input" />
            <input name="subject" placeholder="Objet" className="input" />
            <textarea name="message" placeholder="Message" className="textarea" />
            <button className="btn btn-primary" style={{ width: 'fit-content' }}>Envoyer</button>
          </form>
        </div>
      </section>
    </>
  )
}
