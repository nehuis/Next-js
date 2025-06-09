import { ProductsTable } from "./components/ProductTable";

export default async function AdminPage() {
  const products = await fetch("http://localhost:3000/api/products/all").then(
    (res) => res.json()
  );
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Admin Section</h1>

        <ProductsTable products={products} />
      </div>
    </>
  );
}
