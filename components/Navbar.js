



// export default function NavBar() {
//   return (
//     <nav className="bg-white text-black px-6 py-4 flex items-center justify-between shadow">
//       <h1 className="text-2xl font-bold">SHOP.CO</h1>
      
//       <ul className="hidden md:flex gap-6 text-sm">
//         <li>Shop</li>
//         <li>On Sale</li>
//         <li>New Arrivals</li>
//         <li>Brands</li>
//       </ul>

//       <div className="flex items-center gap-4">
//         <input
//           type="text"
//           placeholder="Search for products..."
//           className="border rounded px-3 py-1 text-sm hidden md:block"
//         />
//         <span>🛒</span>
//         <span>👤</span>
//       </div>
//     </nav>
//   );
// }


import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white text-black px-6 py-4 flex items-center justify-between shadow">
      <h1 className="text-2xl font-bold">SHOP.CO</h1>
      
      <ul className="hidden md:flex gap-6 text-sm">
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
        <Link href="/cart">Cart</Link>
        </li>
        <li>
        <Link href="/checkout">Checkout</Link>

        </li>
        <li>
          <Link href="/sale">On Sale</Link>
        </li>
        <li>
          <Link href="/new-arrivals">New Arrivals</Link>
        </li>
        <li>
          <Link href="/brands">Brands</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="border rounded px-3 py-1 text-sm hidden md:block"
        />
        <span>🛒</span>
        <span>👤</span>
      </div>
    </nav>
  );
}
