import { db } from "@/src/firebase/config";
import { DATABASES } from "@/src/firebase/databases";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

import { db } from "@/src/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { DATABASES } from "@/src/firebase/databases";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, DATABASES.PRODUCTS));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return NextResponse.json(
      { error: "No se pudieron obtener los productos" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const data = await request.json();

  const docRef = doc(db, DATABASES.PRODUCTS, id);

  try {
    await updateDoc(docRef, data);

    return NextResponse.json({
      message: "Product updated successfully",
      id,
      ...data,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  const docRef = doc(db, DATABASES.PRODUCTS, id);

  try {
    await deleteDoc(docRef);

    return NextResponse.json({
      message: "Product deleted successfully",
      id,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
