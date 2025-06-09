"use client";

import Link from "next/link";
import { Counter } from "./Counter";

export function DetailCard({ product }) {
  return (
    <div className="flex flex-col items-center justify-center mt-10 ">
      <div className="bg-orange-500 rounded-lg p-10 max-w-lg flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-lg mb-5"
        />

        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-2xl font-bold text-center">{product.name}</h3>

          <p className="text-lg text-center">{product.description}</p>
          <p className="text-lg font-bold mt-2">${product.price}</p>

          <Counter product={product} />
        </div>
      </div>

      <Link
        href="/products/all"
        className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded"
      >
        Regresar a la página de productos
      </Link>
    </div>
  );
}
