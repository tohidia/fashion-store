


  
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <div className="relative bg-cover bg-center min-h-[80vh] flex flex-col items-center justify-center text-center px-6"
//       style={{ backgroundImage: "url('/hero-bg.jpg')" }}
//     >
//       {/* Overlay for better text readability */}
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//       <div className="relative z-10">
//         <h1 className="text-4xl md:text-6xl font-bold text-white">
//           Find Clothes That Match Your Style
//         </h1>
//         <p className="text-lg text-gray-200 mt-4 max-w-2xl">
//           Browse through a diverse range of high-quality fashion.
//         </p>

//         {/* CTA Button */}
//         <Link href="/shop">
//           <button className="mt-6 bg-white text-black text-lg px-8 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
//             Shop Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }



// export default function Hero() {
//   return (
//     <section className="bg-gray-100 px-6 py-16 flex flex-col md:flex-row items-center justify-between">
//       {/* Left Text Block */}
//       <div className="max-w-xl mb-10 md:mb-0">
//         <h2 className="text-4xl font-extrabold mb-4">
//           FIND CLOTHES THAT MATCHES <br /> YOUR STYLE
//         </h2>
//         <p className="text-gray-600 mb-6">
//           Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//         </p>
//         <button className="bg-black text-white px-6 py-2 rounded">Shop Now</button>

//         <div className="mt-10 flex gap-10 text-center text-sm">
//           <div><strong>200+</strong><br />International Brands</div>
//           <div><strong>2,000+</strong><br />High-Quality Products</div>
//           <div><strong>30,000+</strong><br />Happy Customers</div>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="w-full md:w-1/2">
//         <img
//           src="/images/model.jpg" // 👈 your local image here
//           alt="Model"
//           className="w-full"
//         />
//       </div>
//     </section>
//   );
// }



// export default function Hero() {
//   return (
//     <section className="bg-gray-100 px-6 py-16 flex flex-col md:flex-row items-center justify-between">
//       {/* Left Side - Text */}
//       <div className="max-w-xl mb-10 md:mb-0">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
//           FIND CLOTHES THAT MATCHES <br /> YOUR STYLE
//         </h1>
//         <p className="text-gray-700 text-base mb-6">
//           Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//         </p>
//         <button className="bg-black text-white px-6 py-2 rounded-md mb-10">
//           Shop Now
//         </button>

//         {/* Stats */}
//         <div className="flex flex-col sm:flex-row gap-6 text-center text-sm text-black">
//           <div>
//             <strong className="text-lg">200+</strong><br />
//             International Brands
//           </div>
//           <div>
//             <strong className="text-lg">3,000+</strong><br />
//             High-Quality Products
//           </div>
//           <div>
//             <strong className="text-lg">30,000+</strong><br />
//             Happy Customers
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <img
//           src="/images/model.jpg" // Replace with your actual image path
//           alt="Fashion models"
//           className="rounded-md object-cover w-full max-w-md"
//         />
//       </div>
//     </section>
//   );
// }


import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 px-6 py-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side - Text */}
      <div className="max-w-xl mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
          FIND CLOTHES THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="text-gray-700 text-base mb-6">
          Browse through our diverse range of meticulously crafted garments, designed
          to bring out your individuality and cater to your sense of style.
        </p>

        {/* ✅ Link around button */}
        <Link href="/shop">
          <button className="bg-black text-white px-6 py-2 rounded-md mb-10">
            Shop Now
          </button>
        </Link>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-6 text-center text-sm text-black">
          <div>
            <strong className="text-lg">200+</strong>
            <br />
            International Brands
          </div>
          <div>
            <strong className="text-lg">3,000+</strong>
            <br />
            High-Quality Products
          </div>
          <div>
            <strong className="text-lg">30,000+</strong>
            <br />
            Happy Customers
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/model.jpg" // Replace with your actual image path
          alt="Fashion models"
          className="rounded-md object-cover w-full max-w-md"
        />
      </div>
    </section>
  );
}
