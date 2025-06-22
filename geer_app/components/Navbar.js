import { useRouter } from "next/router";
import { useSearch } from "../context/SearchContext";
import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const { search, setSearch } = useSearch();
  const [showInput, setShowInput] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (router.pathname !== "/products") {
      router.push("/products");
    }
  };

  const handleCategoryClick = (category) => {
    setSearch(category);
    router.push("/products");
    setMobileMenu(false);
  };

  return (
    <nav className="bg-white border-b border-black/10 px-4 py-3 flex items-center sticky top-0 z-20">
      {/* Hamburger for mobile */}
      <button
        className="md:hidden text-2xl text-black mr-2"
        onClick={() => setMobileMenu((v) => !v)}
        aria-label="Open menu"
      >
        {mobileMenu ? <FiX /> : <FiMenu />}
      </button>
      <Link href="/" className="flex-shrink-0 ml-5">
        <img
          src="https://geer.in/cdn/shop/files/logo.png?v=1740073087&width=600"
          alt="Geer Logo"
          className="h-10 w-auto mr-4 cursor-pointer"
          style={{ marginTop: "-4px" }}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:ml-5  md:flex flex-1 items-center gap-4 md:gap-7 text-sm font-medium">
        <button className="text-black hover:underline bg-transparent border-none cursor-pointer" onClick={() => handleCategoryClick("rings")}>RINGS</button>
        <button className="text-black hover:underline bg-transparent border-none cursor-pointer" onClick={() => handleCategoryClick("earrings")}>EARRINGS</button>
        <button className="text-black hover:underline bg-transparent border-none cursor-pointer" onClick={() => handleCategoryClick("bracelets")}>BRACELETS AND BANGLES</button>
        <button className="text-black hover:underline bg-transparent border-none cursor-pointer" onClick={() => handleCategoryClick("other jewellery")}>OTHER JEWELLERY</button>
        <Link href="#footer" className="text-black hover:underline">CONTACT</Link>
        <Link href="#footer" className="text-black hover:underline">ABOUT</Link>
      </div>
      {/* Search and icons */}
      <div className="flex items-center gap-4 md:gap-6 ml-auto md:mr-6">
        <button className="text-black text-xl" title="Search" onClick={() => setShowInput((v) => !v)}>
          <FiSearch />
        </button>
        {showInput && (
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search"
            className="border border-black/30 px-2 py-1 rounded ml-2 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all w-32 sm:w-48"
            autoFocus
          />
        )}
        <button className="text-black text-xl" title="Account">
          <FiUser />
        </button>
        <button className="text-black text-xl relative" title="Cart">
          <FiShoppingCart />
        </button>
      </div>
  
      {mobileMenu && (
        <div className="fixed inset-0 bg-black/40 z-30 flex">
          <div className="bg-white w-72 h-full flex flex-col shadow-lg relative">
            {/* Close and Logo */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b">
              <button className="text-2xl text-black" onClick={() => setMobileMenu(false)} aria-label="Close menu">
                <FiX />
              </button>
         
              <Link href="/" onClick={() => setMobileMenu(false)} className="mx-auto">
                <img
                  src="https://geer.in/cdn/shop/files/logo.png?v=1740073087&width=600"
                  alt="Geer Logo"
                  className="h-8 w-auto"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              
              <span className="w-8" /> {/* Spacer for symmetry */}
            </div>
            {/* Menu Items */}
            <div className="flex-1 flex flex-col gap-2 px-4 py-4 text-base text-black ml-2">
              <button className="flex items-center justify-between py-2 " onClick={() => handleCategoryClick("rings")}>
                RINGS <span className="text-lg">{'>'}</span>
              </button>
              <button className="flex items-center justify-between py-2 " onClick={() => handleCategoryClick("earrings")}>
                EARRINGS <span className="text-lg">{'>'}</span>
              </button>
              <button className="flex items-center justify-between py-2 " onClick={() => handleCategoryClick("necklaces")}>
                NECKLACES <span className="text-lg">{'>'}</span>
              </button>
              <button className="flex items-center justify-between py-2 " onClick={() => handleCategoryClick("bracelets")}>
                BRACELETS AND BANGLES <span className="text-lg">{'>'}</span>
              </button>
              <button className="flex items-center justify-between py-2 " onClick={() => handleCategoryClick("other jewellery")}>
                OTHER JEWELLERY <span className="text-lg">{'>'}</span>
              </button>
              <Link href="#footer" className="py-2" onClick={() => setMobileMenu(false)}>CONTACT</Link>
              <Link href="#footer" className="py-2 " onClick={() => setMobileMenu(false)}>ABOUT</Link>
            </div>
            {/* Bottom Section */}
          </div>
          <div className="flex-1" onClick={() => setMobileMenu(false)} />
        </div>
      )}
    </nav>
  );
}