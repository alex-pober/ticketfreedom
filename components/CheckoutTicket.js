import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { FormEvent } from 'react'
import { getStripe } from '@/utils/stripe/client';
import { checkoutWithStripe } from '@/utils/stripe/server';
import { Button } from './ui/button';
import Link from 'next/link';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

export default function StripeCheckout({handleUpload}) {

  const handleCheckout = async () => {
    const stripe = await getStripe()

    const response = await fetch("/api/stripe/checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ cart, userId }),
    })

    if (response.statusCode === 500) {
      return
    }

    const data = await response.json()

    console.log("Redirecting to checkout...")

    const result = stripe.redirectToCheckout({ sessionId: data.id })

    if (result.error) {
      console.log(result.error.message)
      console.log("Something went wrong")
    }
  }

  return (
  <Button className='w-64 m-auto'
  onClick={async () => {await handleUpload(); handleCheckout()}}>
    Pay
  </Button>
  );
}
