import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useSearch } from "../../context/SearchContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { search } = useSearch();

  useEffect(() => {
    // Replace with your backend API endpoint
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.category?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}