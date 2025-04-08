

// import { useCart } from "../context/CartContext";

// export default function Cart() {
//   const { cart, removeFromCart, totalPrice, increaseQuantity, decreaseQuantity } = useCart();

//   const handleCheckout = async () => {

//     const formattedCartItems = cart.map(item => ({
//       price_data: {
//         currency: "usd", // or your currency
//         product_data: {
//           name: item.name,
//         },
//         unit_amount: item.price * 100, // Stripe expects price in cents
//       },
//       quantity: item.quantity,
//     }));
//     const res = await fetch("/api/checkout", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items:formattedCartItems }),
//     });

//     const data = await res.json();
//     if (data.id) {
//       // window.location.href = data.url; // Redirect to Stripe Checkout
//        window.location.href = `https://checkout.stripe.com/pay/${data.id}`
//     } else {
//       alert("Checkout failed. Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

//       {cart.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div key={item.id} className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-2">
//               <div>
//                 <p className="text-lg font-semibold">{item.name}</p>
//                 <p className="text-gray-600">${item.price} x {item.quantity}</p>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <button className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600" onClick={() => decreaseQuantity(item.id)}>-</button>
//                 <p>{item.quantity}</p>
//                 <button className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600" onClick={() => increaseQuantity(item.id)}>+</button>
//               </div>

//               <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => removeFromCart(item.id)}>Remove</button>
//             </div>
//           ))}

//           <h2 className="text-xl font-bold mt-4">Total: ${totalPrice}</h2>

//           <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleCheckout}>
//             Proceed to Checkout
//           </button>
//         </>
//       )}
//     </div>
//   );
// }


import { useCart } from "../context/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Use cart context
 
  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity); // Update quantity in the cart
    }
  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Your Cart is Empty</h1>
        <Link href="/shop">
          {/* <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '10px',
            }}
          >
            Go to Shop
          </button> */}
          <button
  onClick={() => alert("Proceeding to checkout...")}
  style={{
    padding: '10px 20px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  }}
>
  Checkout
</button>

        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Your Cart</h1>
      
      <div style={{ marginTop: '20px' }}>
        {cart.map((item) => (
          <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={item.image}
                alt={item.name}
                width="80"
                height="80"
                style={{ objectFit: 'cover', marginRight: '20px' }}
              />
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.name}</h2>
                <p style={{ fontSize: '16px', color: '#555' }}>${item.price} each</p>
              </div>
            </div>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
              {/* Quantity Selector */}
              <div>
                <label htmlFor={`quantity-${item.id}`} style={{ fontSize: '16px', fontWeight: 'bold' }}>
                  Quantity:
                </label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                  min="1"
                  style={{
                    padding: '5px 10px',
                    marginLeft: '10px',
                    width: '50px',
                    textAlign: 'center',
                    fontSize: '16px',
                  }}
                />
              </div>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                ${item.price * item.quantity}
              </div>
              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold', textAlign: 'right' }}>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>

      {/* Checkout Button */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
