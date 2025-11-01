import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      // On évite le Price ID : création "on the fly"
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: 2999, // 29,99 €
            recurring: { interval: "month" },
            product_data: {
              name: "Betty Bot – Abonnement mensuel",
              description:
                "Votre assistante IA métier, prête à qualifier vos prospects 24h/24.",
            },
          },
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      success_url:
        "https://spectra-media-landing-next.vercel.app/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://spectra-media-landing-next.vercel.app/",
      // (facultatif) metadata pour retrouver le client côté Stripe
      // metadata: { plan: "betty_monthly" },
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err: any) {
    console.error("Stripe error:", err?.message);
    return NextResponse.json({ error: "stripe_error" }, { status: 500 });
  }
}
