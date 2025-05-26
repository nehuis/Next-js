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
    <>
      <h1>Contacto</h1>
    </>
  );
}
