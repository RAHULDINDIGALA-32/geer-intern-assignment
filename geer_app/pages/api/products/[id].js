import { products } from "../../../data/mock_products";

let inMemoryProducts = [...products];

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method === "DELETE") {
    const idx = inMemoryProducts.findIndex((p) => String(p.id) === String(id));
    if (idx === -1) {
      return res.status(404).json({ error: "Product not found" });
    }
    const deleted = inMemoryProducts.splice(idx, 1)[0];
    res.status(200).json({ deleted });
  } else if (method === "GET") {
    const product = inMemoryProducts.find((p) => String(p.id) === String(id));
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } else {
    res.setHeader("Allow", ["DELETE", "GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}