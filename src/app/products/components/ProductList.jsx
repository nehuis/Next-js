import { ProductCard } from "./ProductCard";

export async function ProductList({ category }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products/${category}`, {
    cache: "no-store",
  });

  const { products } = await res.json();

  return (
    <>
      {products && products.length ? (
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
