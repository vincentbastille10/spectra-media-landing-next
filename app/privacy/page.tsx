// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Spectra Media",
  description: "Comment nous traitons vos données.",
  alternates: { canonical: "/privacy" }
};

export default function Privacy() {
  return (
    <article className="prose prose-gray max-w-none">
      <h1>Politique de confidentialité</h1>
      <p>Dernière mise à jour : 24 août 2025</p>
      <p>
        Nous collectons uniquement les informations nécessaires pour vous répondre et
        fournir nos services (nom, email, téléphone, message). Vos données ne sont pas
        revendues. Elles sont conservées le temps nécessaire pour traiter votre demande,
        puis supprimées sur simple demande à l’adresse ci-dessous.
      </p>
      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de
        suppression de vos données. Pour exercer vos droits, écrivez à :{" "}
        <a href="mailto:spectramediabots@gmail.com">spectramediabots@gmail.com</a>.
      </p>
    </article>
  );
}
