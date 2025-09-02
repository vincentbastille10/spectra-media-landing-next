// app/new-home/page.tsx — page autonome (App Router)
export const metadata = {
  title: "Spectra Media AI — Des agents IA qui travaillent dès ce mois-ci",
  description:
    "Des agents IA prêts-à-déployer pour PME/ETI : capture de leads, tri de factures, RAG privé, service client. Déploiement en jours, ROI < 30 jours, hébergement UE, multi-LLM.",
};

export default function Page() {
  return (
    <>
      <main>
        <section className="smai-wrap" aria-label="Spectra Media AI – Agents IA">
          <div className="smai-container">
            <span className="smai-eyebrow">
              Déploiement en jours • ROI &lt; 30 jours • Hébergement UE
            </span>
            <h1 className="smai-title">
              Des <span className="accent">agents IA</span> qui travaillent dès ce mois-ci
            </h1>
            <p className="smai-sub">
              Générez des <strong>rendez-vous</strong>, triez vos <strong>factures</strong>,
              répondez 24/7 à vos <strong>clients</strong> et retrouvez vos <strong>documents</strong> —
              sans projet interminable. <em>Multi-LLM</em> (évite le lock-in),
              <em> prix clair à l’abonnement</em>, <em>adoption côté métiers</em>.
            </p>
            <div className="smai-cta">
              <a className="smai-btn primary" href="#demo">Voir une démo (15 min)</a>
              <a className="smai-btn secondary" href="#offres">Essayer un agent 14 jours</a>
            </div>

            <div className="smai-badges" role="list" aria-label="Connecteurs & garanties">
              <span className="smai-badge">Google Workspace / Gmail / Sheets</span>
              <span className="smai-badge">HubSpot / Notion / Slack</span>
              <span className="smai-badge">OVH / Scaleway (UE)</span>
              <span className="smai-badge">Multi-LLM (OpenAI / Anthropic / Mistral)</span>
            </div>

            <div className="smai-metrics" aria-label="Indicateurs de résultat">
              <div className="smai-metric"><h4>×3</h4><p>Time-to-value plus rapide (vs projet sur-mesure)</p></div>
              <div className="smai-metric"><h4>−50%</h4><p>Tickets L1 après 30 jours (ciblage service client)</p></div>
              <div className="smai-metric"><h4>+35%</h4><p>Leads qualifiés (immobilier – 6 semaines)</p></div>
            </div>

            <h2 id="offres" style={{margin:"24px 0 8px", fontSize:28}}>Offres prêtes-à-déployer</h2>
            <div className="smai-grid" role="list">
              <article className="smai-card" role="listitem">
                <div><span className="smai-chip">Betty Real-Estate</span></div>
                <h3>Capture &amp; qualification de leads + agenda visites</h3>
                <ul>
                  <li>Bot site + WhatsApp/E-mail, questions ciblées</li>
                  <li>Créneaux de visite synchronisés (Google/Outlook)</li>
                  <li>Compte-rendu auto + push CRM</li>
                </ul>
                <div className="smai-price"><span className="n">à partir de 299€</span><span className="u">/mois + setup</span></div>
                <a className="smai-btn secondary" href="#demo">Demander une démo</a>
              </article>

              <article className="smai-card" role="listitem">
                <div><span className="smai-chip">Invoice Sorter</span></div>
                <h3>Tri des factures + extraction TVA → Google Sheets/ERP</h3>
                <ul>
                  <li>Lecture Gmail/IMAP, filtres “facture/invoice”</li>
                  <li>Extraction montant/TVA/date/émetteur (PDF)</li>
                  <li>Déduplication + suivi anomalies</li>
                </ul>
                <div className="smai-price"><span className="n">à partir de 249€</span><span className="u">/mois + setup</span></div>
                <a className="smai-btn secondary" href="#demo">Essai 14 jours</a>
              </article>

              <article className="smai-card" role="listitem">
                <div><span className="smai-chip">Private RAG</span></div>
                <h3>Recherche sécurisée sur vos contrats &amp; procédures</h3>
                <ul>
                  <li>Index isolé par client (RGPD)</li>
                  <li>Traçabilité des réponses &amp; journaux d’accès</li>
                  <li>Multi-LLM (ouverts/souverains)</li>
                </ul>
                <div className="smai-price"><span className="n">à partir de 199€</span><span className="u">/mois + setup</span></div>
                <a className="smai-btn secondary" href="#demo">Voir en action</a>
              </article>
            </div>

            <div className="smai-faq">
              <h2 style={{margin:"26px 0 10px", fontSize:24}}>FAQ courte</h2>
              <details>
                <summary>Sur-mesure ou packagé ?</summary>
                <p>On part d’un agent standard (80 % du besoin) puis on ajuste les 20 % restants. Résultat : mise en service en semaines plutôt qu’en trimestres.</p>
              </details>
              <details>
                <summary>Où sont hébergées les données ?</summary>
                <p>Hébergement UE (OVH/Scaleway possibles), chiffrage en transit et au repos, index isolés, journaux d’accès et auditabilité.</p>
              </details>
              <details>
                <summary>Comment mesurez-vous le ROI ?</summary>
                <p>On fige des KPI métier (ex. leads qualifiés, temps de traitement, taux de tickets L1) et on compare à J+30/J+60.</p>
              </details>
            </div>

            <div id="demo" style={{marginTop:28}}>
              <a className="smai-btn primary" href="/contact">Parler à un humain (15 min)</a>
            </div>
          </div>
        </section>
      </main>

      {/* Styles intégrés pour cette page */}
      <style jsx global>{`
        :root { --smai-bg:#0b0c10; --smai-bg-2:#111318; --smai-fg:#fff; --smai-muted:#a1a9b8; --smai-accent:#7c3aed; --smai-accent-2:#22c55e; --smai-card:rgba(255,255,255,.06); --smai-border:rgba(255,255,255,.12); --smai-radius:16px; --smai-shadow:0 10px 30px rgba(0,0,0,.35); }
        .smai-wrap{color:var(--smai-fg);background:radial-gradient(1200px 600px at 80% -100px, rgba(124,58,237,.25), transparent 60%), linear-gradient(180deg,var(--smai-bg),var(--smai-bg-2));font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}
        .smai-container{max-width:1120px;margin:0 auto;padding:32px 20px}
        .smai-eyebrow{display:inline-block;padding:6px 12px;border:1px solid var(--smai-border);border-radius:999px;font-size:12px;letter-spacing:.4px;text-transform:uppercase;color:var(--smai-muted)}
        .smai-title{font-size:clamp(28px,4.2vw,56px);line-height:1.05;font-weight:800;margin:14px 0}
        .smai-title .accent{background:linear-gradient(90deg,var(--smai-accent),#3b82f6);-webkit-background-clip:text;background-clip:text;color:transparent}
        .smai-sub{color:var(--smai-muted);font-size:clamp(15px,2vw,18px);max-width:760px}
        .smai-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}
        .smai-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 18px;border-radius:12px;text-decoration:none;font-weight:700;border:1px solid var(--smai-border);transition:transform .12s ease,background .2s ease}
        .smai-btn:active{transform:translateY(1px)}
        .smai-btn.primary{background:var(--smai-accent);color:#fff;border-color:transparent}
        .smai-btn.secondary{background:transparent;color:#e5e7eb}
        .smai-badges{display:flex;gap:14px;flex-wrap:wrap;margin-top:18px}
        .smai-badge{padding:8px 12px;font-size:12px;border:1px dashed var(--smai-border);border-radius:999px;color:var(--smai-muted)}
        .smai-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin:28px 0 6px}
        .smai-metric{background:var(--smai-card);border:1px solid var(--smai-border);border-radius:var(--smai-radius);padding:16px;text-align:center;box-shadow:var(--smai-shadow)}
        .smai-metric h4{font-size:28px;margin:0 0 6px}
        .smai-metric p{margin:0;color:var(--smai-muted);font-size:14px}
        .smai-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:24px}
        .smai-card{background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.03));border:1px solid var(--smai-border);border-radius:var(--smai-radius);padding:22px;box-shadow:var(--smai-shadow);display:flex;flex-direction:column;gap:10px}
        .smai-card h3{margin:0;font-size:20px}
        .smai-card ul{margin:10px 0 0 0;padding:0 0 0 18px}
        .smai-card li{margin:6px 0;color:#e5e7eb}
        .smai-chip{display:inline-block;font-size:12px;color:#cbd5e1;background:rgba(124,58,237,.15);border:1px solid var(--smai-border);border-radius:999px;padding:6px 10px}
        .smai-price{margin-top:auto;display:flex;align-items:baseline;gap:8px}
        .smai-price .n{font-size:22px;font-weight:800}
        .smai-price .u{font-size:12px;color:var(--smai-muted)}
        .smai-faq{margin-top:34px}
        .smai-faq details{background:var(--smai-card);border:1px solid var(--smai-border);border-radius:12px;padding:14px 16px;margin-bottom:10px}
        .smai-faq summary{cursor:pointer;font-weight:700}
        .smai-faq p{color:#e5e7eb;margin:10px 0 0}
        @media (max-width:900px){.smai-metrics{grid-template-columns:1fr}.smai-grid{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}
