import Link from "next/link";

export function ProductCard({ product }) {
  console.log(product);

  return (
    <div className="bg-slate-600 text-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img src={product.image} alt="" />
      <h4 className="text-xl font-semibold mt-2">{product.name}</h4>
      <p className="text-lg font-bold mt-2">${product.price}</p>

      <span className="text-sm text-gray-400 mt-2">
        Category: {product.category}
      </span>

      <Link
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        href={`/products/details/${product.id}`}
      >
        Detalles
      </Link>
    </div>
  );
}
