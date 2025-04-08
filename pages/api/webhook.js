



// import { buffer } from "micro";
// import * as admin from "firebase-admin";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // Initialize Firebase Admin SDK
// if (!admin.apps.length) {
//   const firebaseCredentials = process.env.FIREBASE_ADMIN_CREDENTIALS.replace(/\\n/g, "\n");

//   try {
//     const credentials = JSON.parse(firebaseCredentials);
//     console.log("Firebase Credentials Loaded Successfully");
//     admin.initializeApp({
//       credential: admin.credential.cert(credentials),
//     });
//   } catch (error) {
//     console.error("Error parsing Firebase credentials:", error);
//     // Don't send a response here
//   }
// }

// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).send("Method Not Allowed");
//   }

//   const sig = req.headers["stripe-signature"];
//   let event;

//   try {
//     const rawBody = await buffer(req);
//     event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
//   } catch (err) {
//     console.error("Webhook error:", err);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object;
//     const orderId = session.metadata?.orderId;

//     if (!orderId) {
//       return res.status(400).json({ message: "Order ID missing" });
//     }

//     try {
//       // Update Firestore order status
//       await admin.firestore().collection("orders").doc(orderId).update({
//         status: "Paid",
//       });

//       console.log(`✅ Order ${orderId} marked as paid.`);
//     } catch (error) {
//       console.error("Error updating order:", error);
//       return res.status(500).json({ message: "Error updating order status" });
//     }
//   }

//   // Respond with a success message
//   res.status(200).json({ received: true });
// }

//   export const config = { api: { bodyParser: false } };


import { buffer } from "micro";
import * as admin from "firebase-admin";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  try {
    const firebaseCredentials = JSON.parse(
      process.env.FIREBASE_ADMIN_CREDENTIALS.replace(/\\n/g, "\n")
    );
    console.log("✅ Firebase Credentials Loaded Successfully");
    admin.initializeApp({
      credential: admin.credential.cert(firebaseCredentials),
    });
  } catch (error) {
    console.error("❌ Error parsing Firebase credentials:", error);
  }
}

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).send("This is a Webhook endpoint. Please use POST.");
  }

  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const orderId = session.metadata?.orderId;

    if (!orderId) {
      return res.status(400).json({ message: "Order ID missing" });
    }

    try {
      await admin.firestore().collection("orders").doc(orderId).update({
        status: "Paid",
      });
      console.log(`✅ Order ${orderId} marked as paid.`);
    } catch (error) {
      console.error("❌ Error updating order:", error);
      return res.status(500).json({ message: "Error updating order status" });
    }
  }

  res.status(200).json({ received: true });
}

export const config = { api: { bodyParser: false } };
