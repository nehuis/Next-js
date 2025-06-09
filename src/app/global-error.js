"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-8 mb-20 mt-20">
      <div className="rounded-lg p-6 text-center">
        <h1 className="text-2xl font-bold mb-6 text-orange-500">
          Algo salió mal!
        </h1>
        <button
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 cursor-pointer"
          onClick={() => reset()}
          title="Intentar de nuevo"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
