import { loadStripe } from "@stripe/stripe-js";

export function stripeClient() {
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);
}
