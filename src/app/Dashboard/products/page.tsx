"use client";
import React, { useEffect, useState } from "react";

export default function Products() {
  interface Product {
    id: number;
    name: string;
    price: number;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="flex">
      
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id} className="border p-2 my-2">
                {product.name} - ${product.price}
              </li>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </ul>
      </div>
    </div>
  );
}
