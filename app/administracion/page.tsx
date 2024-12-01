'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Administracion.module.css";

const Login = () => {
  const [adminID, setAdminID] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminID === "admin" && password === "12345") {
      router.push("/gestion-apartados");
    } else {
      alert("ID o contraseña incorrectos.");
    }
  };

  return (
    <main className={styles.loginPage}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h1 className={styles.loginTitle}>Inicio de sesión</h1>
        <label htmlFor="adminID">ID de administrador</label>
        <input
          type="text"
          id="adminID"
          placeholder="ID de administrador"
          value={adminID}
          onChange={(e) => setAdminID(e.target.value)}
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
