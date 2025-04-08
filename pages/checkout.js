
// import CheckoutComponent from "../components/CheckoutFrom";
// import CheckoutComponent from "../components/CheckoutFrom";

// import { useState } from "react";
// import { db } from "../lib/firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { useCart } from "../context/CartContext";
// import { useRouter } from "next/router";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// export default function Checkout() {
//   const { cart, totalPrice, setCart } = useCart();
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "", // ✅ Add email field here
//     address: "",
//     paymentMethod: "credit",
//   });

//   const [orderSubmitted, setOrderSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const sendOrderConfirmationEmail = async (customerEmail, orderId, totalPrice) => {
//     try {
//       const response = await fetch("/api/sendOrderConfirmation", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: customerEmail,
//           orderId,
//           amountTotal: totalPrice * 100, // Convert to cents
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to send order confirmation email.");
//       }

//       console.log("Order confirmation email sent successfully.");
//     } catch (error) {
//       console.error("Error sending email:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!formData.name || !formData.address || !formData.email) {
//       setError("Please fill out all required fields.");
//       return;
//     }

//     try {
//       setLoading(true);

//       // Store order in Firestore
//       const orderData = {
//         name: formData.name,
//         email: formData.email,
//         address: formData.address,
//         paymentMethod: formData.paymentMethod,
//         totalPrice: totalPrice,
//         cartItems: cart,
//         createdAt: new Date(),
//       };

//       const orderDocRef = await addDoc(collection(db, "orders"), orderData);
//       console.log("Order saved:", orderData);

//       // Send order confirmation email
//       await sendOrderConfirmationEmail(formData.email, orderDocRef.id, totalPrice);
     
//       if (formData.paymentMethod === "paypal") {
//         setOrderSubmitted(true); // Show PayPal button
//         return;
//       }
//       // Send request to your API (checkout endpoint)
//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: formData.email,
//           orderId: orderDocRef.id,
//           totalAmount: totalPrice,
//           items: cart.map((item) => ({
//             price_data: {
//               currency: "usd",
//               product_data: { name: item.name },
//               unit_amount: item.price * 100, // Convert price to cents
//             },
//             quantity: item.quantity,
//           })),
//         }),
//       });
    

  


//       if (!response.ok) {
//         throw new Error("Checkout request failed.");
//       }

//       const { id } = await response.json();
//       const stripe = await stripePromise;
//       await stripe.redirectToCheckout({ sessionId: id });

//       setCart([]); // Empty the cart
//       setOrderSubmitted(true);
//     } catch (error) {
//       console.error("Error processing order:", error);
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
// };

//   if (orderSubmitted) {
//     return <h2>Thank you for your order! Redirecting to payment...</h2>;
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg">
//       <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
//       <CheckoutComponent />
//       {error && <p className="text-red-500">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="p-2 border border-gray-300 rounded w-full"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           className="p-2 border border-gray-300 rounded w-full"
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Shipping Address"
//           value={formData.address}
//           onChange={handleChange}
//           className="p-2 border border-gray-300 rounded w-full"
//         />
//         <select
//           name="paymentMethod"
//           value={formData.paymentMethod}
//           onChange={handleChange}
//           className="p-2 border border-gray-300 rounded w-full"
//         >
//           <option value="credit">Credit Card</option>
//           <option value="paypal">PayPal</option>
//         </select>
//         <p className="font-bold">Total: ${parseFloat(totalPrice).toFixed(2)}</p>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded w-full"
//           disabled={loading}
//         >
//           {loading ? "Processing..." : "Proceed to Payment"}
//         </button>
//       </form>
//     </div>
//   );
// }

import CheckoutFrom from "../components/CheckoutFrom"; // ✅ Correct import

export default function Checkout() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <CheckoutFrom /> {/* ✅ Use only one form */}
    </div>
  );
}

