import { DATABASES } from "@/firebase/databases";
import { NextResponse } from "next/server";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, slug, description, price, stock, image, category } = body;

    if (!name || !slug || !description) {
      return NextResponse.json(
        { error: "Por favor, completa todos los campos obligatorios" },
        { status: 400 }
      );
    }

    if (price < 0 || stock < 0) {
      return NextResponse.json(
        { error: "El precio y el stock deben ser mayores a 0" },
        { status: 400 }
      );
    }

    if (image && !/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/.test(image)) {
      return NextResponse.json(
        { error: "Por favor, ingresa una URL de imagen válida" },
        { status: 400 }
      );
    }

    const product = {
      name,
      slug,
      description,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
      image: image || "",
      category: category || "",
    };

    const docRef = doc(db, DATABASES.PRODUCTS, slug);
    await setDoc(docRef, product);

    return NextResponse.json(
      {
        message: "Producto creado exitosamente",
        product: { id: product.slug, ...product },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al crear el producto:", error);
    return NextResponse.json(
      { error: "Error al crear el producto" },
      { status: 500 }
    );
  }
}
