import Link from "next/link";

export function Footer() {
  return (
    <footer className="rounded-lg shadow-sm m-4 bg-cyan-500">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            OffBeat™
          </a>
          . Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <Link href="/about">
              <p className="hover:underline me-4 md:me-6">Nosotros</p>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              <p className="hover:underline me-4 md:me-6">
                Política de Privacidad
              </p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="hover:underline">Contacto</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
