import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BestSeller({ products = [] }) {
  const scrollRef = useRef(null);
  const router = useRouter();

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full my-12">
      <h2 className="text-3xl  text-black md:text-3xl font-bold text-center mb-2" style={{ fontFamily: "i" }}>
        Best Seller
      </h2>
      <div className="relative ml-12 mr-12">
        {/* Left Arrow */}
        <button
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-black/10 text-black rounded-lg w-12 h-12 items-center justify-center hover:bg-black hover:text-white transition"
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
        >
          <FiChevronLeft size={24} />
        </button>
        {/* Product List */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-4 md:px-12 md:justify-center scrollbar-hide scroll-smooth"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center  min-w-[220px] md:min-w-[260px] flex-shrink-0 group"
            >
              <Link href={`/products/${product.id}`} className="block w-full">
                <div className="w-full aspect-square flex items-center justify-center mb-3">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-contain w-full h-48 md:h-56 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center text-sm md:text-base font-medium text-black truncate w-full max-w-[220px] md:max-w-[260px] mb-2">
                  {product.name}
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-black/40 line-through text-sm">
                      ₹{product.mrp}
                    </span>
                    <span className="font-bold text-lg text-black">
                      ₹{product.sellingPrice}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-black/10 text-black rounded-lg w-12 h-12 items-center justify-center hover:bg-black hover:text-white transition"
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center mt-14">
        <button
          className="border border-black rounded-xl px-8 py-3 text-black font-medium hover:bg-black hover:text-white transition"
          onClick={() => router.push("/products")}
        >
          See All Items
        </button>
      </div>
    </section>
  );
}