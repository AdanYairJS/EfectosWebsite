'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";
import styles from "../styles/Administracion.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Error de inicio de sesión: " + error.message);
      return;
    }

    if (data.user) {
      router.push("/gestionapartados");
    }
  };

  return (
    <main className={styles.loginPage}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h1 className={styles.loginTitle}>Inicio de sesión</h1>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          INGRESAR
        </button>
      </form>
    </main>
  );
};

export default Login;
