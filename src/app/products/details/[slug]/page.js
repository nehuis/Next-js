import Link from "next/link";
import { productsDB } from "../../data/products";

export default function DetailPage({ params }) {
  const { slug } = params;
  const product = productsDB.find((product) => product.slug === slug);
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Producto no encontrado</h1>
        <p className="text-lg mb-2">
          El producto que estás buscando no existe.
        </p>
        <Link href="/products/all" className="text-blue-500 hover:underline">
          Volver a Productos
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screenp-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md transform">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {product.name}
        </h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold text-blue-600">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500">
            Categoría: {product.category}
          </span>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition hover:scale-105 duration-300">
          Comprar
        </button>
      </div>
    </div>
  );
}
