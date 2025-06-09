"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [productCounters, setProductCounters] = useState({});

  const addToCart = (product) => {
    const quantity = productCounters[product.id] || 1;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });

    toast.success("Producto agregado al carrito", {
      position: "top-right",
      autoClose: 3000,
      transition: Bounce,
      theme: "colored",
    });

    setProductCounters((prev) => ({ ...prev, [product.id]: 1 }));
  };

  const increaseCounter = (id) => {
    setProductCounters((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseCounter = (id) => {
    setProductCounters((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
        increaseCounter,
        decreaseCounter,
        productCounters,
      }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
}
