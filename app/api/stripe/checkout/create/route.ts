import Stripe from "stripe";

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SK!);

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: data.redirectTo || process.env.SITE_URL,
      cancel_url: process.env.SITE_URL,
      customer_email: data.email,
      line_items: [{ price: data.priceId, quantity: 1 }],
      mode: "subscription",
    });

    return Response.json({ session });
  } catch (error) {
    return Response.json({ error });
  }
}
