'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

/* -------------------------------------------------------
   Remplit les champs cachés (URL courante & userAgent)
--------------------------------------------------------*/
function FormMeta() {
  useEffect(() => {
    const p = document.getElementById('pathField') as HTMLInputElement | null
    const ua = document.getElementById('uaField') as HTMLInputElement | null
    if (p) p.value = location.href
    if (ua) ua.value = navigator.userAgent
  }, [])
  return null
}

/* -------------------------------------------------------
   Mini bulle de chat (appelle /api/bot côté serveur)
--------------------------------------------------------*/
type Msg = { role: 'user' | 'assistant'; content: string }

function BettyBotBubble() {
  const [open, setOpen] = useState(false)
  const [sending, setSending] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: 'assistant',
      content:"Bonjour 👋 Je suis l’Assistant IA de Spectra Media. Dites-moi votre contexte et je vous montre comment nos automatisations (chatbot de qualif, signaux faibles, tri de factures…) vont vous faire gagner du temps et mieux convertir. Que souhaitez-vous améliorer en priorité ?","Bonjour 👋 Je suis BettyBot. Dites-moi votre besoin (qualification de leads, RDV, InnovationPulse, trieur de factures).",
    },
  ])
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: 1e9 })
  }, [msgs, open])

  async function send() {
    const text = input.trim()
    if (!text || sending) return
    setInput('')
    const next = [...msgs, { role: 'user', content: text }]
    setMsgs(next)
    setSending(true)
    try {
      const r = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await r.json()
      const reply =
        (data && data.reply) ||
        "Oups, je n’ai pas pu répondre. Pouvez-vous reformuler ?"
      setMsgs((m) => [...m, { role: 'assistant', content: reply }])
    } catch {
      setMsgs((m) => [
        ...m,
        { role: 'assistant', content: 'Erreur réseau. Réessayez plus tard.' },
      ])
    } finally {
      setSending(false)
    }
  }

  const btn: React.CSSProperties = {
    position: 'fixed',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 999,
    display: 'grid',
    placeItems: 'center',
    background: '#0b0b0b',
    color: '#fff',
    fontSize: 22,
    boxShadow: '0 8px 20px rgba(0,0,0,.25)',
    cursor: 'pointer',
    zIndex: 61,
  }
  const panel: React.CSSProperties = {
    position: 'fixed',
    right: 16,
    bottom: 90,
    width: 'min(380px, 92vw)',
    height: 'min(560px, 75vh)',
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,.22)',
    background: '#fff',
    zIndex: 60,
    display: 'flex',
    flexDirection: 'column',
  }
  const header: React.CSSProperties = {
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 12px',
    borderBottom: '1px solid #eee',
    background: '#fafafa',
  }
  const list: React.CSSProperties = {
    flex: 1,
    padding: 12,
    overflowY: 'auto',
  }
  const bubbleUser: React.CSSProperties = {
    background: '#eef2ff',
    padding: '10px 12px',
    borderRadius: 12,
    margin: '6px 0 6px auto',
    maxWidth: '85%',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  }
  const bubbleBot: React.CSSProperties = {
    background: '#f8fafc',
    padding: '10px 12px',
    borderRadius: 12,
    margin: '6px auto 6px 0',
    maxWidth: '85%',
    border: '1px solid #eef2f7',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  }
  const form: React.CSSProperties = {
    display: 'flex',
    gap: 8,
    padding: 10,
    borderTop: '1px solid #eee',
    background: '#fafafa',
  }
  const inputStyle: React.CSSProperties = {
    flex: 1,
    padding: '10px 12px',
    border: '1px solid #e5e7eb',
    borderRadius: 12,
    font: 'inherit',
  }
  const sendBtn: React.CSSProperties = {
    padding: '10px 14px',
    borderRadius: 12,
    border: '1px solid rgba(0,0,0,.1)',
    background: '#0b0b0b',
    color: '#fff',
    cursor: 'pointer',
  }

  return (
    <>
      {open && (
        <div style={panel} role="dialog" aria-label="Assistant BettyBot">
          <div style={header}>
            <strong>BettyBot</strong>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              style={{ border: 0, background: 'transparent', fontSize: 22, cursor: 'pointer' }}
            >
              ×
            </button>
          </div>
          <div ref={listRef} style={list}>
            {msgs.map((m, i) => (
              <div key={i} style={m.role === 'user' ? bubbleUser : bubbleBot}>
                {m.content}
              </div>
            ))}
          </div>
          <div style={form}>
            <input
              style={inputStyle}
              placeholder="Écrivez votre message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') send()
              }}
            />
            <button onClick={send} disabled={sending} style={sendBtn}>
              {sending ? '…' : 'Envoyer'}
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        style={btn}
        aria-label={open ? 'Fermer le chat' : 'Ouvrir le chat'}
        title="Parler à BettyBot"
      >
        💬
      </button>
    </>
  )
}

