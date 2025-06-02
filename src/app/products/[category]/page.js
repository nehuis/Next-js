import Spinner from "@/src/components/spinner";
import Link from "next/link";
import { Suspense } from "react";
import { ProductList } from "../components/ProductList";

export async function generateMetadata({ params, searchParams }, parent) {
  const { category } = await params;
  return {
    title: `Products of ${category}`,
    description: `Products of ${category} category`,
    keywords: ["products", "categories", category],
  };
}

export function generateStaticParams() {
  return [
    { category: "all" },
    { category: "remeras" },
    { category: "pantalones" },
    { category: "zapatillas" },
    { category: "camperas" },
  ];
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-center mt-4">
        <Link
          className="bg-violet-700 text-white px-4 py-2 rounded m-2"
          href={"/products/all"}
        >
          Todos
        </Link>
        <Link
          className="bg-violet-700 text-white px-4 py-2 rounded m-2"
          href={"/products/remeras"}
        >
          Remeras
        </Link>
        <Link
          className="bg-violet-700 text-white px-4 py-2 rounded m-2"
          href={"/products/pantalones"}
        >
          Pantalones
        </Link>
        <Link
          className="bg-violet-700 text-white px-4 py-2 rounded m-2"
          href={"/products/zapatillas"}
        >
          Zapatillas
        </Link>
        <Link
          className="bg-violet-700 text-white px-4 py-2 rounded m-2"
          href={"/products/camperas"}
        >
          Camperas
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Suspense fallback={<Spinner />}>
          <ProductList category={category} />
        </Suspense>
      </div>
    </div>
  );
}
