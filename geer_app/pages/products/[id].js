// pages/products/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [colorIdx, setColorIdx] = useState(0);
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const [metalIdx, setMetalIdx] = useState(0);
  const [diamondIdx, setDiamondIdx] = useState(0);
  const [sizeIdx, setSizeIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data);
          setMetalIdx(0);
          setDiamondIdx(0);
          setSizeIdx(0);
        });
    }
  }, [id]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setAllProducts);
  }, []);

  if (!product) return <div className="p-8">Loading...</div>;

  const variant = product.variants[colorIdx];

  const similarProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 8);

  return (
    <div className="max-w-2xl md:max-w-6xl mx-auto py-4 px-2 flex flex-col md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-8 md:gap-4">
      
    
      {/* Images Section */}
      <div className="relative">
         <div className="w-full flex flex-col items-center mb-6 md:mb-0 md:sticky md:top-8 ">

        {/* Main Image */}
        <div className="w-full max-w-[450px] md:max-w-[450px] md:h-[450px]  aspect-square bg-white border-2 border-black/30 rounded-lg flex items-center justify-center mx-auto">
          <img
            src={variant.images[mainImgIdx]}
            alt={product.name}
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* Thumbnail Images */}
        <div className="flex gap-2 mt-4  h-full max-w-[500px] px-1 ">
          {variant.images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setMainImgIdx(idx)}
              className={`min-w-[56px] md:w-20 md:h-20 h-14 rounded-lg border-2 flex-shrink-0 bg-white ${
                mainImgIdx === idx ? "border-black" : "border-gray-300"
              }`}
              style={{ padding: 2 }}
            >
              <img src={img} alt={`Thumbnail image ${idx + 1}`} className="w-10 h-10  md:w-16 md:h-16 object-contain rounded" />
            </button>
          ))}
        </div>

      </div>
      </div>
    

      {/* Details Section */}
      <div>
        {/* Title & Pricing */}
        <div className="mb-4 border-b border-gray-400 pb-4">
          <h1 className="text-2xl font-normal text-black mb-4">{product.name}</h1>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-gray-400 line-through text-lg">₹{product.mrp}</span>
            <span className="font-bold text-2xl text-black">₹{product.sellingPrice}</span>
            <span className="bg-black text-white text-xs px-2 py-1 rounded">
              {Math.round(
                (1 - Number(product.sellingPrice.replace(/,/g, "")) / Number(product.mrp.replace(/,/g, ""))) * 100
              )}
              % OFF
            </span>
          </div>
          <span className="text-sm text-gray-700">Shipping and discounts calculated at checkout.</span>
        </div>

        {/* Metal Quality */}
        <div className="mb-4 border-b border-gray-400 pb-4">
          <div className="font-normal text-black mb-1">Metal Quality: <span className="text-black/75">{product.metalQuality[metalIdx]}</span></div>
          <div className="flex flex-wrap gap-2">
            {product.metalQuality.map((m, idx) => (
              <button
                key={m}
                className={`border px-4 py-2 rounded ${metalIdx === idx ? "bg-black text-white" : "bg-white text-black"} border-black`}
                onClick={() => setMetalIdx(idx)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Color Swatches */}
        <div className="mb-4 border-b border-gray-400 pb-4">
          <div className="font-normal text-black mb-1">Metal Color: <span className="text-black/75">{variant.colorName}</span></div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {product.variants.map((v, idx) => (
              <button
                key={v.color}
                className={`w-8 h-8 rounded-full border-2 flex-shrink-0 ${colorIdx === idx ? "border-black" : "border-gray-300"}`}
                style={{ background: v.color }}
                title={v.colorName}
                onClick={() => { setColorIdx(idx); setMainImgIdx(0); }}
              />
            ))}
          </div>
        </div>

        {/* Diamond Quality */}
        <div className="mb-4 border-b border-gray-400 pb-4">
          <div className="font-normal text-black mb-1">Diamond Quality & Tone: <span className="text-black/75">{product.diamondQuality[diamondIdx]}</span></div>
          <div className="flex flex-wrap gap-2">
            {product.diamondQuality.map((d, idx) => (
              <button
                key={d}
                className={`border px-4 py-2 rounded ${diamondIdx === idx ? "bg-black text-white" : "bg-white text-black"} border-black`}
                onClick={() => setDiamondIdx(idx)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="mb-4 border-b border-gray-400 pb-4">
          <div className="font-normal text-black mb-1">Size: <span className="text-black/75">{product.size[sizeIdx]}</span></div>
          <div className="flex flex-wrap gap-2">
            {product.size.map((s, idx) => (
              <button
                key={s}
                className={`border px-4 py-2 rounded ${sizeIdx === idx ? "bg-black text-white" : "bg-white text-black"} border-black`}
                onClick={() => setSizeIdx(idx)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Engraving */}
        <div className="mb-6 pb-4">
          <div className="font-normal text-black mb-1">Add Engraving</div>
          <input
            type="text"
            maxLength={20}
            placeholder="Enter Engraving Instructions"
            className="border border-black/60 px-3 py-2 rounded-lg w-full placeholder:text-gray-400"
          />
          <div className="text-xs text-gray-500 mt-1">
            Max 20 characters. We suggest 15 characters or less.
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button className="flex-1 border border-black text-black/70 px-4 py-3 rounded-lg text-base font-medium">
            Schedule A Video Call
          </button>
          <button className="flex-1 border border-black text-black/70 px-4 py-3 rounded-lg text-base font-medium">
            Need Help? Chat With Us
          </button>
        </div>

        {/* Quantity */}
        <div className="mb-2 font-medium text-black">Quantity</div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex items-center border border-black rounded-lg w-full sm:w-36 h-12">
            <button className="flex-1 h-full text-2xl font-light border-r text-black/80" onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
            <span className="flex-1 text-center text-black/60">{quantity}</span>
            <button className="flex-1 h-full text-2xl font-light border-l text-black/80" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <button className="flex-1 border px-4 h-12 border-black rounded-lg text-base text-black/70 font-medium">
            Add To Cart
          </button>
        </div>

        <div className="mb-4 border-b border-gray-400 pb-4">
          <button className="w-full bg-black text-white py-4 rounded-lg font-semibold">
            Buy It Now
          </button>
        </div>

        {/* Description */}
        <div className="col-span-2 mt-6">
          <h2 className="text-2xl text-black font-bold mb-2" style={{ fontFamily: "i" }}>Product Details</h2>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>



      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="col-span-2 mt-10 md:mt-20">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black" style={{ fontFamily: "i" }}>You May Also Like</h3>
          <div className="flex gap-4 overflow-x-auto md:overflow-x-auto mt-8 overflow-hidden md:grid md:grid-cols-4 md:gap-6 scrollbar-hide">
            {similarProducts.map((sp) => (
              <div key={sp.id} className="min-w-[180px] max-w-xs">
                <ProductCard product={sp} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
