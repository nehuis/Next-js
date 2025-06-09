import { CreateForm } from "../../components/CreateForm";

export default async function EditPage({ params }) {
  const { id } = await params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4 mt-5">
        Editar Producto
      </h1>
      <p className="text-lg text-orange-500 mb-8">
        Completá el formulario para editar el producto
      </p>
      <div className="w-full max-w-md p-6 rounded-lg shadow-md">
        <CreateForm id={id} />
      </div>
    </div>
  );
}
