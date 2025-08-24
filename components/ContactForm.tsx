// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Demande d'information — Spectra Media");
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage:\n${message}`
    );
    // Fallback mailto (à remplacer par votre endpoint / API si besoin)
    window.location.href = `mailto:spectramediabots@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm">Nom</label>
        <input
          id="name"
          type="text"
          className="border rounded-md px-3 py-2"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm">Email</label>
        <input
          id="email"
          type="email"
          className="border rounded-md px-3 py-2"
          placeholder="vous@exemple.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm">Téléphone (optionnel)</label>
        <input
          id="phone"
          type="tel"
          className="border rounded-md px-3 py-2"
          placeholder="+33 ..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className="text-sm">Message</label>
        <textarea
          id="message"
          className="border rounded-md px-3 py-2 min-h-[120px]"
          placeholder="Décrivez simplement votre besoin / objectif"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="md:col-span-2 flex items-center justify-between">
        <p className="text-xs text-gray-600">
          Réponse sous 24h. Pas de démarchage. Données protégées (RGPD).
        </p>
        <button
          type="submit"
          className="rounded-md bg-gray-900 text-white px-5 py-2"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
