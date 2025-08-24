{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww17280\viewh13180\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs36 \cf0 // components/SalesBot.tsx\
'use client';\
\
import \{ useEffect, useMemo, useRef, useState \} from 'react';\
\
type Msg = \{ id: string; role: 'bot' | 'user'; text: string \};\
type Step = 0 | 1 | 2 | 3 | 'done';\
\
const APPS_SCRIPT_URL =\
  'https://script.google.com/macros/s/AKfycbwv68x_ZdlBoibZVJBxb5vS9Y58nAPXOpSjo37PBl5vnZo0J74dIgGJ6JqmASrXSEWbHA/exec';\
\
const EXAMPLES = [\
  '\uc0\u55356 \u57263  **Qualification de leads B2B** sur le site (score + push Sheets/CRM).',\
  '\uc0\u55357 \u57037 \u65039  **SAV e-commerce** (retours, statuts, remboursements).',\
  '\uc0\u55357 \u56517  **Prise de RDV commercial** + scoring + Calendly.',\
  '\uc0\u55357 \u56420  **Onboarding SaaS** (activation des features & tips in-app).',\
  '\uc0\u55357 \u56549  **Traitement factures** (PDF \u8594  extraction \u8594  d\'e9doublonnage \u8594  Sheets).',\
  '\uc0\u55358 \u56785 \u8205 \u55357 \u56508  **Concierge RH interne** (FAQ, cong\'e9s, notes de frais).',\
  '\uc0\u55357 \u56547  **Assistant marketing** (id\'e9es contenus, hooks, A/B headlines).',\
  '\uc0\u55357 \u56562  **Bot WhatsApp** pour commandes/r\'e9servations locales.',\
  '\uc0\u55358 \u56818  **Capture leads en salon** via QR + conversation + export.',\
  '\uc0\u55358 \u56810  **Qualification candidats** (questions, planning, r\'e9sum\'e9 pour RH).',\
];\
\
const BENEFITS =\
  '\uc0\u9201 \u65039  **gains** : 30\'9670% de temps sur t\'e2ches r\'e9p\'e9titives \'95 \u55357 \u56520  **+15\'9635%** de conversion sur la capture \'95 \u55358 \u56816  **int\'e9grations** : Site, WhatsApp, Email, Calendly, Google Sheets/Docs, Slack, Zapier/webhooks \'95 \u55357 \u56594  **data** : local-first quand possible, journaux sobres, opt-out.';\
\
const PROCESS =\
  '\uc0\u55357 \u56615  **Process** : 1) Atelier 45 min pour objectifs & donn\'e9es \'95 2) POC en **3\'965 jours** avec 3 KPIs \'95 3) Go-live \'95 4) Mesure & it\'e9rations.';\
\
function suggestReplies(step: Step) \{\
  if (step === 0) return ['Montre des exemples', 'Quels gains ?', 'Quelles int\'e9grations ?'];\
  if (step === 1) return ['Processus ?', 'D\'e9lai ?', 'Tarif indicatif ?'];\
  return ['Voir 10 exemples', 'Gains de temps', 'Prendre RDV'];\
\}\
\
function score(text: string, keys: string[]) \{\
  const t = text.toLowerCase();\
  return keys.reduce((s, k) => (t.includes(k) ? s + 1 : s), 0);\
\}\
\
export default function SalesBot() \{\
  const [open, setOpen] = useState(false);\
  const [messages, setMessages] = useState<Msg[]>([\
    \{ id: 'm0', role: 'bot', text: 'Salut \uc0\u55357 \u56395  Je suis **Spectra Assistant**. Tu veux des exemples, des gains, ou des int\'e9grations ?' \},\
  ]);\
  const [step, setStep] = useState<Step>(0);\
  const [email, setEmail] = useState('');\
  const [nom, setNom] = useState('');\
  const [besoin, setBesoin] = useState('');\
  const [input, setInput] = useState('');\
  const scrollRef = useRef<HTMLDivElement>(null);\
\
  useEffect(() => \{ scrollRef.current?.scrollTo(\{ top: 99_999, behavior: 'smooth' \}); \}, [messages, open]);\
\
  async function submitLead() \{\
    try \{\
      await fetch(APPS_SCRIPT_URL, \{\
        method: 'POST',\
        mode: 'no-cors',\
        headers: \{ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' \},\
        body: new URLSearchParams(\{\
          email, nom, objet: besoin, source: 'sales-bot',\
        \}).toString(),\
      \});\
    \} catch \{ /* no-cors: pas de r\'e9ponse */ \}\
  \}\
\
  function reply(text: string) \{\
    setMessages((m) => [...m, \{ id: crypto.randomUUID(), role: 'bot', text \}]);\
  \}\
\
  function handleKnowledge(q: string) \{\
    const ql = q.toLowerCase();\
\
    if (score(ql, ['exemple', 'exemples', 'id\'e9e', 'ideas', 'use case']) > 0) \{\
      reply('Voici **10 exemples** fr\'e9quemment demand\'e9s :\\n\\n' + EXAMPLES.map((e) => `\'95 $\{e\}`).join('\\n'));\
      return true;\
    \}\
    if (score(ql, ['gain', 'temps', 'roi', 'conversion', 'rentab']) > 0) \{\
      reply(BENEFITS);\
      return true;\
    \}\
    if (score(ql, ['int\'e9gr', 'integration', 'channel', 'whatsapp', 'site', 'slack', 'sheets', 'calendly', 'zapier']) > 0) \{\
      reply('\uc0\u55357 \u56545  **Int\'e9grations & canaux** : Site (widget), WhatsApp, Email, Slack, Google Sheets/Docs, Calendly, Zapier / webhooks, Notion, CRM via CSV/API.');\
      return true;\
    \}\
    if (score(ql, ['process', 'd\'e9roulement', 'comment', 'delai', 'd\'e9lai', 'jour']) > 0) \{\
      reply(PROCESS);\
      return true;\
    \}\
    if (score(ql, ['tarif', 'prix', 'budget', 'co\'fbt']) > 0) \{\
      reply('\uc0\u55357 \u56502  **Budget indicatif** : POC simple **1\'963 k\'80**, bot avanc\'e9 **3\'968 k\'80** puis MCO l\'e9ger. On chiffre pr\'e9cis\'e9ment apr\'e8s l\'92atelier (45 min).');\
      return true;\
    \}\
    return false;\
  \}\
\
  async function onSend(e?: React.FormEvent) \{\
    e?.preventDefault();\
    const value = input.trim();\
    if (!value) return;\
\
    setMessages((m) => [...m, \{ id: crypto.randomUUID(), role: 'user', text: value \}]);\
    setInput('');\
\
    // Connaissance g\'e9n\'e9rale (r\'e9pond toujours en priorit\'e9)\
    if (handleKnowledge(value)) return;\
\
    // Flow de qualification minimal\
    if (step === 0) \{\
      setBesoin(value);\
      reply('Top. Ton **email** pour t\'92envoyer un r\'e9cap ?');\
      setStep(1);\
      return;\
    \}\
    if (step === 1) \{\
      setEmail(value);\
      reply('Merci. Et ton **nom / entreprise** ?');\
      setStep(2);\
      return;\
    \}\
    if (step === 2) \{\
      setNom(value);\
      setStep('done');\
      await submitLead();\
      reply("Parfait \uc0\u9989  J\'92ai tout not\'e9 et envoy\'e9 dans notre pipeline. Tu peux aussi r\'e9server ici : https://calendly.com (on cale 20 min).");\
      return;\
    \}\
\
    // Fallback : reformuler\
    reply("Je peux d\'e9tailler **exemples**, **gains**, **int\'e9grations** ou le **process**. Dis-moi ce que tu veux voir \uc0\u55357 \u56391 ");\
  \}\
\
  const chips = useMemo(() => suggestReplies(step), [step]);\
\
  function clickChip(t: string) \{\
    setInput(t);\
    void onSend();\
  \}\
\
  return (\
    <>\
      <button className="chat-fab" aria-label="Ouvrir le chat" onClick=\{() => setOpen((v) => !v)\}>\uc0\u55357 \u56492 </button>\
\
      \{open && (\
        <div className="chat-window" role="dialog" aria-label="Spectra Assistant">\
          <div className="chat-header">\
            <div className="chat-title">Spectra Assistant</div>\
            <button className="chat-close" onClick=\{() => setOpen(false)\} aria-label="Fermer">\'d7</button>\
          </div>\
\
          <div className="chat-body" ref=\{scrollRef\}>\
            \{messages.map((m) => (\
              <div key=\{m.id\} className=\{`chat-msg $\{m.role\}`\}>\
                <div className="bubble" dangerouslySetInnerHTML=\{\{ __html: m.text \}\} />\
              </div>\
            ))\}\
            <div className="chips">\
              \{chips.map((c) => (\
                <button key=\{c\} className="chip" onClick=\{() => clickChip(c)\}>\{c\}</button>\
              ))\}\
            </div>\
          </div>\
\
          \{step !== 'done' && (\
            <form className="chat-input" onSubmit=\{onSend\}>\
              <input\
                value=\{input\}\
                onChange=\{(e) => setInput(e.target.value)\}\
                placeholder=\{\
                  step === 0 ? 'D\'e9cris ton besoin (canal, objectif)\'85'\
                  : step === 1 ? 'votre@email.com'\
                  : 'Pr\'e9nom Nom / Entreprise'\
                \}\
                inputMode=\{step === 1 ? 'email' : 'text'\}\
                required\
              />\
              <button type="submit">Envoyer</button>\
            </form>\
          )\}\
        </div>\
      )\}\
    </>\
  );\
\}\
}