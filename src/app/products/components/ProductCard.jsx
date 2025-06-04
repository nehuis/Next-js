import Link from "next/link";

export function ProductCard({ product }) {
  console.log(product);

  return (
    <div className="bg-orange-500 ml-3 mr-3 text-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img src={product.image} alt="" />
      <h4 className="text-xl font-semibold mt-2">{product.name}</h4>
      <p className="text-lg font-bold mt-2">${product.price}</p>

      <Link
        className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded"
        href={`/products/details/${product.id}`}
      >
        Detalles
      </Link>
    </div>
  );
}
