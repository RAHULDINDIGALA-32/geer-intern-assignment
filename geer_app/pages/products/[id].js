import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

  if (!product) return <div className="p-8">Loading...</div>;

  const variant = product.variants[colorIdx];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-18">
      {/* Left: Images */}
      <div className="relative">
        <div className="md:sticky md:top-8">
          <div className="w-full h-96 object-contain rounded mb-4 border border-grey-600 flex items-center justify-center bg-white">
            <img src={variant.images[mainImgIdx]} alt={product.name} className="object-contain rounded mb-4 w-full h-96" />
          </div>
          <div className="flex gap-2 mt-2">
            {variant.images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setMainImgIdx(idx)}
                className={`w-20 h-20 rounded-lg border-2 box-border flex items-center justify-center transition-colors duration-150
        ${mainImgIdx === idx ? "border-black" : "border-gray-300"}`}
                style={{
                  background: "#fff",
                  padding: 2, 
                }}
              >
                <img src={img} alt="" className="w-16 h-16 object-contain rounded" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Details */}
      <div>
        <div className="mb-4 border-b border-gray-400 pb-4">
       <h1 className="text-2xl font-normal text-black mb-6" style={{ fontFamily: "inherit" }}>{product.name}</h1>
        <div className="flex items-center gap-2 mb-2 \">
          <span className="text-gray-400 line-through text-lg">₹{product.mrp}</span>
          <span className="font-bold text-2xl text-black">₹{product.sellingPrice}</span>
          <span className="bg-black text-white text-xs px-2 py-1 rounded">
            {Math.round((1 - Number(product.sellingPrice.replace(/,/g, "")) / Number(product.mrp.replace(/,/g, ""))) * 100)}% OFF
          </span>
         
        </div>
         <span className="text-s text-gray-700">Shipping and discounts calculated at checkout.</span>
        </div>
        
        {/* Metal Quality */}
        <div className="mb-4 border-b border-gray-400 pb-4">
          <div className="font-normal text-black mb-1 flex items-center gap-2">
            Metal Quality:
            <span className="text-black/75 font-normal">{product.metalQuality[metalIdx]}</span>
          </div>
          <div className="flex gap-2">
            {product.metalQuality.map((m, idx) => (
              <button
                key={m}
                className={`border px-4 py-2 rounded transition-colors duration-150 ${metalIdx === idx ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
                onClick={() => setMetalIdx(idx)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Color Swatches */}
        <div className="mb-4 border-b border-gray-400 pb-4">
          <div className="font-normal text-black mb-1 flex items-center gap-2">
            Metal Color:
            <span className="text-black/75 font-normal">{variant.colorName}</span>
          </div>
          <div className="flex gap-2">
            {product.variants.map((v, idx) => (
              <button
                key={v.color}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${colorIdx === idx ? "border-black" : "border-gray-300"}`}
                style={{ background: v.color }}
                title={v.colorName}
                onClick={() => { setColorIdx(idx); setMainImgIdx(0); }}
              />
            ))}
          </div>
        </div>

        {/* Diamond Quality */}
        <div className="mb-4 border-b border-gray-400 pb-4">
          <div className="font-normal text-black mb-1 items-center gap-2">Diamond Quality & Tone: 
             <span className="text-black/75 font-normal"> {product.diamondQuality[diamondIdx]}</span>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {product.diamondQuality.map((d, idx) => (
              <button
                key={d}
                className={`border px-4 py-2 rounded transition-colors duration-150 ${diamondIdx === idx ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
                onClick={() => setDiamondIdx(idx)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="mb-4 border-b border-gray-400 pb-4">
          <div className="font-normal text-black mb-1 items-center gap-2">Size:
            <span className="text-black/75 font-normal"> {product.size[sizeIdx]}</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {product.size.map((s, idx) => (
              <button
                key={s}
                className={`border px-4 py-2 rounded transition-colors duration-150 ${sizeIdx === idx ? "bg-black text-white border-black" : "bg-white text-black border-black"}`}
                onClick={() => setSizeIdx(idx)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Engraving */}
        <div className="mb-6  pb-4">
          <div className="font-normal text-black mb-1">Add Engraving</div>
          <input type="text" maxLength={20} placeholder="Enter Engraving Instructions" className="border border-black/60 px-3 py-2 rounded-lg w-full placeholder:text-gray-400" />
          <div className="text-xs text-gray-500 mt-1">
            Max 20 characters. We suggest 15 characters or less. More characters will make the font size smaller. Engraving will appear on the side of the ring on the inside.
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <button className="flex-1 border border-black text-black/70 px-4 py-3 rounded-lg text-base font-medium cursor-pointer" style={{ minWidth: 220 }}>
            Schedule A Video Call
          </button>
          <button className="flex-1 border border-black text-black/70 px-4 py-3 rounded-lg text-base font-medium cursor-pointer" style={{ minWidth: 220 }}>
            Need Help? Chat With Us
          </button>
        </div>
        <div className="mb-2 font-medium text-black">Quantity</div>
        <div className="flex gap-4 mb-4 items-center">
          <div className="flex items-center border border-black rounded-lg w-36 h-12">
            <button
              className="flex-1 h-full text-2xl font-light border-r  text-black/80"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >−</button>
            <span className="flex-1 text-center text-black/60">{quantity}</span>
            <button
              className="flex-1 h-full text-2xl font-light border-l text-black/80"
              onClick={() => setQuantity(q => q + 1)}
              aria-label="Increase quantity"
            >+</button>
          </div>
          <button className="flex-1 border px-4 h-12 border-black rounded-lg text-base text-black/70 font-medium cursor-pointer" style={{ minWidth: 300 }}>
            Add To Cart
          </button>
        </div>
        <div className="mb-4 border-b border-gray-400 pb-4">
          <button className="w-full bg-black text-white py-4 rounded-lg cursor-pointer text-base font-semibold mb-2 ">
          Buy It Now
        </button>
        </div>
       

       <div className="col-span-2 mt-4" style={{ fontFamily: "i" }}>
        <h2 className="text-2xl text-black font-bold mb-2">Product Details</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>

      </div>
     
     
    </div>
  );
}