"use client";

import { useAuthContext } from "@/src/context/AuthContext";
import Link from "next/link";

export default function AdminLayout({ children, login }) {
  const { user, logout } = useAuthContext();

  return (
    <>
      {user.isAuthenticated ? (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-orange-500 shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
            <div className="flex gap-10 mb-6 ">
              <Link
                className="mb-4 inline-block px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
                href="/admin"
              >
                Home
              </Link>
              <Link
                className="mb-4 inline-block px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
                href="/admin/create"
              >
                Create Product
              </Link>
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
              onClick={logout}
              title="Logout"
            >
              Logout
            </button>
          </div>

          {children}
        </div>
      ) : (
        <div className="flex items-center justify-center">{login}</div>
      )}
    </>
  );
}
