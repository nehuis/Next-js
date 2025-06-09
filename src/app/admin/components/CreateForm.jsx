"use client";

import { handleChange } from "@/src/utils/handleChange";
import { useEffect, useState } from "react";

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

    setData((prevData) => ({
      ...prevData,
      price: parseFloat(prevData.price),
      stock: parseInt(prevData.stock),
    }));

    if (!data.name || !data.slug || !data.description) {
      alert("Por favor, completa todos los campos obligatorios");
      return;
    }

    if (parseFloat(data.price) < 0 || parseInt(data.stock < 0)) {
      alert("El precio y el stock deben ser mayores a 0");
      return;
    }

    if (
      data.image &&
      !/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/.test(data.image)
    ) {
      alert("Por favor, ingresa una URL de imagen válida");
      return;
    }

    const method = id ? "PUT" : "POST";
    const url = id
      ? `${BASE_URL}/api/product/${id}`
      : `${BASE_URL}/api/products`;

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Error:", error);
      return;
    }

    const result = await response.json();
    console.log("Success:", result);

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
