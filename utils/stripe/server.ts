import Stripe from 'stripe';
import { stripe } from '@/utils/stripe/config';
import { createClient } from '@/utils/supabase/server';

export async function checkoutWithStripe(){
  let session
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
    line_items: [
      {
        price: "price_1OqrXbRvLi4HOMUFA1oY0d3E", // Replace 'price_actualID' with your actual price ID
        quantity: 1,
      },
    ],
    mode: "payment",
    cancel_url: `http://localhost:3000/upload?canceled=true`,
    success_url: `http://localhost:3000/upload?success=true`,
    });
  } catch (err) {
    console.error(err);
    throw new Error('Unable to create checkout session.');
  }

      // Instead of returning a Response, just return the data or error.
      if (session) {
        return { sessionId: session.id };
      } else {
        throw new Error('Unable to create checkout session.');
      }
}
