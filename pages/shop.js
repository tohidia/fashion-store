
// import Link from "next/link";
// import { useCart } from "../context/CartContext";

// const products = [
//   { id: 1, name: "Black Jacket", price: 120, image: "/images/jacket.jpg" },
//   { id: 2, name: "White Hoodie", price: 90, image: "/images/hoodie.jpg" },
//   { id: 3, name: "Blue Sneakers", price: 110, image: "/images/sneakers.jpg" },
//   { id: 4, name: "Leather Handbag", price: 150, image: "/images/handbag.jpg" },
// ];

// export default function Shop() {
//   const { addToCart } = useCart();

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4 text-center">Shop Our Collection</h1>
//       <p className="text-lg text-center text-gray-600 mb-6">Explore our amazing range of clothes, shoes, and accessories!</p>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
//             {/* Link to Product Page */}
//             <Link href={`/product/${product.id}`}>
//             {/* <div className="border p-4 rounded-lg shadow hover:shadow-lg transition"></div> */}
//              <div className="cursor-pointer">
//               <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md cursor-pointer" />
            
//             <h2 className="text-xl font-bold mt-2">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             </div>
//             </Link>
//             {/* Add to Cart Button */}
//             <button
//               onClick={() => addToCart(product)}
//               className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//       </div>
  
//   );
// }


// import products from '../data/products'; // Import product data
// import Link from "next/link";
// import { useCart } from "../context/CartContext";

// // const products = [
// //   { id: 1, name: "Black Jacket", price: 120, image: "/images/jacket.jpg" },
// //   { id: 2, name: "White Hoodie", price: 90, image: "/images/hoodie.jpg" },
// //   { id: 3, name: "Blue Sneakers", price: 110, image: "/images/sneakers.jpg" },
// //   { id: 4, name: "Leather Handbag", price: 150, image: "/images/handbag.jpg" },
// // ];

// export default function Shop() {
//   const { addToCart } = useCart();

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4 text-center">Shop Our Collection</h1>
//       <p className="text-lg text-center text-gray-600 mb-6">Explore our amazing range of clothes, shoes, and accessories!</p>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
//             {/* Link to Product Page */}
//             <Link href={`/product/${product.id.toString()}`} className="block">
//               <div className="cursor-pointer">
//                 <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
//                 <h2 className="text-xl font-bold mt-2">{product.name}</h2>
//                 <p className="text-gray-600">${product.price}</p>
//               </div>
//             </Link>
//             {/* Add to Cart Button */}
//             <button
//               onClick={() => addToCart(product)}
//               className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import products from '../data/products'; // Import product data
// import Link from "next/link";
// import Image from "next/image";
// import { useCart } from "../context/CartContext";

// export default function Shop() {
//   const { addToCart } = useCart();

//   return (
//     // <div className="max-w-6xl mx-auto p-6">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

//       <h1 className="text-3xl font-bold mb-4 text-center">Shop Our Collection</h1>
//       <p className="text-lg text-center text-gray-600 mb-6">Explore our amazing range of clothes, shoes, and accessories!</p>

//       {/* Product Grid */}
//       {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6"> */}
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
//             {/* Link to Product Page */}
//             <Link href={`/product/${product.id.toString()}`} className="block">
//               <div className="cursor-pointer">
//                 <img
//                   src={product.image} 
//                   alt={product.name} 
//                   width={300} 
//                   height={200} 
//                   className="w-full h-40 object-cover rounded-md" 
//                   unoptimized
//                 />
//                 <h2 className="text-xl font-bold mt-2">{product.name}</h2>
//                 <p className="text-gray-600">${product.price}</p>
//               </div>
//             </Link>
//             {/* Add to Cart Button */}
//             <button
//               onClick={() => addToCart(product)}
//               aria-label={`Add ${product.name} to cart`}
//               className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//      </div>
//   );
// }





import products from '../data/products'; // Import product data
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4 text-center">Shop Our Collection</h1>
      <p className="text-lg text-center text-gray-400 mb-6">
        Explore our amazing range of clothes, shoes, and accessories!
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <Link href={`/product/${product.id.toString()}`} className="block">
              <div className="cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-md"
                  unoptimized
                />
                <h2 className="text-xl font-bold mt-2">{product.name}</h2>
                <p className="text-gray-400">${product.price}</p>
              </div>
            </Link>
            <button
              onClick={() => addToCart(product)}
              aria-label={`Add ${product.name} to cart`}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
