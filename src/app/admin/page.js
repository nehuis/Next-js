import { ProductsTable } from "./components/ProductTable";

export default function AdminPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Admin Section</h1>

      <ProductsTable />
    </div>
  );
}