/* -------------------------------------------------------
   Page
--------------------------------------------------------*/
export default function Page() {
  return (
    <>
      {/* HERO */}
      <section
        className="section"
        style={{
          padding: '64px 0 32px',
          background:
            'linear-gradient(135deg, rgba(91,140,255,.15) 0%, rgba(168,85,247,.12) 50%, rgba(255,107,107,.10) 100%)',
        }}
      >
        <div
          className="wrap"
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: '0 16px',
            display: 'grid',
            gridTemplateColumns: '1.2fr .8fr',
            gap: 24,
            alignItems: 'center',
          }}
        >
          <div>
            <span
              className="badge"
              style={{
                display: 'inline-block',
                fontSize: 12,
                background: '#0b0b0b',
                color: '#fff',
                padding: '6px 10px',
                borderRadius: 999,
              }}
            >
              🚀 Automatisation IA, sans blabla
            </span>

            <h1 style={{ marginTop: 16, lineHeight: 1.15 }}>
              Accélérez capture de leads & ops
              <br />
              avec <span style={{ background: 'linear-gradient(90deg,#2563eb,#22c55e,#f59e0b,#ef4444)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>BettyBot, InnovationPulse</span>
              <br />
              et outils <span style={{ background: 'linear-gradient(90deg,#2563eb,#22c55e,#f59e0b,#ef4444)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>.dmg</span>
            </h1>

            <p style={{ marginTop: 16, fontSize: 18, color: '#555' }}>
              Des agents qui qualifient, une veille IA prédictive actionnable, et des utilitaires macOS qui trient vos
              factures. Rapide à déployer. Mesurable. Rentable.
            </p>

            <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="#produits">Voir les produits</a>
              <a className="btn" href="#contact">Nous contacter</a>
              <a className="btn" href="https://bettybotdelph.onrender.com/" target="_blank" rel="noopener noreferrer">Lancer BettyBot ↗</a>
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
      <section id="produits" className="section" style={{ padding: '56px 0' }}>
        <div className="wrap" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 16px' }}>
          <h2>Nos produits</h2>
          <p style={{ color: '#666', marginTop: 8, marginBottom: 16 }}>
            Choisissez le point d’impact le plus direct. Nous intégrons à votre stack existante.
          </p>

          <div
            className="grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
            }}
          >
            {/* BettyBot */}
            <div className="card" style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 10px 24px rgba(0,0,0,.06)' }}>
              <span className="badge" style={{ display: 'inline-block', fontSize: 12, padding: '6px 10px', borderRadius: 999, background: '#0b0b0b', color: '#fff', marginBottom: 12 }}>
                CHATBOT QUALIF
              </span>
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
                <a className="btn btn-primary" href="https://bettybotdelph.onrender.com/" target="_blank" rel="noopener noreferrer">Essayer BettyBot ↗</a>
                <Link className="btn" href="/blog/automatiser-qualification-leads-chatbot">Guide d’intégration →</Link>
              </div>
            </div>

            {/* InnovationPulse */}
            <div className="card" style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 10px 24px rgba(0,0,0,.06)' }}>
              <span className="badge" style={{ display: 'inline-block', fontSize: 12, padding: '6px 10px', borderRadius: 999, background: '#0b0b0b', color: '#fff', marginBottom: 12 }}>
                VEILLE IA PRÉDICTIVE
              </span>
              <h3>InnovationPulse — signaux faibles utilisables</h3>
              <p style={{ color: '#444' }}>
                Détecte tendances par grappes → idées testables (MVP, hooks, contenus) → moves concrets.
              </p>
              <ul style={{ marginTop: 8, color: '#555', fontSize: 14, lineHeight: 1.7 }}>
                <li>Détection par grappes</li>
                <li>Idées prêtes à tester</li>
                <li>Remontées hebdo + alertes</li>
              </ul>
              <a className="btn btn-primary" style={{ marginTop: 12 }} href="https://spectramedia.gumroad.com/l/InnovationPulse" target="_blank" rel="noopener noreferrer">
                InnovationPulse sur Gumroad ↗
              </a>
            </div>

            {/* Trieur de factures */}
            <div className="card" style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 10px 24px rgba(0,0,0,.06)' }}>
              <span className="badge" style={{ display: 'inline-block', fontSize: 12, padding: '6px 10px', borderRadius: 999, background: '#0b0b0b', color: '#fff', marginBottom: 12 }}>
                UTILITAIRE MACOS
              </span>
              <h3>Trieur de factures — .dmg local-first</h3>
              <p style={{ color: '#444' }}>
                Récupère Gmail + PDF, extrait TTC/TVA/dates, dédoublonne et remplit Google Sheets.
              </p>
              <ul style={{ marginTop: 8, color: '#555', fontSize: 14, lineHeight: 1.7 }}>
                <li>Récupération Gmail + PDF</li>
                <li>Extraction champs clés</li>
                <li>
                  Export vers Google Sheets —{' '}
                  <a
                    href="https://docs.google.com/spreadsheets/d/14dTsi1N09Li7kzqXPFILeoEYMtIsKiVZHdpZikY9DbA/edit?gid=0#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    voir modèle ↗
                  </a>
                </li>
              </ul>
              <Link className="btn" style={{ marginTop: 12 }} href="/blog/specs-trieur-factures-macos">
                Specs techniques →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT — envoi direct vers Google Sheets (Apps Script) */}
      <section id="contact" className="section" style={{ padding: '56px 0' }}>
        <div className="wrap" style={{ maxWidth: 820, margin: '0 auto', padding: '0 16px' }}>
          <h2>Nous contacter</h2>
          <p style={{ color: '#666', margin: '8px 0 16px' }}>
            Expliquez l’objectif et on vous propose le setup le plus court vers la valeur.
          </p>

          <form
            className="card form"
            action="https://script.google.com/macros/s/AKfycbynkOfaP-YwcpOtFE-Cjllhfpcde6_7_xFACht31SEW7RpZytSFWgxIyM2CH9YpIlGzwA/exec"
            method="POST"
            style={{ background: '#fff', borderRadius: 16, padding: 16, boxShadow: '0 10px 24px rgba(0,0,0,.06)', display: 'grid', gap: 10 }}
          >
            <input name="email" type="email" placeholder="Email" style={inputBase} required />
            <input name="phone" type="tel" placeholder="Téléphone (requis)" style={inputBase} required />
            <input name="nom" placeholder="Nom / Entreprise" style={inputBase} />
            {/* La feuille a la colonne “objet de la demande” → on peut envoyer soit ce nom exact, soit "objet" */}
            <input name="objet de la demande" placeholder="Objet" style={inputBase} />
            <textarea name="message" placeholder="Message" style={{ ...inputBase, minHeight: 120 }} />

            <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#333' }}>
              <input type="checkbox" name="ok_to_call" defaultChecked /> OK pour un contact téléphonique
            </label>

            {/* Meta + redirect */}
            <input type="hidden" id="pathField" name="path" value="" />
            <input type="hidden" id="uaField" name="ua" value="" />
            <input type="hidden" name="redirect" value="https://spectramedia.online/merci" />

            <button className="btn btn-primary" style={{ width: 'fit-content', marginTop: 8 }}>
              Envoyer
            </button>
          </form>

          <FormMeta />
        </div>
      </section>

      {/* Bulle de chat */}
      <BettyBotBubble />
    </>
  )
}

/* -------------------------------------------------------
   Styles de base réutilisés
--------------------------------------------------------*/
const inputBase: React.CSSProperties = {
  width: '100%',
  border: '1px solid #e5e7eb',
  borderRadius: 12,
  padding: '12px 14px',
  font: 'inherit',
  outline: 'none',
}
