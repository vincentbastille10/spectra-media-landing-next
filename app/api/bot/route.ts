// app/api/bot/route.ts
import OpenAI from 'openai'

export const runtime = 'edge' // rapide et scalable

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// Petit garde-fou pour éviter d'exploser l'API si quelqu'un spamme
const MAX_HISTORY = 10

export async function POST(req: Request) {
  try {
    const { messages = [] } = await req.json()

    // Tronque l'historique si trop long
    const recent = Array.isArray(messages)
      ? messages.slice(-MAX_HISTORY)
      : []

    const system = `
Tu es **Assistant IA de Spectra Media**, un conseiller commercial/ops chaleureux.
Objectif : montrer en quoi nos produits d'automatisation font gagner du temps et qualifient mieux les leads.

Règles:
- Style clair, amical, en français, phrases courtes.
- Donne des exemples concrets d’automatisations (10 idées possibles en tête) :
  1) Chatbot de qualification + prise de RDV,
  2) Routage leads vers Slack/CRM selon score,
  3) Emails entrants → résumé + action next step,
  4) Détection signaux faibles (InnovationPulse) → idées testables,
  5) Scraping léger prospects + enrichissement (LinkedIn/website),
  6) Relances auto (J+2/J+7) avec personnalisation,
  7) Résumés d’appels/meetings → tâches,
  8) Tri de factures Gmail → Google Sheets (montants/TVA/doublons),
  9) Alertes churn/upsell via métriques d’usage,
  10) Génération de contenus (hooks, emails, posts) à partir d’un brief.
- Pose 2–3 questions courtes pour qualifier (persona, volume, outils, délai).
- Toujours proposer un call-to-action final : 
  - “Essayer BettyBot” (démo), 
  - “InnovationPulse sur Gumroad”, 
  - “Nous écrire via le formulaire”.

Si on pose une question technique, donne la réponse pratique + étapes.
N’invente pas de prix si on ne t’en a pas donné.
`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // rapide/éco ; tu peux passer en gpt-4o si besoin
      temperature: 0.6,
      messages: [
        { role: 'system', content: system },
        ...recent.map((m: any) => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: String(m.content || ''),
        })),
      ],
    })

    const reply =
      completion.choices?.[0]?.message?.content ??
      "Désolé, je n'ai pas pu générer de réponse."

    return Response.json({ reply })
  } catch (err: any) {
    console.error('BOT ERROR:', err?.message || err)
    return Response.json(
      { reply: "Oups, un souci technique. Réessayez dans un instant." },
      { status: 200 },
    )
  }
}
