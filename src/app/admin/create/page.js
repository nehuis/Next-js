import { CreateForm } from "../components/CreateForm";

export default function CreatePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4 mt-5">
        Crear Producto
      </h1>
      <p className="text-lg text-orange-500 mb-8">
        Completá el formulario para añadir un nuevo producto
      </p>
      <div className="w-full max-w-md p-6 rounded-lg shadow-md">
        <CreateForm />
      </div>
    </div>
  );
}
