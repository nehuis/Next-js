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

  let product = null;

  try {
    const res = await fetch(`${protocol}://${host}/api/product/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Error al buscar el producto con id ${id}:`, res.status);
      return notFound();
    }

    product = await res.json();
  } catch (error) {
    console.error("Error al obtener producto:", error);
    return notFound();
  }

  return <DetailCard product={product} />;
}
