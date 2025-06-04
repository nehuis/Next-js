"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "@/src/firebase/config";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    isAuthenticated: false,
    email: null,
    uid: null,
  });

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error al hacer el login", error);
    }
  };

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error al hacer el registro", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al hacer el logout", error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Usuario autenticado con Google:", user);
    } catch (error) {
      console.error("Error al iniciar sesión con Google", error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          isAuthenticated: true,
          email: currentUser.email,
          uid: currentUser.uid,
        });
      } else {
        setUser({
          isAuthenticated: false,
          email: null,
          uid: null,
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loginWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
}
