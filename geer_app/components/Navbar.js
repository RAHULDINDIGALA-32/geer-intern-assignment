import Link from 'next/link';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-black/10 px-8 py-3 flex items-center sticky top-0 z-20">
      <img
        src="https://geer.in/cdn/shop/files/logo.png?v=1740073087&width=600"
        alt="Geer Logo"
        className="h-10 w-auto mr-8"
        style={{ marginTop: '-4px' }}
      />
      <div className="flex-1 flex items-center gap-7 text-sm font-medium">
        <Link href="#" className="text-black hover:underline">RINGS</Link>
        <Link href="#" className="text-black hover:underline">EARRINGS</Link>
        <Link href="#" className="text-black hover:underline">BRACELETS AND BANGLES</Link>
        <Link href="#" className="text-black hover:underline">OTHER JEWELLERY</Link>
        <Link href="#" className="text-black hover:underline">CONTACT</Link>
        <Link href="#" className="text-black hover:underline">ABOUT</Link>
      </div>
      <div className="flex items-center gap-6 ml-6">
        <button className="text-black text-xl" title="Search">
          <FiSearch />
        </button>
        <button className="text-black text-xl" title="Account">
          <FiUser />
        </button>
        <button className="text-black text-xl relative" title="Cart">
          <FiShoppingCart />
        </button>
      </div>
    </nav>
  );
}