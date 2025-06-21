 const collections = [
  {
    img: "https://geer.in/cdn/shop/collections/valentine_collection.webp?v=1741158446&width=1070",
    title: "EVERYDAY ROMANCE",
  },
  {
    img: "https://geer.in/cdn/shop/collections/Wedding_colletion.webp?v=1741158488&width=1070",
    title: "WEDDING SEASON READY",
  },
  {
    img: "https://geer.in/cdn/shop/files/engagement_ring_collection.webp?v=1741158587&width=1070",
    title: "RINGS - THAT SAY YES!",
  },
  {
    img: "https://geer.in/cdn/shop/files/Men_s_collection.webp?v=1741158518&width=1070",
    title: "THE GENTLEMAN'S EDIT",
  },
];

export default function Collections() {
  return (
    <section className="w-full mb-20">
      <h2 className="text-2xl text-black md:text-3xl font-bold text-center mb-8" style={{ fontFamily: "i" }}>
        Explore Collections
      </h2>
      <div className="flex gap-8 overflow-x-auto px-2 md:justify-center">
        {collections.map((col, idx) => (
          <div
            key={col.title}
            className={`flex flex-col items-center min-w-[180px] md:min-w-[220px] flex-shrink-0
              ${idx % 2 === 0 ? "mt-16" : "mb-6"}`}
          >
            <div
              className="w-36 h-28 md:w-64 md:h-76 rounded-[50%/40%] border border-black/35 overflow-hidden bg-gray-100 flex items-center justify-center mb-3 shadow-sm"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={col.img}
                alt={col.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 hover:scale-110"
                draggable={false}
              />
            </div>
            <span className="text-center text-sm md:text-base font-medium text-black mt-1">
              {col.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}