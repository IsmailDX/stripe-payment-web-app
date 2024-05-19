import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  let data = await req.json();
  let priceId = data.priceId;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        // one quantity for each time u click the button
        quantity: 1,
      },
    ],
    // payment is 1 time payment
    mode: "payment",
    // URL to which Stripe should send customers when payment or setup is complete.
    success_url: "http://localhost:3000",
    // if they decide to cancel payment and return to your website.
    cancel_url: "http://localhost:3000",
  });

  return NextResponse.json(session.url);
}
