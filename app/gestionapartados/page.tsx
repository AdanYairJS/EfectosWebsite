'use client';
import { useState } from "react";
import styles from "../styles/Gestionapartados.module.css";

const GestionApartados = () => {
  const [apartados, setApartados] = useState([
    {
      id: 1,
      codigo: "P123",
      fecha: "2023-11-30",
      cliente: "Juan Pérez",
      correo: "juan@example.com",
      status: "Pendiente",
    },
    {
      id: 2,
      codigo: "P456",
      fecha: "2023-12-01",
      cliente: "María López",
      correo: "maria@example.com",
      status: "Pendiente",
    },
  ]);

  const aprobarApartado = (id: number) => {
    setApartados((prev) =>
      prev.map((apartado) =>
        apartado.id === id ? { ...apartado, status: "Aprobado" } : apartado
      )
    );
  };

  const liquidarApartado = (id: number) => {
    setApartados((prev) => prev.filter((apartado) => apartado.id !== id));
  };

  const handleAction = (id: number, status: string) => {
    if (status === "Pendiente") {
      const confirm = window.confirm(
        "¿Estás seguro de que quieres aprobar este apartado?"
      );
      if (confirm) {
        aprobarApartado(id);
      }
    } else {
      liquidarApartado(id);
    }
  };

  return (
    <main className={styles.gestionPage}>
      <h1 className={styles.gestionTitle}>Gestión de Apartados</h1>
      {apartados.map((apartado) => (
        <div key={apartado.id} className={styles.apartadoCard}>
          <p>
            <strong>Clave de apartado:</strong> {apartado.id}
          </p>
          <p>
            <strong>Código de producto:</strong> {apartado.codigo}
          </p>
          <p>
            <strong>Fecha de apartado:</strong> {apartado.fecha}
          </p>
          <p>
            <strong>Nombre del cliente:</strong> {apartado.cliente}
          </p>
          <p>
            <strong>Correo del cliente:</strong> {apartado.correo}
          </p>
          <p>
            <strong>Status de apartado:</strong> {apartado.status}
          </p>
          <button
            onClick={() => handleAction(apartado.id, apartado.status)}
            className={styles.aprobarButton}
          >
            {apartado.status === "Pendiente" ? "APROBAR" : "LIQUIDAR"}
          </button>
        </div>
      ))}
    </main>
  );
};

export default GestionApartados;

