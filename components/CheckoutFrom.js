// "use client";
// import React, { useState } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { useCart } from "../context/CartContext";
// import toast from "react-hot-toast";

// const CheckoutForm = () => {
//   const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [checkoutComplete, setCheckoutComplete] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSuccess = (details) => {
//     setIsSubmitting(false);
//     setCheckoutComplete(true);
//     toast.success("Payment successful!");

//     console.log("Transaction completed by: ", details.payer.name.given_name);
//     console.log("Payment Details: ", details);

//     // Clear cart after successful payment (Optional)
//     // setCart([]);
//   };

//   return (
//     <div className="checkout-form">
//       <h2>Checkout</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : checkoutComplete ? (
//         <p>Thank you for your purchase! 🎉</p>
//       ) : (
//         <div>
//           <div className="cart-items">
//             {cart.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.name} />
//                 <div>
//                   <h4>{item.name}</h4>
//                   <p>Price: ${item.price}</p>
//                   <div>
//                     <button
//                       onClick={() =>
//                         updateQuantity(item.id, item.quantity - 1)
//                       }
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() =>
//                         updateQuantity(item.id, item.quantity + 1)
//                       }
//                     >
//                       +
//                     </button>
//                   </div>
//                   <button
//                     className="remove-item"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="total">
//             <h3>Total Price: ${totalPrice}</h3>
//           </div>

//           <form>
//             <div>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="address">Address:</label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </form>

//           <h3>Pay with PayPal:</h3>
//           <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
//             <PayPalButtons
//               style={{ layout: "vertical" }}
//               createOrder={(data, actions) => {
//                 return actions.order.create({
//                   purchase_units: [
//                     {
//                       amount: {
//                         value: totalPrice,
//                       },
//                     },
//                   ],
//                 });
//               }}
//               onApprove={(data, actions) => {
//                 return actions.order.capture().then(handleSuccess);
//               }}
//               onError={(err) => {
//                 toast.error("Payment failed. Please try again.");
//                 console.error("PayPal Checkout Error:", err);
//               }}
//             />
//           </PayPalScriptProvider>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutForm;


// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";
// import { useRouter } from "next/router";
// import toast from "react-hot-toast";

// const CheckoutForm = () => {
//   const { cart, totalPrice, clearCart } = useCart();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const router = useRouter();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Check if fields are empty
//     if (!formData.name || !formData.email || !formData.address) {
//       toast.error("Please fill out all required fields.");
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate payment processing (Replace this with PayPal API)
//     setTimeout(() => {
//       toast.success("Payment Successful!");
//       clearCart();
//       router.push("/thank-you"); // Redirect to Thank You page
//     }, 2000);
//   };

//   return (
//     <div className="checkout-form">
//       <h2>Checkout</h2>

//       {cart.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Full Name:</label>
//             <input type="text" name="name" onChange={handleChange} required />
//           </div>
//           <div>
//             <label>Email Address:</label>
//             <input type="email" name="email" onChange={handleChange} required />
//           </div>
//           <div>
//             <label>Shipping Address:</label>
//             <input type="text" name="address" onChange={handleChange} required />
//           </div>

//           <h3>Total: ${totalPrice}</h3>
          
//           {/* <option value="credit">Credit Card</option>
//           <option value="paypal">PayPal</option>
//          */}
         
//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Processing..." : "Proceed to Payment"}
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default CheckoutForm;


import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "credit", // Default to credit card
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (formData.paymentMethod === "credit") {
      handleCreditCardPayment();
    }
  };

  const handleCreditCardPayment = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Payment Successful!");
      clearCart();
      router.push("/thank-you");
    }, 2000);
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
     
        <div className="checkout-form">
        <h2>Checkout</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Full Name:</label>
              <input type="text" name="name" onChange={handleChange} required
              className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded" />
            </div>
            <div>
              <label>Email Address:</label>
              <input type="email" name="email" onChange={handleChange} required />
            </div>
            <div>
              <label>Shipping Address:</label>
              <input type="text" name="address" onChange={handleChange} required />
            </div>

            {/* Payment Method Selection */}
            <div>
              <label>Payment Method:</label>
              <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            <h3>Total: ${totalPrice}</h3>

            {formData.paymentMethod === "credit" && (
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Pay with Credit Card"}
              </button>
            )}

            {formData.paymentMethod === "paypal" && (
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: totalPrice.toFixed(2),
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then(() => {
                    toast.success("PayPal Payment Successful!");
                    clearCart();
                    router.push("/thank-you");
                  });
                }}
              />
            )}
          </form>
        )}
      </div>
    </PayPalScriptProvider>
  );
};

export default CheckoutForm;
