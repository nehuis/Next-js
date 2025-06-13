"use client";

import { handleChange } from "@/utils/handleChange";
import { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export function CreateForm({ id = null }) {
  const [data, setData] = useState({
    name: "",
    slug: "",
    description: "",
    price: 0,
    stock: 0,
    image: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const parsedData = {
      ...data,
      price: parseFloat(data.price),
      stock: parseInt(data.stock),
    };

    if (!parsedData.name || !parsedData.slug || !parsedData.description) {
      toast.error("Completá todos los campos", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
        theme: "colored",
      });
      return;
    }

    if (parsedData.price <= 0 || parsedData.stock <= 0) {
      toast.error("El producto y stock deben ser mayores a 0", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
        theme: "colored",
      });
      return;
    }

    if (
      parsedData.image &&
      !/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/.test(parsedData.image)
    ) {
      toast.error("Ingresá una url de imagen válida", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
        theme: "colored",
      });
      return;
    }

    const method = id ? "PUT" : "POST";
    const url = id
      ? `${BASE_URL}/api/product/${id}`
      : `${BASE_URL}/api/products`;

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedData),
    });

    if (!response.ok) {
      toast.error("Error al crear el producto", {
        position: "top-right",
        autoClose: 3000,
        transition: Bounce,
        theme: "colored",
      });
      return;
    }

    toast.success(`${parsedData.name} creado/a con éxito`, {
      position: "top-right",
      autoClose: 3000,
      transition: Bounce,
      theme: "colored",
    });

    if (!id) {
      setData({
        name: "",
        slug: "",
        description: "",
        price: 0,
        stock: 0,
        category: "",
        image: "",
      });
    }
  };

  useEffect(() => {
    if (id) {
      fetch(`${BASE_URL}/api/product/${id}`)
        .then((res) => res.json())
        .then((product) => {
          if (product) {
            setData({
              name: product.name || "",
              slug: product.slug || "",
              description: product.description || "",
              price: product.price || 0,
              stock: product.stock || 0,
              image: product.image || "",
              category: product.category || "",
            });
          }
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="slug"
        placeholder="Slug"
        value={data.slug}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        className={`p-2 border rounded ${
          id ? "bg-gray-700 cursor-not-allowed" : ""
        }`}
        disabled={!!id}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={data.description}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        className="p-2 border rounded"
      />
      <input
        type="number"
        name="price"
        value={data.price}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Price"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="stock"
        value={data.stock}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        placeholder="Stock Quantity"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={data.image}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        className="p-2 border rounded"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={data.category}
        onChange={(e) => handleChange({ e, setValues: setData, values: data })}
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-cyan-500 hover:bg-orange-500 cursor-pointer text-white p-2 rounded"
      >
        {id ? "Update Product" : "Create Product"}
      </button>
    </form>
  );
}
