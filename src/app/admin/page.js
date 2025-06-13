"use client";
import { useEffect, useState } from "react";
import { ProductsTable } from "./components/ProductTable";

export default function AdminPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products/all")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.error("Error al hacer fetch:", err));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Admin Section</h1>
      <ProductsTable products={products} />
    </div>
  );
}
