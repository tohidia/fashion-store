

// pages/api/getSessionDetails.js
// export default async function handler(req, res) {
//     const { session_id } = req.query;
//     console.log("Received session_id:", session_id);  // Log the session_id to verify it's being received
  
//     try {
//       // Fetch session details using the session_id
//       const session = await stripe.checkout.sessions.retrieve(session_id);
//       console.log("Fetched session details:", session);  // Log the session object to verify the data
      
//       // Return only the relevant session details
//       res.status(200).json({
//         id: session.id,
//         amount_total: session.amount_total,
//         customer_email: session.customer_email,
//       });
//     } catch (error) {
//       console.error("Error fetching session details:", error);
//       res.status(500).json({ error: 'Failed to fetch session details' });
//     }
//   }
  

// pages/api/getSessionDetails.js
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
    
//   const { session_id } = req.query;
//   console.log("Received session_id:", session_id);  // Log to ensure it's correct
  
//   try {
//     // Attempt to retrieve session details from Stripe
//     const session = await stripe.checkout.sessions.retrieve(session_id);
//     console.log("Fetched session details:", session);  // Log session data
    
//     // Return only relevant session data
//     res.status(200).json({
//       id: session.id,
//       amount_total: session.amount_total,
//       customer_email: session.customer_email,
//     });
//   } catch (error) {
//     console.error("Error fetching session details:", error); // Log the exact error
//     res.status(500).json({ error: 'Failed to fetch session details' });
//   }
// }


import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { session_id } = req.query;

    console.log("Received session_id:", session_id); // Debugging

    if (!session_id) {
      return res.status(400).json({ error: "Session ID is required" });
    }

    try {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      console.log("Fetched session details:", session); // Debugging

      res.status(200).json(session);
    } catch (error) {
      console.error("Error fetching session details:", error);
      res.status(500).json({ error: "Failed to retrieve session details" });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}
