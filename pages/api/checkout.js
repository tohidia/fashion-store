//  import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items: req.body.items,
//         mode: "payment",
//         success_url: `${req.headers.origin}/success`,
//         cancel_url: `${req.headers.origin}/cancel`,
//         success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//       });

//       res.status(200).json({ id: session.id });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
// import { connectToDatabase } from "../../lib/mongodb";
// import Order from "../../models/Order";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       await connectToDatabase();
//       const order = await Order.create(req.body);
//       console.log("Order Saved:", order); // Debugging Log
//       res.status(201).json({ success: true, order });
//     } catch (error) {
//       console.error("Error saving order:", error);
//       res.status(500).json({ message: "Error saving order" });
//     }
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// }

// import { connectToDatabase } from "../../lib/mongodb";
// import Order from "../models/Order";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   try {
//     await connectToDatabase(); // Ensure MongoDB is connected

//     const { name, email, address, paymentMethod, totalPrice, cartItems } = req.body;

//     if (!name || !email || !address || cartItems.length === 0) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     // Create an order in MongoDB (set status as "pending")
//     const order = await Order.create({
//       name,
//       email,
//       address,
//       paymentMethod,
//       totalPrice,
//       cartItems,
//       status: "pending",
//       createdAt: new Date(),
//     });

//     console.log("Order Saved:", order);

//     // Create Stripe Checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       customer_email: email,
//       line_items: cartItems.map((item) => ({
//         price_data: {
//           currency: "usd",
//           product_data: { name: item.name },
//           unit_amount: item.price * 100, // Convert price to cents
//         },
//         quantity: item.quantity,
//       })),
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?orderId=${order._id}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
//       metadata: { orderId: order._id.toString() },
//     });

//     res.status(201).json({ success: true, order, sessionId: session.id });
//   } catch (error) {
//     console.error("Error saving order:", error);
//     res.status(500).json({ message: "Error processing order" });
//   }
// }



import { connectToDatabase } from "../../lib/mongodb";
import Order from "../../models/Order";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectToDatabase();

    const { name, email, address, cartItems, totalPrice } = req.body;

    if (!name || !email || !address || cartItems.length === 0) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("Error processing checkout:", error);
    res.status(500).json({ message: "Error processing order" });
  }
}

