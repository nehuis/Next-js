export function generateMetaData({ params, searchParams }, parent) {
  const data = {
    title: "E-commerce",
    description: "E-commerce app",
    domain: "https://ecommerce.com",
    keywords: [
      "E-commerce",
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
    ],
  };
  return data;
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">
        Bienvenido a OffBeat
      </h1>
      <p className="text-lg text-orange-500 mb-8">
        Explorá nuestros productos y ofertas exclusivas
      </p>
    </div>
  );
}
