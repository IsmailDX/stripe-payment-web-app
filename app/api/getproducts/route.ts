import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const prices = await stripe.prices.list({
    limit: 4,
  });

  //reverse is not required but it will show the latest products first
  return NextResponse.json(prices.data.reverse());
}
