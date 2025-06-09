"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${category}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      .then((data) => setProducts(data.products || []))
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar los productos.");
      });
  }, [category]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      {products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="flex items-center justify-center mt-10">
          <h3 className="text-2xl font-bold text-center">
            No hay productos en esta categoría
          </h3>
        </div>
      )}
    </>
  );
}
