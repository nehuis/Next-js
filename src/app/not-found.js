import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-extrabold text-red-500 mb-4">
        404 - Not Found
      </h1>
      <p className="text-lg mb-4 text-gray-700">La página no existe</p>
      <Link href="/" className="text-blue-600 font-semibold hover:underline">
        Regresar a la página de inicio
      </Link>
    </div>
  );
}
