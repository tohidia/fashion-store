

// pages/thank-you.js

// export default function ThankYou() {
//     return (
//       <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg text-center">
//         <h1 className="text-3xl font-semibold mb-4">Thank you for your order!</h1>
//         <p className="text-lg mb-6">We will process your order shortly.</p>
//         <button
//           onClick={() => window.location.href = '/'}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Back to Shop
//         </button>
//       </div>
//     );
//   }
  


import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000); // Auto-redirect after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg text-center shadow-lg">
      <h1 className="text-3xl font-semibold mb-4 text-green-600">
        🎉 Thank you for your order!
      </h1>
      <p className="text-lg mb-6">We will process your order shortly.</p>
      <p className="text-md text-gray-600">Order Number: <strong>#123456</strong></p>
      <p className="text-md text-gray-600">Total: <strong>$869.96</strong></p>
      
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Back to Shop
      </button>
      
      <p className="text-sm text-gray-400 mt-4">Redirecting in 5 seconds...</p>
    </div>
  );
}
