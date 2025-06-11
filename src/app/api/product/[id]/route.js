import { db } from "@/firebase/config";
import { DATABASES } from "@/firebase/databases";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;

  const productRef = doc(db, DATABASES.PRODUCTS, id);

  const productSnapshot = await getDoc(productRef);

  console.log(productSnapshot.data());

  return NextResponse.json({
    id: productSnapshot.id,
    ...productSnapshot.data(),
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
