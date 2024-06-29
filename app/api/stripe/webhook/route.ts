import Stripe from "stripe";
import { NextApiRequest } from "next";
import { headers } from "next/headers";
import { buffer } from "node:stream/consumers";
import { supabaseCancelSubscription } from "@/services/supabase/data/subscriptions/cancel-subscription";
import { supabaseNewSubscription } from "@/services/supabase/data/subscriptions/new-subscription";

const stripe = new Stripe(process.env.STRIPE_SK!);

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET!;

export async function POST(req: NextApiRequest) {
  const rawBody = await buffer(req.body);

  const sig = headers().get("stripe-signature");

  if (!sig) {
    return Response.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err: any) {
    return Response.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "invoice.payment_succeeded":
        await handlePaymentSucceeded(event);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event);
        break;
    }
    return Response.json({ received: true }, { status: 200 });
  } catch (error: any) {
    return Response.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

async function handlePaymentSucceeded(event: Stripe.Event) {
  const invoice = event.data.object as Stripe.Invoice;
  const end_at = new Date(invoice.lines.data[0].period.end * 1000).toISOString();
  const customer_id = invoice.customer as string;
  const subscription_id = invoice.subscription as string;
  const email = invoice.customer_email as string;
  await supabaseNewSubscription({ end_at, customer_id, subscription_id, email });
}

async function handleSubscriptionDeleted(event: Stripe.Event) {
  const subscription = event.data.object as Stripe.Subscription;
  await supabaseCancelSubscription({ subscription_id: subscription.id });
}
