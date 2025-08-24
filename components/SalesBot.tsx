'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Msg = { id: string; role: 'bot' | 'user'; text: string };
type Step = 0 | 1 | 2 | 3 | 'done';

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwv68x_ZdlBoibZVJBxb5vS9Y58nAPXOpSjo37PBl5vnZo0J74dIgGJ6JqmASrXSEWbHA/exec';

const EXAMPLES = [
  '🎯 **Qualification de leads B2B** sur le site (score + push Sheets/CRM).',
  '🛍️ **SAV e-commerce** (retours, statuts, remboursements).',
  '📅 **Prise de RDV commercial** + scoring + Calendly.',
  '👤 **Onboarding SaaS** (activation des features & tips in-app).',
  '📥 **Traitement factures** (PDF → extraction → dédoublonnage → Sheets).',
  '🧑‍💼 **Concierge RH interne** (FAQ, congés, notes de frais).',
  '📣 **Assistant marketing** (idées contenus, hooks, A/B headlines).',
  '📲 **Bot WhatsApp** pour commandes/réservations locales.',
  '🧲 **Capture leads en salon** via QR + conversation + export.',
  '🧪 **Qualification candidats** (questions, planning, résumé pour RH).',
];

const BENEFITS =
  '⏱️ **gains** : 30–70% de temps sur tâches répétitives • 📈 **+15–35%** de conversion sur la capture • 🧰 **intégrations** : Site, WhatsApp, Email, Calendly, Google Sheets/Docs, Slack, Zapier/webhooks • 🔒 **data** : local-first quand possible, journaux sobres, opt-out.';

const PROCESS =
  '🔧 **Process** : 1) Atelier 45 min pour objectifs & données • 2) POC en **3–5 jours** avec 3 KPIs • 3) Go-live • 4) Mesure & itérations.';

function suggestReplies(step: Step) {
  if (step === 0) return ['Montre des exemples', 'Quels gains ?', 'Quelles intégrations ?'];
  if (step === 1) return ['Processus ?', 'Délai ?', 'Tarif indicatif ?'];
  return ['Voir 10 exemples', 'Gains de temps', 'Prendre RDV'];
}

function score(text: string, keys: string[]) {
  const t = text.toLowerCase();
  return keys.reduce((s, k) => (t.includes(k) ? s + 1 : s), 0);
}

export default function SalesBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { id: 'm0', role: 'bot', text: 'Salut 👋 Je suis **Spectra Assistant**. Tu veux des exemples, des gains, ou des intégrations ?' },
  ]);
  const [step, setStep] = useState<Step>(0);
  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');
  const [besoin, setBesoin] = useState('');
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo({ top: 99_999, behavior: 'smooth' }); }, [messages, open]);

  async function submitLead() {
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams({ email, nom, objet: besoin, source: 'sales-bot' }).toString(),
      });
    } catch { /* no-cors: pas de réponse */ }
  }

  function reply(text: string) {
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: 'bot', text }]);
  }

  function handleKnowledge(q: string) {
    const ql = q.toLowerCase();
    if (score(ql, ['exemple', 'exemples', 'idée', 'ideas', 'use case']) > 0) {
      reply('Voici **10 exemples** fréquemment demandés :\n\n' + EXAMPLES.map((e) => `• ${e}`).join('\n'));
      return true;
    }
    if (score(ql, ['gain', 'temps', 'roi', 'conversion', 'rentab']) > 0) {
      reply(BENEFITS);
      return true;
    }
    if (score(ql, ['intégr', 'integration', 'channel', 'whatsapp', 'site', 'slack', 'sheets', 'calendly', 'zapier']) > 0) {
      reply('📡 **Intégrations & canaux** : Site (widget), WhatsApp, Email, Slack, Google Sheets/Docs, Calendly, Zapier / webhooks, Notion, CRM via CSV/API.');
      return true;
    }
    if (score(ql, ['process', 'déroulement', 'comment', 'delai', 'délai', 'jour']) > 0) {
      reply(PROCESS);
      return true;
    }
    if (score(ql, ['tarif', 'prix', 'budget', 'coût']) > 0) {
      reply('💶 **Budget indicatif** : POC simple **1–3 k€**, bot avancé **3–8 k€** puis MCO léger. On chiffre précisément après l’atelier (45 min).');
      return true;
    }
    return false;
  }

  async function onSend(e?: React.FormEvent) {
    e?.preventDefault();
    const value = input.trim();
    if (!value) return;

    setMessages((m) => [...m, { id: crypto.randomUUID(), role: 'user', text: value }]);
    setInput('');

    if (handleKnowledge(value)) return;

    if (step === 0) {
      setBesoin(value);
      reply('Top. Ton **email** pour t’envoyer un récap ?');
      setStep(1);
      return;
    }
    if (step === 1) {
      setEmail(value);
      reply('Merci. Et ton **nom / entreprise** ?');
      setStep(2);
      return;
    }
    if (step === 2) {
      setNom(value);
      setStep('done');
      await submitLead();
      reply("Parfait ✅ J’ai tout noté et envoyé dans notre pipeline. Tu peux aussi réserver ici : https://calendly.com (on cale 20 min).");
      return;
    }

    reply("Je peux détailler **exemples**, **gains**, **intégrations** ou le **process**. Dis-moi ce que tu veux voir 👇");
  }

  const chips = useMemo(() => suggestReplies(step), [step]);

  function clickChip(t: string) {
    setInput(t);
    void onSend();
  }

  return (
    <>
      <button className="chat-fab" aria-label="Ouvrir le chat" onClick={() => setOpen((v) => !v)}>💬</button>

      {open && (
        <div className="chat-window" role="dialog" aria-label="Spectra Assistant">
          <div className="chat-header">
            <div className="chat-title">Spectra Assistant</div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Fermer">×</button>
          </div>

          <div className="chat-body" ref={scrollRef}>
            {messages.map((m) => (
              <div key={m.id} className={`chat-msg ${m.role}`}>
                <div className="bubble" dangerouslySetInnerHTML={{ __html: m.text }} />
              </div>
            ))}
            <div className="chips">
              {chips.map((c) => (
                <button key={c} className="chip" onClick={() => clickChip(c)}>{c}</button>
              ))}
            </div>
          </div>

          {step !== 'done' && (
            <form className="chat-input" onSubmit={onSend}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  step === 0 ? 'Décris ton besoin (canal, objectif)…'
                  : step === 1 ? 'votre@email.com'
                  : 'Prénom Nom / Entreprise'
                }
                inputMode={step === 1 ? 'email' : 'text'}
                required
              />
              <button type="submit">Envoyer</button>
            </form>
          )}
        </div>
      )}
    </>
  );
}

