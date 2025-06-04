export function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "About Us",
    description: "Learn more about our company and team",
    domain: "https://ecommerce.com",
    keywords: ["About Us", "E-Commerce"],
  };
}

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 mb-90">
        <h1 className="text-3xl font-bold text-center mt-10 text-orange-500">
          Sobre Nosotros
        </h1>
        <p className="mt-4 text-lg max-w-lg text-center">
          Somos un local de ropa dedicado a ofrecer los mejores productos y
          precios, brindando una experiencia de compra en línea sobresaliente.
        </p>
        <p className="mt-4 text-lg max-w-lg text-center">
          Nuestro equipo está formado por profesionales apasionados por la moda
          y el servicio al cliente. Nos esforzamos cada día para seleccionar
          prendas de calidad y mantenernos actualizados con las últimas
          tendencias.
        </p>
        <p className="mt-4 text-lg max-w-lg text-center">
          ¡Gracias por elegirnos y ser parte de nuestra comunidad!
        </p>
      </div>
    </>
  );
}
