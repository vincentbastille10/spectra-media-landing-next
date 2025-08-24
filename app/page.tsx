export default function HomePage() {
  return (
    <main className="p-8 max-w-3xl mx-auto space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Spectra Media</h1>
        <p>
          Nous automatisons vos processus grâce à l’intelligence artificielle : chatbots intelligents, veille prédictive et outils macOS.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Betty Bot</h2>
        <p>
          Des chatbots personnalisés pour qualifier vos prospects et automatiser votre support. Configurez rapidement votre Betty Bot et laissez‑la qualifier et répondre à vos leads en quelques minutes.
        </p>
        <p>
          <a
            href="https://bettybotdelph.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Tester la flotte Betty Bot
          </a>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">InnovationPulse</h2>
        <p>
          Notre intelligence prédictive analyse la veille technologique et vous propose des insights actionnables pour rester à la pointe. Recevez des alertes personnalisées et anticipez les tendances.
        </p>
        <p>
          <a
            href="https://spectramedia.gumroad.com/l/InnovationPulse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Découvrir InnovationPulse sur Gumroad
          </a>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Trieur de factures</h2>
        <p>
          Application macOS (.dmg) pour trier automatiquement vos factures, extraire les montants, TVA et dates, et alimenter vos feuilles Google. Elle s’intègre à Gmail et Google Sheets pour une organisation optimale.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Nous contacter</h2>
        <p>Pour toute question ou démonstration, veuillez remplir ce formulaire :</p>
        <form
          action="https://script.google.com/macros/s/AKfycbwv68x_ZdlBoibZVJBxb5vS9Y58nAPXOpSjo37PBl5vnZo0J74dIgGJ6JqmASrXSEWbHA/exec"
          method="POST"
          className="form-container"
        >
          <label className="block">
            <span className="text-sm">Email</span>
            <input name="email" type="email" required />
          </label>
          <label className="block">
            <span className="text-sm">Nom</span>
            <input name="nom" type="text" />
          </label>
          <label className="block">
            <span className="text-sm">Objet de la demande</span>
            <input name="objet" type="text" required />
          </label>
          <button type="submit">
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}