import { ProductCard } from "../components/ProductCard";
import { productsDB } from "../data/products";

export async function generateMetaData({ params, searchParams }, parent) {
  const categories = await params;
  return {
    title: `Products of - ${categories}`,
    description: `Products of category ${categories}`,
    keywords: ["products", "category", categories],
  };
}

export default async function CategoryPage({ params }) {
  const { categories } = await params;

  const products =
    categories === "all"
      ? productsDB
      : productsDB.filter((product) => product.category === categories);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Category: {categories}</h1>
      <p className="text-lg mb-2">Productos de {categories}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
