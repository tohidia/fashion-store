
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import { useCart } from '../../context/CartContext';
// import products from '../../data/products'; // Import products data
// import Link from 'next/link';
// const ProductPage = () => {
//   const router = useRouter();
//   const { id } = router.query; // Get the product ID from the URL
//   const { addToCart } = useCart(); // Use the addToCart function from context

//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1); // State for quantity selection

//   // Fetch the product based on the ID from the URL
//   useEffect(() => {
//     if (id) {
//       const foundProduct = products.find((product) => product.id.toString() === id);
//       setProduct(foundProduct);
//     }
//   }, [id]);

//   // Handle quantity change
//   const handleQuantityChange = (event) => {
//     const newQuantity = parseInt(event.target.value, 10);
//     if (newQuantity > 0) {
//       setQuantity(newQuantity); // Update quantity if it's greater than 0
//     }
//   };

//   if (!product) {
//     return <div>Loading...</div>; // Show loading if the product is not found yet
//   }

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>{product.name}</h1>
//       <img src={product.image} alt={product.name} width="400" height="400" />
//       <p>{product.description}</p>
//       <p style={{ fontSize: '20px', fontWeight: 'bold' }}>${product.price}</p>
      
//       {/* Quantity Selector */}
//       <div style={{ marginTop: '20px' }}>
//         <label htmlFor="quantity" style={{ fontSize: '18px', fontWeight: 'bold' }}>
//           Quantity:
//         </label>
//         <input
//           type="number"
//           id="quantity"
//           value={quantity}
//           onChange={handleQuantityChange}
//           min="1"
//           style={{
//             padding: '5px 10px',
//             marginLeft: '10px',
//             width: '50px',
//             textAlign: 'center',
//             fontSize: '16px',
//           }}
//         />
//       </div>

//       <button
//         onClick={() => addToCart({ ...product, quantity })}
//         style={{
//           padding: '10px 20px',
//           backgroundColor: 'black',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           fontSize: '16px',
//           marginTop: '10px',
//         }}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductPage;



// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// import { useCart } from "../../context/CartContext";
// import products from "../../data/products";
// import Link from "next/link";

// const ProductPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const { addToCart } = useCart();

//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     if (id) {
//       const foundProduct = products.find((product) => product.id.toString() === id);
//       setProduct(foundProduct);
//     }
//   }, [id]);

//   const handleQuantityChange = (event) => {
//     const newQuantity = parseInt(event.target.value, 10);
//     if (newQuantity > 0) {
//       setQuantity(newQuantity);
//     }
//   };

//   if (!product) {
//     return <div className="text-center text-xl font-bold p-10">Loading...</div>;
//   }

//   return (
//     <div className="flex flex-col items-center p-6">
//       <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//       <img src={product.image} alt={product.name} className="w-96 h-96 object-cover rounded-lg shadow-md" />
//       <p className="mt-4 text-lg">{product.description}</p>
//       <p className="text-xl font-semibold mt-2">${product.price}</p>

//       {/* Quantity Selector */}
//       <div className="mt-4 flex items-center">
//         <label htmlFor="quantity" className="text-lg font-bold">
//           Quantity:
//         </label>
//         <input
//           type="number"
//           id="quantity"
//           value={quantity}
//           onChange={handleQuantityChange}
//           min="1"
//           className="ml-2 w-16 text-center border rounded-md p-1 text-lg"
//         />
//       </div>

//       <button
//         onClick={() => addToCart({ ...product, quantity })}
//         className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//       >
//         Add to Cart
//       </button>

//       <Link href="/shop">
//         <span className="mt-6 text-blue-500 hover:underline cursor-pointer">Back to Shop</span>
//       </Link>
//     </div>
//   );
// };

// export default ProductPage;


import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const productRef = doc(db, "products", id);
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

  if (loading) return <div className="text-center text-xl font-bold p-10">Loading...</div>;
  if (!product) return <div className="text-center text-xl font-bold p-10">Product not found.</div>;

  return (
    <div className="flex flex-col items-center p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-lg shadow-md" />
      <p className="mt-4 text-md md:text-lg text-center">{product.description}</p>
      <p className="text-lg md:text-xl font-semibold mt-2">${product.price}</p>

      {/* Quantity Selector */}
      <div className="mt-4 flex items-center">
        <label htmlFor="quantity" className="text-md md:text-lg font-bold">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          className="ml-2 w-12 md:w-16 text-center border rounded-md p-1 text-md md:text-lg"
        />
      </div>

      <button
        onClick={() => addToCart({ ...product, quantity })}
        className="mt-4 px-4 md:px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition disabled:bg-gray-500"
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>

      <Link href="/shop">
        <span className="mt-6 text-blue-500 hover:underline cursor-pointer">Back to Shop</span>
      </Link>
    </div>
  );
};

export default ProductPage;
