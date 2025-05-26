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
  return <></>;
}
