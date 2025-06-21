import { useEffect, useState } from "react";
import ExploreCollections from "../components/ExploreCollections";
import BestSeller from "../components/BestSeller";
import ShopByPrice from "../components/ShopByPrice";
import Essentials from "../components/Essentials";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  // Filter best sellers
  const bestSellers = products.filter((p) => p.sales > 75);

  return (
    <div className="w-full">
      <ExploreCollections />
      <BestSeller products={bestSellers} />
      <ShopByPrice />
      <Essentials />
      {/* Other components can be added here later */}
    </div>
  );
}