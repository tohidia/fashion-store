import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
// import { db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import { db } from "../../lib/firebaseConfig";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart, cartItems } = useCart();
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const productRef = doc(db, 'products', id);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
          setProduct(productSnap.data());
        } else {
          setProduct(null);
        }
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handlePayment = async () => {
    setPaymentLoading(true);
    try {
      // Calculate the total amount in cents
      const totalAmount = product.price * quantity * 100;

      const res = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalAmount }),
      });

      const { clientSecret } = await res.json();

      const stripe = await stripePromise;
      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: { name: 'Customer' },
        },
      });

      if (error) {
        alert(error.message);
      } else {
        alert('Payment Successful!');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    } finally {
      setPaymentLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-lg shadow-md" />
      <p className="mt-4">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>

      {/* Quantity Selector */}
      <div className="mt-4">
        <label htmlFor="quantity" className="font-bold">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          className="ml-2 w-16 text-center border rounded-md p-1"
        />
      </div>

      <button
        onClick={() => addToCart({ ...product, quantity })}
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
      >
        Add to Cart
      </button>

      <button
        onClick={handlePayment}
        disabled={paymentLoading}
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg"
      >
        {paymentLoading ? 'Processing Payment...' : 'Pay Now'}
      </button>

      <Link href="/shop">
        <span className="mt-6 text-blue-500 hover:underline">Back to Shop</span>
      </Link>
    </div>
  );
};

export default ProductPage;
