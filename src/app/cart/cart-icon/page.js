"use client";

import { useCartContext } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export function CartIcon() {
  const { cart } = useCartContext();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link href="/cart" className="relative">
      <Image alt="cart" src="/cart.svg" width={150} height={150} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
        {totalItems}
      </span>
    </Link>
  );
}
