"use client";

import { useCartContext } from "@/src/context/CartContext";
import Link from "next/link";
import { toast } from "react-toastify";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, getTotal } = useCartContext();

  const handleCheckout = () => {
    toast.success("¡Compra realizada con éxito!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    clearCart();
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p className="text-center text-orange-500 mt-50 mb-50 text-2xl">
          Tu carrito está vacío
          <br />
          <Link
            href="/products/all"
            className="text-cyan-500 hover:text-cyan-700 px-4 py-2 rounded transition-colors duration-300 cursor-pointer"
          >
            Ir a productos
          </Link>
        </p>
      ) : (
        <div className="max-w-4xl mx-auto mt-10 mb-10 p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ul className="space-y-4 list-none">
            {cart.map((item) => (
              <li key={item.id} className="items-center">
                <div className="justify-center bg-orange-500 ml-3 mr-3 text-white shadow-md rounded-lg p-4 flex flex-col items-center">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 object-cover mt-5 mb-5 rounded"
                  />
                  <p>Precio: ${item.price.toFixed(2)}</p>
                  <p className="mt-2">Cantidad: {item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-cyan-500 bg-black px-4 py-2 rounded mt-2 transition-colors duration-300 cursor-pointer"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="text-center text-2xl font-bold mt-10 bg-cyan-500 text-white p-4 rounded shadow-md">
            Total: ${getTotal().toFixed(2)}
          </h2>
        </div>
      )}
      {cart.length > 0 && (
        <div className="flex gap-4 ml-4 mt-4">
          <button
            onClick={handleCheckout}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer transition-colors duration-300"
          >
            Finalizar compra
          </button>
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer transition-colors duration-300"
          >
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
}
