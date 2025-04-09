// components/NewArrivals.js
// import { newArrivals } from "../data/products";

// export default function NewArrivals() {
//   return (
//     <section className="py-16 px-6 bg-gray-900 text-white">
//       <h2 className="text-3xl font-bold text-center mb-10">New Arrivals</h2>
     
//         {newArrivals.map((product) => (
//           <div
//             key={product.id}
//             className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"

//           >
//             <div className="w-full h-48 bg-white flex items-center justify-center rounded mb-4">
//             <img
//               src={product.image}
//               alt={product.name}
//               // className="w-full h-48 object-cover rounded mb-4"
//                className="object-contain h-full"
//             />
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-blue-400 mt-2">{product.price}</p>
//           </div>
         
//         ))}
//       </div>
//     </section>
//   );
// }



import { newArrivals } from "../data/products";

export default function NewArrivals() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">New Arrivals</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {newArrivals.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="w-full h-48 bg-white flex items-center justify-center rounded mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain h-full"
              />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-blue-400 mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

