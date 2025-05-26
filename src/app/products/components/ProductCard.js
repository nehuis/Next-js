import Link from "next/link";

export function ProductCard({ product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>

      <span className="text-sm text-gray-500">
        Category: {product.category}
      </span>

      <Link
        className="mt-4 inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        href={`/products/details/${product.slug}`}
      >
        Ver detalles
      </Link>
    </div>
  );
}
