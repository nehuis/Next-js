"use client";

import { useAuthContext } from "@/context/AuthContext";
import { handleChange } from "@/utils/handleChange";
import { useState } from "react";

export function LoginForm() {
  const { login, register, loginWithGoogle } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto mb-10"
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={values.email}
        onChange={(e) => handleChange({ e, setValues, values })}
        required
        className="p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Contraseña"
        value={values.password}
        onChange={(e) => handleChange({ e, setValues, values })}
        required
        className="p-2 border rounded"
      />
      <button
        type="submit"
        onClick={() => login(values.email, values.password)}
        className="bg-orange-500 text-white p-2 rounded cursor-pointer hover:bg-orange-600"
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => loginWithGoogle()}
        className="bg-red-800 hover:bg-red-900 text-white p-2 rounded cursor-pointer"
      >
        <img
          src="/google.svg"
          alt="logo de google"
          width={20}
          height={20}
          className="inline-block mr-2"
        />
        Login with Google
      </button>
      <button
        type="button"
        onClick={() => register(values.email, values.password)}
        className="bg-green-600 text-white p-2 rounded cursor-pointer hover:bg-green-700"
      >
        Register
      </button>
    </form>
  );
}
