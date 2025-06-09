"use client";

import Image from "next/image";
import { useState } from "react";
import { Navlink } from "./navlink";
import Link from "next/link";
import { CartIcon } from "@/src/app/cart/cart-icon/page";

export function Navbar() {
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/about" },
    { name: "Productos", href: "/products/all" },
    { name: "Contacto", href: "/contact" },
    { name: "Privacidad", href: "/privacy-policy" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-cyan-500">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo.svg"
            className="logo"
            alt="E-commerce Logo"
            width={150}
            height={50}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            OffBeat
          </span>
        </div>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Abrir menú</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`w-full md:block md:w-auto ${!isOpen && "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-cyan-500">
            {links.map(({ name, href }) => (
              <Navlink name={name} href={href} key={name} />
            ))}

            <li>
              <Link
                href="/cart"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              ></Link>
              <CartIcon />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
