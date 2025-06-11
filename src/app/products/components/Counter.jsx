"use client";

import { useCartContext } from "@/context/CartContext";

export const Counter = ({ product }) => {
  const { addToCart, increaseCounter, decreaseCounter, productCounters } =
    useCartContext();

  const quantity = productCounters[product.id] || 1;

  return (
    <div>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded-l cursor-pointer mr-2"
        disabled={quantity <= 1}
        onClick={() => decreaseCounter(product.id)}
      >
        -
      </button>
      <button
        className="mt-2 px-4 py-2 bg-cyan-500 text-white rounded cursor-pointer"
        onClick={() => addToCart(product)}
      >
        Comprar {quantity} producto/s
      </button>
      <button
        className="bg-green-500 text-white px-2 py-1 rounded-r cursor-pointer ml-2"
        disabled={quantity >= 20}
        onClick={() => increaseCounter(product.id)}
      >
        +
      </button>{" "}
    </div>
  );
};
