// components/TopSelling.js
// import { topSelling } from "../data/products";

// export default function TopSelling() {
//   return (
//     <section className="py-16 px-6 bg-gray-800 text-white">
//       <h2 className="text-3xl font-bold text-center mb-10">🔥 Top Selling</h2>
//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
//         {topSelling.map((item) => (
//           <div
//             key={item.id}
//             className="bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg transition"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-48 object-cover rounded mb-4"
//             />
//             <h3 className="text-lg font-semibold">{item.name}</h3>
//             <p className="text-blue-400 mt-2">{item.price}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { topSelling } from "../data/products";

export default function TopSelling() {
  return (
    <section className="py-16 px-6 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">🔥 Top Selling</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {topSelling.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="w-full h-48 bg-white flex items-center justify-center rounded mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain h-full"
              />
            </div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-blue-400 mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
