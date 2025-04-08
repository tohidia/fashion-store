import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
// import { loadStripe } from "@stripe/stripe-js"; 
// Replace this with your real Stripe publishable key
// const stripePromise = loadStripe("NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_12345YOURKEY");

const stripePromise = loadStripe("NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_12345YOURKEY");

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    // Ensure router is ready and query parameters are available
    if (router.isReady) {
      const { totalAmount } = router.query; // destructure directly from router.query
      if (totalAmount) {
        setTotalAmount(totalAmount);
      }
    }
  }, [router.isReady, router.query]); // Only run this when router is ready or query changes

  const handleCheckout = async () => {
    setLoading(true);

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmount }),
    });
    const session = await res.json();

    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  if (totalAmount === null) {
    // return <div>Loading..</div>; // Display a loading state until the amount is available
  }

  return (
    <div>
      <h2 className="text-xl mb-4">Proceed to Payment</h2>
      <h2>Total: ${totalAmount}</h2>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="bg-indigo-600 text-white py-2 px-4 rounded"
      >
        {loading ? "Redirecting..." : "Pay with Stripe"}
      </button>
    </div>
  );
}
