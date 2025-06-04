"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navlink({ name, href }) {
  const pathname = usePathname();

  return (
    <li className="w-full" key={name}>
      <Link
        href={href}
        className={`block py-2 px-3 text-white hover:bg-orange-500 rounded-sm md:p-0 dark:text-white
          ${
            pathname === href
              ? "bg-orange-500 text-white md:bg-orange-500 block justify-self-center md:hover:bg-orange-600 md:p-2"
              : "text-orange-500 md:bg-transparent md:hover:text-orange-500 md:hover:bg-transparent"
          }
          `}
      >
        {name}
      </Link>
    </li>
  );
}
