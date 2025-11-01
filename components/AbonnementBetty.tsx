"use client";
export default function AbonnementBetty() {
  const handleClick = async () => {
    const res = await fetch("/api/create-checkout-session", { method: "POST" });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <section className="text-center py-16 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-3xl font-bold mb-6">Abonnez-vous à <span className="text-indigo-600">Betty Bot</span></h2>
      <p className="text-gray-600 mb-8">
        Votre assistante IA métier, prête à qualifier vos prospects 24h/24.
      </p>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
      >
        S’abonner – 29,99 €/mois
      </button>
    </section>
  );
}
