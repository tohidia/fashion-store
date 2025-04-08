// import { connectToDatabase } from "../../lib/mongodb";
// import Order from "../../models/Order";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { orderId, customerEmail, amountTotal } = req.body;

//     if (!orderId || !customerEmail || !amountTotal) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     try {
//       await connectToDatabase();

//       const newOrder = new Order({
//         orderId,
//         customerEmail,
//         amountTotal,
//         status: "completed",
//       });

//       await newOrder.save();

//       return res.status(201).json(newOrder);
//     } catch (error) {
//       console.error("Error creating order:", error);
//       return res.status(500).json({ error: "Failed to create order" });
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }

export default async function handler(req, res) {
    console.log("Request Method:", req.method);
  
    if (req.method === "POST") {
      const { orderId, customerEmail, amountTotal } = req.body;
  
      if (!orderId || !customerEmail || !amountTotal) {
        return res.status(400).json({ error: "Missing required fields" });
      }
  
      try {
        await connectToDatabase();
        const newOrder = new Order({
          orderId,
          customerEmail,
          amountTotal,
          status: "completed",
        });
        await newOrder.save();
        return res.status(201).json(newOrder);
      } catch (error) {
        console.error("Error creating order:", error);
        return res.status(500).json({ error: "Failed to create order" });
      }
    } else if (req.method === "GET") {
      return res.status(200).json({ message: "GET request works!" });
    } else {
      res.setHeader("Allow", ["POST", "GET"]);
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  }


