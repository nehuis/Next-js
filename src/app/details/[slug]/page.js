import Link from "next/link";
import { productsDB } from "../../products/data/products";

export default async function DetailPage({ params }) {
  const { slug } = await params;
  const product = productsDB.find((product) => product.slug === slug);
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-lg mb-2">
          The product you are looking for does not exist.
        </p>
        <Link href="/products/all" className="text-blue-500 hover:underline">
          Go back to Products
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-lg font-bold">${product.price}</p>
        <span className="text-sm text-gray-500">
          Categoria: {product.category}
        </span>
        <button className="mt-4 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Comprar
        </button>
      </div>
    </div>
  );
}
