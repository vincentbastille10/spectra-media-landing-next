// app/api/bot/route.ts
export const runtime = 'edge' // ✅ Edge-compatible (pas de SDK Node)

const SYSTEM_PROMPT = `
Tu es l’Assistant IA de Spectra Media.
Objectif : expliquer calmement comment nos automatisations (chatbot de qualification + RDV, routage leads vers Slack/CRM, résumés d’emails/appels, InnovationPulse pour signaux faibles, relances auto personnalisées, scraping léger + enrichissement, tri de factures → Google Sheets, alertes churn/upsell, génération de contenus à partir d’un brief) font gagner du temps et qualifient mieux les leads.
Règles :
- Français, pro, chaleureux, concret, phrases courtes.
- Pose 2–3 questions pour qualifier (persona, volume, outils, délai).
- Conclus par un CTA : Essayer BettyBot (démo), InnovationPulse (Gumroad) ou formulaire de contact.
- N’invente pas de prix.
`;

const MODEL = 'gpt-4o-mini';

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Missing OPENAI_API_KEY' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: any = {};
  try { body = await req.json(); } catch {}

  const history = Array.isArray(body?.messages) ? body.messages : [];
  const recent = history.slice(-12).map((m: any) => ({
    role: m.role === 'assistant' ? 'assistant' : 'user',
    content: String(m.content ?? ''),
  }));

  const payload = {
    model: MODEL,
    temperature: 0.6,
    messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...recent],
  };

  const r = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Co
