"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import Spinner from "@/components/spinner";

export function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`/api/products/${category}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      .then((data) => setProducts(data.products || []))
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar los productos.");
      })
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 mt-10 text-center">{error}</p>;
  }

  if (!products.length) {
    return (
      <div className="flex items-center justify-center mt-10">
        <h3 className="text-2xl font-bold text-center">
          No hay productos en esta categoría
        </h3>
      </div>
    );
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
