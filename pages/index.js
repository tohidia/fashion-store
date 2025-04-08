

// pages/index.js
// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import BrandsSection from "../components/BrandsSection";
// import Link from "next/link";

// export default function IndexPage() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <Hero />
//       <BrandsSection />
//       <div className="text-center p-10">
//         <h1 className="text-4xl font-bold text-gray-900">Welcome to Fashion Store</h1>
//         <p className="text-lg mt-4 text-gray-700">Browse our amazing collection!</p>
//         {/* <Link href="/shop">
//           <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300 mt-6">
//             Go to Shop
//           </button>
//         </Link> */}
//       <Link
//   href="/shop"
//   className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300 mt-6 inline-block"
// >
//   Go to Shop
// </Link>

//       </div>
//     </div>
//   );
// }

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import DressStyles from "../components/DressStyles";
import TopSelling from "../components/TopSelling";
import NewArrivals from "../components/NewArrivals";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BrandsSection from "../components/BrandsSection";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="bg-white text-white min-h-screen">
      <Navbar />
      <Hero />
      <BrandsSection />
      <NewArrivals />
      <TopSelling/>
      <DressStyles/>
      <Newsletter/>
      <Footer/>
      {/* Welcome Section */}
      <div className="text-center p-10">
        {/* <h1 className="text-4xl font-bold">Welcome to Fashion Store</h1>
        <p className="text-lg mt-4 text-gray-300">Browse our amazing collection!</p> */}

        {/* <Link
          href="/shop"
          className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300 mt-6 inline-block"
        >
          Go to Shop
        </Link> */}
      </div>
    </div>
  );
}


