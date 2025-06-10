import { db } from "@/src/firebase/config";
import { DATABASES } from "@/src/firebase/databases";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const productRef = doc(db, DATABASES.PRODUCTS, id);
  const productSnapshot = await getDoc(productRef);

  const productData = productSnapshot.data();

  if (!productSnapshot.exists() || !productData) {
    return NextResponse.json(
      { error: "Producto no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    id: productSnapshot.id,
    ...productData,
  });
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
