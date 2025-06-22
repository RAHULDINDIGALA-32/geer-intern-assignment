import { useState } from "react";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const [activeColor, setActiveColor] = useState(0);
  const [hoveredImg, setHoveredImg] = useState(0);
  const [wish, setWish] = useState(false);
  const [isModalVisible, setIsModalVisible] =useState(false)

  const mrp = Number(product.mrp.replace(/,/g, ""));
  const selling = Number(product.sellingPrice.replace(/,/g, ""));
  const discount = Math.round(((mrp - selling) / mrp) * 100);
  const save = mrp - selling;

  const variant = product.variants[activeColor];

  return (
    <div className="relative bg-white border border-black/10 rounded-xl shadow-sm hover:shadow-md transition  flex flex-col min-w-[180px] sm:min-w-0">
      {/* Discount badge */}
      {discount > 0 && (
        <span className="absolute top-3 left-3 bg-[#4A4947] text-white text-xs px-2 py-1 rounded-lg">
          {discount}% OFF
        </span>
      )}

      {/* Wishlist */}
      <div className="absolute top-3 mr-6 right-3 flex flex-col items-center z-10">
        <div className="relative flex flex-col items-center">  
          <button
            className="text-2xl transition flex items-center justify-center group"
            onMouseEnter={() => setIsModalVisible(true)}
            onMouseLeave={() => setIsModalVisible(false)}
            onFocus={() => setIsModalVisible(true)}
            onBlur={() => setIsModalVisible(false)}
            onClick={() => setWish((w) => !w)}
            aria-label={wish ? "Remove from Wishlist" : "Add to Wishlist"}
            tabIndex={0}
          >
            {wish ? (
              <FaHeart className="text-black" />
            ) : (
              <FiHeart className="text-black" />
            )}
        
            <span
              className={`
                absolute -top-8 right-1/2 translate-x-1/2
                bg-gray-700 text-white text-xs px-3 py-1 rounded shadow
                whitespace-nowrap pointer-events-none
                transition-opacity duration-200
                ${isModalVisible ? "opacity-100" : "opacity-0"}
              `}
              style={{ zIndex: 20 }}
            >
              {wish ? "Remove from Wishlist" : "Add to Wishlist"}
              <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-gray-700 rotate-45 -z-10"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <img
          src={variant.images[hoveredImg] || product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-contain p-4 cursor-pointer transition"
          onMouseEnter={() => setHoveredImg(1)}
          onMouseLeave={() => setHoveredImg(0)}
        />
      </Link>

      <div className="flex-1 flex flex-col px-4 pb-4">
        <Link href={`/products/${product.id}`}>
          <h2 className="font-normal text-base mt-2 mb-1 truncate text-black">
            {product.name}
          </h2>
        </Link>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-black/40 line-through text-sm">
            ₹{product.mrp}
          </span>
          <span className="font-bold text-lg text-black">
            ₹{product.sellingPrice}
          </span>
        </div>

        {/* Save UI */}
        <span className="inline-block w-fit bg-[#4A4947] text-white text-xs font-medium px-2 py-0.5 rounded-lg mb-2">
          SAVE ₹{save.toLocaleString()}
        </span>

        {/* Color Swatches */}
        <div className="flex gap-2 mt-auto">
          {product.variants.map((v, idx) => (
            <button
              key={v.color}
              className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition
                ${activeColor === idx ? "border-black"  : "border-black/20"}`}
              style={{ background: v.color }}
              title={v.colorName}
              onClick={() => {
                setActiveColor(idx);
                setHoveredImg(0);
              }}
            >
            
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}