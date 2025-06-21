import { products } from "../../../data/mock_products";

let inMemoryProducts = [...products];

export default function apiHandler(req, res) {
  if (req.method === "GET") {
    // Return all products
    res.status(200).json(inMemoryProducts);
  } else if (req.method === "POST") {
    // Add a new product
    const { name, sellingPrice, imageUrl } = req.body;
    if (!name || !sellingPrice || !imageUrl) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const newProduct = {
      id: Date.now(),
      name,
      sellingPrice,
      imageUrl,
      // Add other default fields as needed
      isActive: true,
      category: "",
      description: "",
      mrp: "",
      sellingPrice: "",
      size: [],
      diamondQuality: [],
      metalQuality: [],
      variants: [],
    };
    inMemoryProducts.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}