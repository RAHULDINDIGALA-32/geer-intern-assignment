import Image from "next/image";

const essentials = [
	{
		label: "Traditional Wear",
		img: "https://geer.in/cdn/shop/collections/Traditional_Wear.webp?v=1741159290&width=1070",
	},
	{
		label: "Office Wear",
		img: "https://geer.in/cdn/shop/collections/Office_Wear.webp?v=1741159223&width=1070",
	},
	{
		label: "Party Wear",
		img: "https://geer.in/cdn/shop/collections/Party_Wear.webp?v=1741159253&width=1070",
	},
	{
		label: "Everyday Wear",
		img: "https://geer.in/cdn/shop/collections/Everyday_Wear.webp?v=1741159191&width=1070",
	},
];

export default function Essentials() {
	return (
		<section className="w-full py-8 mt-8">
			<h2
				className="text-2xl text-black md:text-3xl font-bold text-center mb-8" style={{ fontFamily: "i" }}
			>
				Essentials for You
			</h2>
			<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 px-16">
				{essentials.map((item) => (
					<div
						key={item.label}
						className="relative w-34 h-28 md:w-140 md:h-56 rounded-full  overflow-hidden aspect-[2/1] flex items-center justify-start bg-black"
					>
						<Image
							src={item.img}
							alt={item.label}
							layout="fill"
							objectFit="cover"
							className="opacity-90"
							priority
						/>
						
					</div>
				))}
			</div>
		</section>
	);
}