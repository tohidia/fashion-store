// pages/api/create-checkout-session.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Put your secret key in .env.local

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { totalAmount } = req.body;

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Your Shop Order',
              },
              unit_amount: Math.round(totalAmount * 100), // Stripe expects amount in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        // cancel_url: `${req.headers.origin}/checkout`,
        cancel_url:`${req.headers.origin}cancal`
      });

      res.status(200).json({ id: session.id });
    } catch (err) {
      console.error('Stripe session error:', err);
      res.status(500).json({ error: 'Something went wrong creating session' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

