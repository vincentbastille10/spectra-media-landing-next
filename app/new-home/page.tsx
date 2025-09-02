// app/new-home/page.tsx — page autonome (App Router, sans styled-jsx)
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
              répondez 24/7 à vos <strong>clients</strong> et retrouvez vos <strong>documents</strong> — sans projet interminable.
              <em> Multi-LLM</em> (évite le lock-in), <em>prix clair à l’abonnement</em>, <em>adoption côté métiers</em>.
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

      {/* Styles globaux intégrés sans styled-jsx */}
      <style>{`
        :root { --smai-bg:#0b0c10; --smai-bg-2:#111318; --smai-fg:#fff; --smai-muted:#a1a9b8; --smai-accent:#7c3aed; --smai-accent-2:#22c55e;
