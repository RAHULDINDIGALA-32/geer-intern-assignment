import {inMemoryProducts } from "../../../data/mock_products";


export default function apiHandler(req, res) {
  if (req.method === "GET") {
    // Return all products
    res.status(200).json(inMemoryProducts);
  } else if (req.method === "POST") {
    // Add a new product
    const { name, price, imageUrl } = req.body;
    if (!name || !price || !imageUrl) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const newProduct = {
      id: Date.now(),
      name,
      price,
      imageUrl
    };
    inMemoryProducts.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}