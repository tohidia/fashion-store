import Link from 'next/link';

export default function Cancel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-red-500">❌ Payment Cancelled</h1>
      <p className="mb-6">Your payment was canceled. You can try again anytime.</p>
      <Link href="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {/* <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> */}
          Return to Checkout
        {/* </a> */}
      </Link>
    </div>
  );
}
