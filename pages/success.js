// import Link from 'next/link';

// export default function Success() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen ng-gray-100">
//        <div className="bg-white p-6 rounded-lg shadow-md text-center"></div>
//       <h1 className="text-3xl font-bold mb-4">🎉 Payment Successful!</h1>
//       <p className="mb-6">Thank you for your order. We will process it shortly.</p>
//       <Link href="/S" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//           Go back to Home
//       </Link>
//     </div>
//   );
// }


// import Link from "next/link";

// export default function SuccessPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md text-center">
//         <h1 className="text-2xl font-semibold text-green-600">Thank you for your order! 🎉</h1>
//         <p className="mt-2 text-gray-600">We will process your order shortly.</p>

//         <Link href="/">
//           <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//             Back to Shop
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SuccessPage() {
  const router = useRouter();
  const { session_id } = router.query; // Get session_id from query params
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session_id) {
      // Fetch session details from the API
      setLoading(true);
      fetch(`/api/getSessionDetails?session_id=${session_id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch session details");
          }
          return response.json();
        })
        .then((data) => {
          setOrderDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching session details:", error);
          setError("Could not fetch order details. Please try again later.");
          setLoading(false);
        });
    }
  }, [session_id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold text-green-600">Thank you for your order! 🎉</h1>
        <p className="mt-2 text-gray-600">We will process your order shortly.</p>

        {loading && <p>Loading order details...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {orderDetails && !loading && !error && (
          <div className="mt-4 text-left">
            <p className="text-md font-semibold">Order ID: {orderDetails.id}</p>
            <p className="text-md">Amount: ${orderDetails.amount_total / 100}</p>
            <p className="text-md">Customer Email: {orderDetails.customer_email}</p>
          </div>
        )}

        <Link href="/">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Back to Shop
          </button>
        </Link>
      </div>
    </div>
  );
}
