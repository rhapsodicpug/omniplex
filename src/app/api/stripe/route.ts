// /api/stripe/route.ts (or .js)

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  // Initialize Stripe inside the handler
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Pro Plan', // The product name from the assignment
            },
            unit_amount: 1000, // $10.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.nextUrl.origin}/payment-success`, // URL for successful payment
      cancel_url: `${req.nextUrl.origin}/payment-cancelled`, // URL for cancelled payment
    });

    // Return the URL of the Stripe-hosted page
    return NextResponse.json({ url: session.url });

  } catch (error: any) {
    console.error("Stripe Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}