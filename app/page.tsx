import Image from 'next/image'
import Link from 'next/link'

export default function Page(){
  return (
    <>
      {/* HERO */}
      <section className="section bg-hero/10">
        <div className="wrap grid md:grid-cols-[1.2fr_.8fr] gap-10 items-center">
          <div>
            <span className="badge mb-4">🚀 Automatisation IA, sans blabla</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Accélérez capture de leads & ops<br/>
              avec <span className="text-rainbow">BettyBot, InnovationPulse</span><br/>
              et outils <span className="text-rainbow">.dmg</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Des agents qui qualifient, une veille IA prédictive actionnable,
              et des utilitaires macOS qui trient vos factures.
              Rapide à déployer. Mesurable. Rentable.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="#produits" className="btn btn-primary">Voir les produits</Link>
              <Link href="#contact" className="btn">Nous contacter</Link>
            </div>
            <ul className="mt-6 text-sm text-gray-600 space-y-1">
              <li>✅ Mise en place en jours, pas en mois</li>
              <li>📊 KPI clairs : taux de qualif, conversion, temps gagné</li>
              <li>🔒 Respect des données & confidentialité</li>
            </ul>
          </div>
          <div className="justify-self-center">
            <Image src="/icon.png" alt="Spectra Media" width={240} height={240} priority />
          </div>
        </div>
      </section>

      {/* PRODUITS */}
      <section id="produits" className="section">
        <div className="wrap grid md:grid-cols-3 gap-6">
          <div className="card">
            <span className="badge mb-3">CHATBOT QUALIF</span>
            <h3 className="text-2xl font-semibold">BettyBot — capture & qualification de leads</h3>
            <p className="mt-2 text-gray-700">
              Un agent conversationnel qui qualifie, route et prend des RDV (Calendly),
              sur votre site ou WhatsApp. Branché Sheets/CRM, métriques claires.
            </p>
            <ul className="list-disc ml-5 mt-3 text-sm text-gray-600 space-y-1">
              <li>Script de qualif personnalisable</li>
              <li>Score & routage (email/Slack/CRM)</li>
              <li>Prise de RDV</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <Link className="btn btn-primary" href="/blog/integrer-bettybot-sur-votre-site-en-10-minutes">Essayer BettyBot</Link>
              <Link className="btn" href="/blog/automatiser-qualification-leads-chatbot">Guide d’intégration →</Link>
            </div>
          </div>

          <div className="card">
            <span className="badge mb-3">VEILLE IA PRÉDICTIVE</span>
            <h3 className="text-2xl font-semibold">InnovationPulse — signaux faibles utilisables</h3>
            <p className="mt-2 text-gray-700">
              Tendance → idées testables (MVP, hooks, contenus) → moves concrets pour votre roadmap.
            </p>
            <ul className="list-disc ml-5 mt-3 text-sm text-gray-600 space-y-1">
              <li>Détection par grappes</li>
              <li>Idées prêtes à tester</li>
              <li>Remontées hebdo + alertes</li>
            </ul>
            <Link className="btn btn-primary mt-4" href="/blog/comment-nous-produisons-innovationpulse">
              InnovationPulse sur Gumroad
            </Link>
          </div>

          <div className="card">
            <span className="badge mb-3">UTILITAIRE MACOS</span>
            <h3 className="text-2xl font-semibold">Trieur de factures — .dmg local-first</h3>
            <p className="mt-2 text-gray-700">
              Récupère Gmail + PDF, extrait TTC/TVA/dates, dédoublonne et remplit Google Sheets.
            </p>
            <ul className="list-disc ml-5 mt-3 text-sm text-gray-600 space-y-1">
              <li>Récupération Gmail + PDF</li>
              <li>Extraction champs clés</li>
              <li>Export vers Google Sheets</li>
            </ul>
            <Link className="btn mt-4" href="/blog/specs-trieur-factures-macos">Specs techniques →</Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="wrap">
          <h2 className="text-3xl font-bold mb-4">Nous contacter</h2>
          <p className="text-gray-600 mb-6">Expliquez l’objectif et on vous propose le setup le plus court vers la valeur.</p>
          <form className="card grid md:grid-cols-3 gap-3" action="https://formspree.io/f/mayzkxxx" method="POST">
            <input name="email" type="email" placeholder="Email" className="border rounded-xl p-3 md:col-span-1" required />
            <input name="name" placeholder="Nom" className="border rounded-xl p-3 md:col-span-1" />
            <input name="subject" placeholder="Objet" className="border rounded-xl p-3 md:col-span-1" />
            <textarea name="message" placeholder="Message" rows={4} className="border rounded-xl p-3 md:col-span-3" />
            <button className="btn btn-primary w-fit">Envoyer</button>
          </form>
        </div>
      </section>
    </>
  )
}
