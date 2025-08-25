import Image from 'next/image'
import Link from 'next/link'

export default function Page(){
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="badge">🚀 Automatisation IA, sans blabla</span>
            <h1 style={{marginTop:16}}>
              Accélérez capture de leads & ops<br/>
              avec <span className="text-rainbow">BettyBot, InnovationPulse</span><br/>
              et outils <span className="text-rainbow">.dmg</span>
            </h1>
            <p style={{marginTop:16,fontSize:18,color:'#555'}}>
              Des agents qui qualifient, une veille IA prédictive actionnable, et des utilitaires macOS qui trient vos factures.
              Rapide à déployer. Mesurable. Rentable.
            </p>
            <div style={{marginTop:16,display:'flex',gap:12,flexWrap:'wrap'}}>
              <Link href="#produits" className="btn btn-primary">Voir les produits</Link>
              <Link href="#contact" className="btn">Nous contacter</Link>
            </div>
            <ul style={{marginTop:16,color:'#555',fontSize:14,lineHeight:1.7}}>
              <li>✅ Mise en place en jours, pas en mois</li>
              <li>📊 KPI clairs : taux de qualif, conversion, temps gagné</li>
              <li>🔒 Respect des données & confidentialité</li>
            </ul>
          </div>
          <div style={{justifySelf:'center'}}>
            <Image src="/icon.png" alt="Spectra Media" width={260} height={260} priority />
          </div>
        </div>
      </section>

      {/* PRODUITS */}
      <section id="produits" className="section">
        <div className="wrap">
          <h2>Nos produits</h2>
          <p style={{color:'#666',marginTop:8,marginBottom:16}}>
            Choisissez le point d’impact le plus direct. Nous intégrons à votre
