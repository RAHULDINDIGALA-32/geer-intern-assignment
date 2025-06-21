import Image from "next/image";

const prices = [
  {
    label: "Under ₹9999",
    img: "https://geer.in/cdn/shop/collections/Under_9999.webp?v=1741158836&width=1070",
    link: "/collections/under-9999",
  },
  {
    label: "Under ₹14999",
    img: "https://geer.in/cdn/shop/collections/Under_14999.webp?v=1741158889&width=1070",
    link: "/collections/under-14999",
  },
  {
    label: "Under ₹24999",
    img: "https://geer.in/cdn/shop/collections/Under_24999.webp?v=1741158931&width=1070",
    link: "/collections/under-24999",
  },
  {
    label: "Under ₹39999",
    img: "https://geer.in/cdn/shop/collections/Under_39999.jpg?v=1741158983&width=1070",
    link: "/collections/under-39999",
  },
];

export default function ShopByPrice() {
  return (
    <section className="w-full py-8 px-14 " style={{ fontFamily: "i" }}>
      <h2 className="text-center text-2xl text-black md:text-3xl font-bold  mb-10">Shop By Price</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-4">
        {prices.map((item) => (
          <a
            key={item.label}
            href={item.link}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-square relative rounded-lg overflow-hidden">
              <Image
                src={item.img}
                alt={item.label}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <span className="mt-2 text-black text-lg font-normal">{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}