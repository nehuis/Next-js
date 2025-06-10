import Link from "next/link";
import { DetailCard } from "../../components/DetailCard";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}`
  );
  const product = await res.json();

  if (!product) {
    return {
      title: "Producto no encontrado",
      description: "El producto que estás buscando no existe.",
    };
  }

  return {
    title: product.name,
    description: product.description,
    keywords: `${product.name}, ${product.category}, ${product.price}`,
  };
}

export default async function DetailPage({ params }) {
  const { id } = params;
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/product/${id}`);

  if (!res.ok) {
    return (
      <div className="flex flex-col items-center justify-center mt-10 ">
        <div className="bg-slate-600 rounded-lg p-10 max-w-lg flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <h3 className="text-2xl font-bold text-center">
              Producto no encontrado
            </h3>
            <p className="text-lg text-center">
              El producto que estás buscando no existe.
            </p>
          </div>
        </div>

        <Link
          href="/products/all"
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded"
        >
          Regresar a la página principal
        </Link>
      </div>
    );
  }

  const product = await res.json();

  return <DetailCard product={product} />;
}
