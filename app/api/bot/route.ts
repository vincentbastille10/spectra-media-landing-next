// app/api/bot/route.ts
export const runtime = 'edge';

type ChatMsg = { role: 'system' | 'user' | 'assistant'; content: string };

const SYSTEM_PROMPT: ChatMsg = {
  role: 'system',
  content:
    "Tu es Spectra Assistant — conseiller chaleureux, subtil, et orienté valeur. " +
    "Tu vends des agents/conversational bots personnalisés (site, WhatsApp, email) pour PME/ETI. " +
    "Style: clair, empathique, sans jargon inutile. " +
    "Toujours: 1) reformule brièvement le contexte, 2) propose 2–3 options concrètes (intégrations: Sheets, Calendly, Slack, WhatsApp, Zapier), " +
    "3) suggère un next-step léger (ex: petit POC, call 20 min). " +
    "Donne parfois des exemples sectoriels (SaaS, e-commerce, services pro, industrie). " +
    "Ne promets jamais de miracles; propose des KPI simples (temps gagné, % conversion, délai traitement).",
};

function providerChoice() {
  if (process.env.LLM_PROVIDER) return process.env.LLM_PROVIDER;
  if (process.env.TOGETHER_API_KEY) return 'together';
  if (process.env.OPENAI_API_KEY) return 'openai';
  return 'none';
}

export async function POST(req: Request) {
  try {
    const { history } = (await req.json()) as { history: ChatMsg[] };
    const messages: ChatMsg[] = [SYSTEM_PROMPT, ...(history || [])];

    const provider = providerChoice();

    if (provider === 'together') {
      const model = process.env.LLM_MODEL || 'meta-llama/Meta-Llama-3.1-8B-Instruct';
      const r = await fetch('https://api.together.xyz/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.6,
          max_tokens: 700,
        }),
      });
      if (!r.ok) {
        const t = await r.text();
        return new Response(JSON.stringify({ reply: `Erreur LLM: ${t}` }), { status: 500 });
      }
      const j = await r.json();
      const reply = j?.choices?.[0]?.message?.content ?? 'Je peux détailler des options concrètes si tu précises le contexte.';
      return Response.json({ reply });
    }

    if (provider === 'openai') {
      const model = process.env.LLM_MODEL || 'gpt-4o-mini';
      const r = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.6,
          max_tokens: 700,
        }),
      });
      if (!r.ok) {
        const t = await r.text();
        return new Response(JSON.stringify({ reply: `Erreur LLM: ${t}` }), { status: 500 });
      }
      const j = await r.json();
      const reply = j?.choices?.[0]?.message?.content ?? 'Je peux détailler des options concrètes si tu précises le contexte.';
      return Response.json({ reply });
    }

    // Aucun provider configuré
    return Response.json({
      reply:
        "Note: aucun fournisseur LLM n'est configuré (TOGETHER_API_KEY / OPENAI_API_KEY). " +
        "Je peux quand même te donner des idées et un plan en statique.",
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ reply: `Erreur: ${e?.message || 'inconnue'}` }), {
      status: 500,
    });
  }
}
