export function generateMetaData({ params, searchParams }, parent) {
  const data = {
    title: "Contact",
    description: "Contact us",
    domain: "https://ecommerce.com",
    keywords: ["E-commerce", "Contact"],
  };
  return data;
}

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline text-center mt-10">
        Contactanos
      </h1>
      <p className="text-lg mb-2">
        Si tienes alguna pregunta o inquietud, no dudes en contactarnos. Estamos
        para ayudarte.
      </p>
    </div>
  );
}
