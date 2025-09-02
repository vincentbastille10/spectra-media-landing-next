// app/new-home/page.tsx — version alignée sur TON design + liens branchés
import Link from "next/link";

export const metadata = {
  title: "Spectra Media — Accélérez capture de leads & ops",
  description:
    "BettyBot, InnovationPulse et automations back-office. Rapide. Mesurable. Rentable.",
};

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="section">
        <div className="wrap">
          <span className="badge">Déploiement en jours • ROI &lt; 30 jours</span>
          <h1 style={{ marginTop: 12 }}>
            Des agents IA qui travaillent dès ce mois-ci
          </h1>
          <p>
            Générez des <strong>rendez-vous</strong>, triez vos <strong>factures</strong>,
            répondez 24/7 à vos <strong>clients</strong> et retrouvez vos <strong>documents</strong>
            — sans projet interminable. Multi-LLM, prix clair à l’abonnement, adoption côté métiers.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
            <Link href="/contact" className="btn btn-primary">
              Voir une démo (15 min)
            </Link>
            <Link href="#offres" className="btn">
              Voir les offres
            </Link>
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="section" id="offres">
        <div className="wrap">
          <h2>Offres prêtes-à-déployer</h2>

          <div
            style={{
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            }}
          >
            <article className="card" style={{ padding: 20 }}>
              <p className="badge">Betty Real-Estate</p>
              <h3>Capture & qualification de leads + agenda visites</h3>
              <ul>
                <li>Bot site + WhatsApp/E-mail, questions ciblées</li>
                <li>Créneaux synchronisés (Google/Outlook)</li>
                <li>Compte-rendu auto + push CRM</li>
              </ul>
              <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                <Link href="/contact?from=new-home&pkg=betty-re" className="btn">
                  Demander une démo
                </Link>
              </div>
            </article>

            <article className="card" style={{ padding: 20 }}>
              <p className="badge">Invoice Sorter</p>
              <h3>Tri des factures + extraction TVA → Sheets/ERP</h3>
              <ul>
                <li>Lecture Gmail/IMAP, filtres “facture/invoice”</li>
                <li>Extraction montant/TVA/date/émetteur (PDF)</li>
                <li>Déduplication + suivi anomalies</li>
              </ul>
              <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                <Link href="/contact?from=new-home&pkg=invoice-sorter" className="btn">
                  Essai 14 jours
                </Link>
              </div>
            </article>

            <article className="card" style={{ padding: 20 }}>
              <p className="badge">Private RAG</p>
              <h3>Recherche sécurisée sur contrats & procédures</h3>
              <ul>
                <li>Index isolé par client (RGPD)</li>
                <li>Traçabilité des réponses & journaux d’accès</li>
                <li>Multi-LLM (ouverts/souverains)</li>
              </ul>
              <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                <Link href="/contact?from=new-home&pkg=private-rag" className="btn">
                  Voir en action
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="wrap">
          <h2>FAQ courte</h2>

          <div style={{ display: "grid", gap: 12 }}>
            <details className="card" style={{ padding: 16 }}>
              <summary style={{ fontWeight: 700, cursor: "pointer" }}>
                Sur-mesure ou packagé ?
              </summary>
              <p>
                On part d’un agent standard (80 % du besoin) puis on ajuste les 20 % restants.
                Résultat : mise en service en semaines plutôt qu’en trimestres.
              </p>
            </details>

            <details className="card" style={{ padding: 16 }}>
              <summary style={{ fontWeight: 700, cursor: "pointer" }}>
                Où sont hébergées les données ?
              </summary>
              <p>
                Hébergement UE (OVH/Scaleway possibles), chiffrage en transit et au repos,
                index isolés, journaux d’accès et auditabilité.
              </p>
            </details>

            <details className="card" style={{ padding: 16 }}>
              <summary style={{ fontWeight: 700, cursor: "pointer" }}>
                Comment mesurez-vous le ROI ?
              </summary>
              <p>
                On fige des KPI métier (ex. leads qualifiés, temps de traitement, taux de tickets L1)
                et on compare à J+30/J+60.
              </p>
            </details>
          </div>

          <div style={{ marginTop: 16 }}>
            <Link href="/contact?from=new-home#form" className="btn btn-primary">
              Parler à un humain
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
