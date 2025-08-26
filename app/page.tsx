'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type Msg = { role: 'user' | 'assistant'; content: string }

const APPSCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbynkOfaP-YwcpOtFE-Cjllhfpcde6_7_xFACht31SEW7RpZytSFWgxIyM2CH9YpIlGzwA/exec'

export default function HomePage() {
  // ------------------- Chat assistant -------------------
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: 'assistant',
      content:
        "Bonjour 👋 Je suis l’Assistant IA de Spectra Media. Dites-moi votre contexte et je vous montre comment nos automatisations (chatbot de qualif + RDV, InnovationPulse, tri de factures…) vont vous faire gagner du temps et mieux convertir. Qu’est-ce qu’on améliore en priorité ?",
    },
  ])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs.length])

  async function send() {
    const text = input.trim()
    if (!text || sending) return
    setInput('')
    const next = [...msgs, { role: 'user' as const, content: text }]
    setMsgs(next)
    setSending(true)
    try {
      const r = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await r.json().catch(() => ({}))
      const reply = (data?.reply as string) || "Merci, j'ai noté."
      setMsgs((m) => [...m, { role: 'assistant', content: reply }])
    } catch {
      setMsgs((m) => [
        ...m,
        { role: 'assistant', content: 'Petit souci réseau, pouvez-vous réessayer ?' },
      ])
    } finally {
      setSending(false)
    }
  }

  // ------------------- Formulaire → Google Sheets -------------------
  const [form, setForm] = useState({ email: '', nom: '', objet: '', tel: '' })
  const [sent, setSent] = useState<string | null>(null)

  async function submitLead(e: React.FormEvent) {
    e.preventDefault()
    setSent(null)

    const fd = new FormData()
    // Nom de colonnes de ta Sheet : email, nom, objet de la demande, tel
    fd.append('email', form.email)
    fd.append('nom', form.nom)
    fd.append('objet de la demande', form.objet)
    fd.append('tel', form.tel)

    try {
      await fetch(APPSCRIPT_URL, { method: 'POST', body: fd, mode: 'no-cors' as RequestMode })
      setSent('Merci ! Nous revenons vite vers vous.')
      setForm({ email: '', nom: '', objet: '', tel: '' })
    } catch {
      setSent("Oups, envoi impossible. Écrivez-nous à contact@spectramedia.online.")
    }
  }

  return (
    <main>
      {/* HERO */}
      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <div className="badge" style={{ marginBottom: 8 }}>🚀 Automatisation IA, sans blabla</div>
            <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: '8px 0 12px' }}>
              Accélérez capture de leads & ops
              <br />
              avec <strong>BettyBot</strong>, <strong>InnovationPulse</strong>
              <br />
              & utilitaires <strong>.dmg</strong>
            </h1>
            <p style={{ maxWidth: 560, marginBottom: 16 }}>
              Des agents qui qualifient, une veille IA prédictive actionnable, et des utilitaires
              macOS qui trient vos factures. Rapide à déployer. Mesurable. Rentable.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="https://spectramedia.gumroad.com/l/InnovationPulse"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                InnovationPulse
              </a>
              <a
                href="https://bettybotdelph.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Essayer BettyBot
              </a>
              <Link href="#contact" className="btn">
                Nous contacter
              </Link>
            </div>
            <ul style={{ marginTop: 12 }}>
              <li>✅ Mise en place en jours, pas en mois</li>
              <li>📊 KPI clairs : taux de qualif, conversion, temps gagné</li>
              <li>🔒 Respect des données & confidentialité</li>
            </ul>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/icon.png"
              alt="Spectra Media"
              width={224}
              height={224}
              priority
              className="hero-logo"
            />
          </div>
        </div>
      </section>

      {/* BOT */}
      <section className="section" id="assistant">
        <div className="wrap">
          <h2 style={{ marginBottom: 12 }}>Assistant IA — Spectra Media</h2>
          <div className="card" style={{ padding: 12, maxWidth: 680 }}>
            <div
              ref={listRef}
              className="chat-list"
            >
              {msgs.map((m, i) => (
                <div
                  key={i}
                  className={`chat-bubble ${m.role === 'user' ? 'user' : 'assistant'}`}
                >
                  {m.content}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Posez votre question…"
                style={{ flex: 1, padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd' }}
              />
              <button className="btn btn-primary" disabled={sending} onClick={send}>
                {sending ? '…' : 'Envoyer'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="wrap" style={{ maxWidth: 680 }}>
          <h2>Nous contacter</h2>
          <p>Expliquez l’objectif et on vous propose le setup le plus court vers la valeur.</p>

          <form onSubmit={submitLead} style={{ display: 'grid', gap: 10 }}>
            <label>
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>

            <label>
              Nom
              <input
                required
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
              />
            </label>

            <label>
              Téléphone (optionnel)
              <input
                value={form.tel}
                onChange={(e) => setForm({ ...form, tel: e.target.value })}
              />
            </label>

            <label>
              Objet de la demande
              <input
                required
                value={form.objet}
                onChange={(e) => setForm({ ...form, objet: e.target.value })}
                placeholder="Ex : qualif de leads pour site SaaS"
              />
            </label>

            <button className="btn btn-primary" type="submit">
              Envoyer
            </button>
            {sent && <div style={{ marginTop: 6 }}>{sent}</div>}
          </form>
        </div>
      </section>
    </main>
  )
}
