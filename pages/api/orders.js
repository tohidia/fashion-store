


// import { useEffect, useState } from "react";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetch("/api/orders")
//       .then((res) => res.json())
//       .then((data) => setOrders(data.orders));
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold">Order History</h1>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <ul className="mt-4 space-y-4">
//           {orders.map((order) => (
//             <li key={order._id} className="border p-4 rounded-lg">
//               <p><strong>Name:</strong> {order.fullName}</p>
//               <p><strong>Email:</strong> {order.email}</p>
//               <p><strong>Total:</strong> ${order.total}</p>
//               <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


// import { useEffect, useState } from "react";

// export default function Orders() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetch("/api/orders")
//       .then((res) => res.json())
//       .then((data) => setOrders(data.orders));
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold">Order History</h1>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <ul className="mt-4 space-y-4">
//           {orders.map((order) => (
//             <li key={order._id} className="border p-4 rounded-lg">
//               <p><strong>Name:</strong> {order.fullName}</p>
//               <p><strong>Email:</strong> {order.email}</p>
//               <p><strong>Total:</strong> ${order.total}</p>
//               <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



// pages/api/orders.js

export default function handler(req, res) {
  const mockOrders = [
    {
      _id: "1",
      fullName: "Faezeh",
      email: "faezeh@example.com",
      total: 829.89,
      createdAt: new Date().toISOString(),
    },
  ];

  res.status(200).json({ orders: mockOrders });
}
