'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Role = 'bot' | 'user';
type Msg = { id: string; role: Role; text: string };
type Step = 'idle' | 'asking_email' | 'asking_name' | 'done';

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwv68x_ZdlBoibZVJBxb5vS9Y58nAPXOpSjo37PBl5vnZo0J74dIgGJ6JqmASrXSEWbHA/exec';

const WARM_OPENING =
  "Salut 👋 Je suis **Spectra Assistant**. On conçoit des **agents conversationnels** (site, WhatsApp, email) qui font gagner du temps et convertissent mieux. Dis-moi **ce que tu veux automatiser** et je te propose 2–3 pistes concrètes (intégrations possibles : Sheets, Calendly, Slack, WhatsApp, Zapier).";

const START_CHIPS = ['Idées de bots', 'Gains de temps', 'Intégrations possibles'];

function mdLite(s: string) {
  // mini-markdown : **gras**, sauts de ligne
  return s
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>');
}

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());
}

export default function SalesBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ id: 'm0', role: 'bot', text: WARM_OPENING }]);
  const [step, setStep] = useState<Step>('idle');
  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');
  const [besoin, setBesoin] = useState(''); // premier vrai besoin exprimé
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [exchanges, setExchanges] = useState(0); // nb d’échanges utiles
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 999999, behavior: 'smooth' });
  }, [messages, open, loading]);

  function push(role: Role, text: string) {
    setMessages((m) => [...m, { id: crypto.randomUUID(), role, text }]);
  }

  async function askLLM(userText: string) {
    setLoading(true);
    try {
      const history = messages.map((m) => ({
        role: m.role === 'bot' ? 'assistant' : 'user',
        content: m.text,
      }));
      history.push({ role: 'user', content: userText });

      const res = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history }),
      });

      if (!res.ok) throw new Error('LLM error');
      const data = await res.json();
      const answer: string =
        data?.reply ||
        "Je peux te donner des **idées concrètes** si tu précises le contexte (canal, volume, objectif).";
      push('bot', answer);
    } catch {
      push(
        'bot',
        "Petit souci de connexion à mon moteur IA. En attendant, tu veux que je te liste **10 exemples** de bots utiles + une **estimation de gains** ?"
      );
    } finally {
      setLoading(false);
    }
  }

  async function submitLead() {
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams({
          email,
          nom,
          objet: besoin || 'Intérêt bots/automatisation',
          source: 'sales-bot-llm',
        }).toString(),
      });
    } catch {
      /* no-cors : pas de retour */
    }
  }

  async function onSend(e?: React.FormEvent) {
    e?.preventDefault();
    const value = input.trim();
    if (!value) return;

    // Affiche l’utilisateur (toujours en texte brut)
    push('user', value);
    setInput('');

    // Si on est en capture email
    if (step === 'asking_email') {
      if (isEmail(value)) {
        setEmail(value);
        push('bot', "Merci 🙏 Et ton **nom / entreprise** ?");
        setStep('asking_name');
      } else {
        push('bot', "Je n’ai pas reconnu l’email. Tu peux me donner un format du style **prenom@domaine.com** ?");
      }
      return;
    }

    // Si on est en capture nom
    if (step === 'asking_name') {
      setNom(value);
      setStep('done');
      await submitLead();
      push(
        'bot',
        "Parfait ✅ J’ai noté. Je t’envoie un récap par email. Si tu veux, on cale **20 min** ici : https://calendly.com"
      );
      return;
    }

    // Conversation “valeur d’abord”
    if (!besoin && value.length > 2 && !isEmail(value)) {
      setBesoin(value); // capture le premier vrai besoin
    }

    await askLLM(value);
    setExchanges((n) => n + 1);

    // Après 2 échanges, proposer (doucement) de prendre l’email — sans bloquer la conversation
    if (exchanges + 1 >= 2 && step === 'idle' && !email) {
      push(
        'bot',
        "Je peux t’envoyer un **récap** + 2–3 prochaines étapes par email. Tu me donnes ton **adresse** ? (promis, zéro spam)"
      );
      setStep('asking_email');
    }
  }

  const chips = useMemo(() => {
    if (step === 'idle') return START_CHIPS;
    if (step === 'asking_email') return ['Pourquoi un email ?', 'Exemples sectoriels', 'Intégrations'];
    return ['Roadmap 2 semaines', 'Canaux (Site/WhatsApp/Email)', 'Tarif indicatif'];
  }, [step]);

  async function clickChip(t: string) {
    setInput(t);
    await onSend();
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        className="chat-fab"
        aria-label="Ouvrir le chat"
        onClick={() => setOpen((v) => !v)}
        title="Parler à Spectra Assistant"
      >
        💬
      </button>

      {/* Fenêtre */}
      {open && (
        <div className="chat-window" role="dialog" aria-label="Spectra Assistant">
          <div className="chat-header">
            <div className="chat-title">Spectra Assistant</div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Fermer">
              ×
            </button>
          </div>

          <div className="chat-body" ref={scrollRef}>
            {messages.map((m) => (
              <div key={m.id} className={`chat-msg ${m.role}`}>
                {m.role === 'bot' ? (
                  <div
                    className="bubble"
                    dangerouslySetInnerHTML={{ __html: mdLite(m.text) }}
                  />
                ) : (
                  <div className="bubble" style={{ whiteSpace: 'pre-wrap' }}>
                    {m.text}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="chat-msg bot">
                <div className="bubble">…</div>
              </div>
            )}

            <div className="chips">
              {chips.map((c) => (
                <button key={c} className="chip" onClick={() => void clickChip(c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Saisie */}
          <form className="chat-input" onSubmit={onSend}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                step === 'asking_email'
                  ? 'prenom@domaine.com'
                  : step === 'asking_name'
                  ? 'Prénom Nom / Entreprise'
                  : 'Pose une question ou décris ton besoin…'
              }
              inputMode={step === 'asking_email' ? 'email' : 'text'}
              required
            />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      )}
    </>
  );
}
