// import Link from "next/link";
// export default function BrandsSection() {
//     return (
//       <div className="bg-black py-10">
//         <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
//           {["Versace", "Zara", "Gucci", "Prada", "Calvin Klein"].map((brand) => (
//             <Link key ={brand} href={`/brands/${brand.toLowerCase().replace("","-")}`}>
//             <span key={brand} className="text-white text-2xl font-semibold uppercase transition-300 transform hover:scale-110 hover:text-yellow-500 hover:translate-y-1">
//               {brand}
//             </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     );
//   }


// import Link from "next/link";
// export default function BrandsSection() {
//     return (
//       <div className="bg-black py-10">
//         <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
//           {["Versace", "Zara", "Gucci", "Prada", "Calvin Klein"].map((brand) => (
//             <Link key={brand} href={`/brands/${brand.toLowerCase().replace(/\s+/g, "-")}`}>
//               <span className="text-white text-2xl font-semibold uppercase transition-transform duration-300 transform hover:scale-110 hover:text-yellow-500 hover:translate-y-1">
//                 {brand}
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     );
// }



// components/BrandsSection.js
import Image from "next/image";

export default function BrandsSection() {
  return (
    <div className="py-10 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Top Brands</h2>
      {/* <div className="flex justify-center gap-10 flex-wrap max-w-[1200px] mx-auto"> */}
      <div className="flex flex-wrap justify-center gap-10 text-xl font-light">
        <img className="object-contain" src="/images/Versace.png" width={100} height={50} alt="Versace" />
        <img className="object-contain" src="/images/zara.png" width={100} height={50} alt="Zara" />
        <img className="object-contain" src="/images/gucci.png" width={100} height={50} alt="Gucci" />
        <img className="object-contain" src="/images/prada.png" width={100} height={50} alt="Prada" />
        <img className="object-contain" src="/images/calvin-klein.png" width={100} height={50} alt="Calvin Klein" />
      </div>
    </div>
  );
}

