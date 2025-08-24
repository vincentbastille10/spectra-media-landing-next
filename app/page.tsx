import Header from './components/Header';

import JsonLd from './components/JsonLd';

export default function Home(){
  return (
    <>
      <Header />
      <JsonLd />
      <main id="contenu" className="wrap" role="main">
        <section className="hero" aria-label="En-tête">
          <div>
            <span className="badge" aria-label="Étiquette">Automatisation IA, simple et concrète</span>
            <h1>Déployez <em>des bots utiles</em> et des outils <em>qui travaillent pour vous</em>.</h1>
            <p>Flotte Betty Bot pour la relation client, InnovationPulse pour anticiper les tendances IA, et applications macOS en <strong>.dmg</strong> pour automatiser les tâches back-office. Vitesse, fiabilité, résultats.</p>
            <div className="cta-row" style={{marginTop:12}}>
              <a className="btn primary" href="https://bettybotdelph.onrender.com/" rel="nofollow noopener" target="_blank">Voir un Betty Bot en action →</a>
              <a className="btn" href="https://spectramedia.gumroad.com/l/InnovationPulse" rel="nofollow noopener" target="_blank">Découvrir InnovationPulse</a>
            </div>
          </div>
          <div className="hero-card" aria-label="Illustration IA">
            <svg className="svg-illu" viewBox="0 0 640 240" role="img" aria-label="Illustration de neurones et d'engrenages">
              <defs>
                <linearGradient id="n" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#00e5ff"/><stop offset="1" stopColor="#6affb0"/></linearGradient>
                <filter id="glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <rect width="640" height="240" fill="#0b1126" />
              <g stroke="url(#n)" strokeWidth="1.5" opacity=".9">
                <path d="M20 120 Q 140 40, 260 120 T 500 120 T 620 120" fill="none"/>
                <path d="M20 150 Q 140 70, 260 150 T 500 150 T 620 150" fill="none"/>
                <path d="M20 90 Q 140 10, 260 90 T 500 90 T 620 90" fill="none"/>
              </g>
              <g fill="#6affb0" filter="url(#glow)">
                <circle cx="260" cy="120" r="6"/>
                <circle cx="380" cy="120" r="6"/>
                <circle cx="500" cy="120" r="6"/>
              </g>
              <g transform="translate(360,70)" fill="#00e5ff">
                <circle r="26" fill="none" stroke="#00e5ff" strokeWidth="3"/>
                <g>
                  <rect x="-3" y="-26" width="6" height="10" rx="2"/>
                  <rect x="-3" y="16" width="6" height="10" rx="2"/>
                  <rect x="16" y="-3" width="10" height="6" rx="2"/>
                  <rect x="-26" y="-3" width="10" height="6" rx="2"/>
                </g>
              </g>
              <text x="24" y="216" fill="#9bd8ff" fontSize="12">SVG natif — rapide, SEO-friendly, zéro dépendance</text>
            </svg>
          </div>
        </section>

        <section id="kpis" className="section" aria-label="Chiffres clés">
          <h2>Pourquoi Spectra Media ?</h2>
          <p className="muted">Approche produit, livrables concrets, et mise en service sans friction.</p>
          <div className="kpis" role="list">
            <div className="kpi" role="listitem"><b>J+1</b><span>Prototype opérationnel</span></div>
            <div className="kpi" role="listitem"><b>100%</b><span>Local-first sur macOS</span></div>
            <div className="kpi" role="listitem"><b>0 code</b><span>Intégration côté client</span></div>
            <div className="kpi" role="listitem"><b>SEO</b><span>Structure optimisée</span></div>
          </div>
        </section>

        <section id="produits" className="section" aria-label="Produits IA">
          <h2>La suite d'automatisation IA</h2>
          <div className="grid" role="list">
            <article className="card" role="listitem">
              <span className="badge">Chatbots</span>
              <h3>Betty Bot — Flotte d'assistants</h3>
              <p className="muted">Assistant conversationnel <strong>prêt à l'emploi</strong> pour votre site : qualification, rendez-vous, FAQ. Intégration simple par script embarqué. Ton humain, UX soignée.</p>
              <svg className="svg-illu" viewBox="0 0 600 200" aria-hidden="true">
                <rect width="600" height="200" rx="16" fill="#0e1730"/>
                <g stroke="#6affb0" strokeWidth="2" fill="none">
                  <rect x="40" y="30" width="140" height="40" rx="8"/>
                  <rect x="60" y="90" width="120" height="24" rx="6"/>
                  <rect x="200" y="30" width="360" height="120" rx="12"/>
                  <circle cx="240" cy="150" r="10" fill="#6affb0"/>
                  <circle cx="270" cy="150" r="10" fill="#6affb0"/>
                  <circle cx="300" cy="150" r="10" fill="#6affb0"/>
                </g>
              </svg>
              <div className="cta-row">
                <a className="btn primary" href="https://bettybotdelph.onrender.com/" target="_blank" rel="nofollow noopener">Tester maintenant</a>
                <a className="btn" href="#contact">Demander un devis</a>
              </div>
            </article>

            <article className="card" role="listitem">
              <span className="badge">Veille IA</span>
              <h3>InnovationPulse — Veille IA prédictive</h3>
              <p className="muted">Synthèses quotidiennes des innovations IA + priorisation par <em>signal strength</em>. Décisions plus rapides, meilleur timing marché.</p>
              <svg className="svg-illu" viewBox="0 0 600 200" aria-hidden="true">
                <rect width="600" height="200" rx="16" fill="#0e1730"/>
                <polyline points="20,160 100,120 180,140 260,80 340,100 420,60 500,90 580,40" fill="none" stroke="#00e5ff" strokeWidth="3"/>
                <circle cx="500" cy="90" r="6" fill="#00e5ff"/>
              </svg>
              <div className="cta-row">
                <a className="btn primary" href="https://spectramedia.gumroad.com/l/InnovationPulse" target="_blank" rel="nofollow noopener">S'abonner</a>
                <a className="btn" href="/blog/comment-nous-produisons-innovationpulse">Voir comment c'est produit</a>
              </div>
            </article>

            <article className="card" role="listitem">
              <span className="badge">.dmg macOS</span>
              <h3>Trieur de factures — macOS</h3>
              <p className="muted">Récupère les pièces jointes Gmail, trie les PDF, extrait <strong>montant/TVA</strong> et met à jour directement Google Sheets. Idéal TPE/indé.</p>
              <svg className="svg-illu" viewBox="0 0 600 200" aria-hidden="true">
                <rect width="600" height="200" rx="16" fill="#0e1730"/>
                <g stroke="#9fb3ff" fill="none" strokeWidth="2">
                  <rect x="60" y="36" width="140" height="128" rx="10"/>
                  <path d="M80 60h100M80 84h88M80 108h70M80 132h90"/>
                  <rect x="240" y="46" width="280" height="108" rx="12"/>
                  <path d="M260 68h240M260 92h200M260 116h220"/>
                  <polyline points="540,116 560,100 540,84"/>
                </g>
              </svg>
              <div className="cta-row">
                <a className="btn primary" href="#contact">Obtenir l'installeur</a>
                <a className="btn" href="/blog/specs-trieur-factures-macos">Voir les specs</a>
              </div>
            </article>
          </div>
        </section>

        <section id="specs" className="section" aria-label="Spécifications techniques">
          <h2>Specs & intégrations</h2>
          <div className="grid">
            <div className="card"><h3>Intégrations</h3><p className="muted">Gmail, Google Sheets, Calendly, Stripe, Zapier/Make, Vercel, Render.</p></div>
            <div className="card"><h3>Sécurité</h3><p className="muted">Clés API chiffrées, OAuth Google, exécution locale privilégiée, logs minimaux.</p></div>
            <div className="card"><h3>Perf & SEO</h3><p className="muted">HTML/CSS natifs, zéro framework CSS, JSON‑LD, temps de chargement &lt;1s.</p></div>
          </div>
        </section>

        <section id="faq" className="section faq" aria-label="Questions fréquentes">
          <h2>FAQ</h2>
          <details><summary>Comment intégrer un Betty Bot sur mon site ?</summary><p>Nous fournissons un <em>script embed</em> et un guide. L'intégration prend quelques minutes.</p></details>
          <details><summary>Comment est produite la veille InnovationPulse ?</summary><p>Scraping sourcé + scoring + vérifications humaines. Envoi quotidien par email et lien téléchargeable.</p></details>
          <details><summary>Le trieur de factures respecte-t-il le RGPD ?</summary><p>Oui : exécution locale, données minimisées, seules les API Google sont sollicitées.</p></details>
        </section>

        <section id="contact" className="section" aria-label="Contact">
          <h2>Parlons de votre automatisation</h2>
          <p className="muted">Décrivez votre besoin et recevez une proposition claire (<em>timeline</em> + budget).</p>
          <form name="contact" method="POST" data-netlify="true" style={{marginTop:8}}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid" style={{gridTemplateColumns:'1fr 1fr', gap:12}}>
              <label>Nom<br/><input name="name" required/></label>
              <label>Email<br/><input type="email" name="email" required/></label>
            </div>
            <label style={{display:'block', marginTop:12}}>Projet<br/>
              <textarea name="message" rows={5} placeholder="Ex : bot pour RDV, tri de factures, veille IA pour X..." required></textarea>
            </label>
            <div className="cta-row" style={{marginTop:12}}>
              <button className="btn primary" type="submit">Envoyer</button>
              <a className="btn" href="mailto:vinylestorefrance@gmail.com">Ou écrire un email</a>
            </div>
          </form>
        </section>
      </main>

      <footer role="contentinfo">
        <div className="wrap">
          <div style={{display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
            <small>© {(new Date()).getFullYear()} Spectra Media — Le Mans, France</small>
            <small><a href="#">Mentions légales</a> · <a href="#">Confidentialité</a></small>
          </div>
        </div>
      </footer>
    </>
  );
}
