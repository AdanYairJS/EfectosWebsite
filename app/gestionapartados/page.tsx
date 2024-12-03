'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  fetchApartados,
  updateApartadoStatus,
  logout,
  supabase,
} from "@/services/supabaseClient";
import styles from "../styles/Gestionapartados.module.css";

interface Apartado {
  id: number;
  generated_key: string;
  product_code: string;
  created_at: string;
  client_name: string;
  client_email: string;
  status: string;
  payment: number;
}

const GestionApartados = () => {
  const router = useRouter();
  const [apartados, setApartados] = useState<Apartado[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
          router.push("/administracion");
          return;
        }

        const data = await fetchApartados();
        setApartados(data);
      } catch (error) {
        console.error("Error al verificar la sesión o cargar apartados:", error);
        alert("Hubo un error al cargar los apartados. Intenta más tarde.");
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  const handleAction = async (generatedKey: string, currentStatus: string) => {
    const newStatus = currentStatus === "Pendiente" ? "Aprobado" : "Liquidado";

    const confirmAction = window.confirm(
      `¿Estás seguro de que quieres cambiar el estado a "${newStatus}"?`
    );

    if (!confirmAction) return;

    try {
      const success = await updateApartadoStatus(generatedKey, newStatus);

      if (success) {
        if (newStatus === "Liquidado") {
          setApartados((prev) =>
            prev.filter((apartado) => apartado.generated_key !== generatedKey)
          );
        } else {
          setApartados((prev) =>
            prev.map((apartado) =>
              apartado.generated_key === generatedKey
                ? { ...apartado, status: newStatus }
                : apartado
            )
          );
        }

        alert(`El estado del apartado ha sido actualizado a "${newStatus}".`);
      } else {
        alert("Hubo un error al actualizar el estado del apartado.");
      }
    } catch (error) {
      console.error("Error al actualizar el estado del apartado:", error);
      alert("Hubo un error inesperado. Intenta de nuevo.");
    }
  };

  const handleLogout = async () => {
    try {
      const success = await logout();
      if (success) {
        router.push("/administracion");
      } else {
        alert("Hubo un error al cerrar sesión.");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      alert("Hubo un error inesperado al cerrar sesión.");
    }
  };

  if (loading) {
    return (
      <main className={styles.gestionPage}>
        <h1 className={styles.gestionTitle}>Cargando apartados...</h1>
      </main>
    );
  }

  if (!loading && apartados.length === 0) {
    return (
      <main className={styles.gestionPage}>
        <h1 className={styles.gestionTitle}>Gestión de Apartados</h1>
        <p>No hay apartados disponibles en este momento.</p>
      </main>
    );
  }

  return (
    <main className={styles.gestionPage}>
      <div className={styles.header}>
        <h1 className={styles.gestionTitle}>Gestión de Apartados</h1>
        <button onClick={handleLogout} className={styles.logoutButton}>
          CERRAR SESIÓN
        </button>
      </div>

      {apartados
        .filter((apartado) => apartado.status !== "Liquidado")
        .map((apartado) => (
          <div key={apartado.generated_key} className={styles.apartadoCard}>
            <p>
              <strong>Clave de apartado:</strong> {apartado.generated_key}
            </p>
            <p>
              <strong>Código de producto:</strong> {apartado.product_code}
            </p>
            <p>
              <strong>Fecha de apartado:</strong>{" "}
              {new Date(apartado.created_at).toLocaleDateString("es-MX", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p>
              <strong>Nombre del cliente:</strong> {apartado.client_name}
            </p>
            <p>
              <strong>Correo del cliente:</strong> {apartado.client_email}
            </p>
            <p>
              <strong>Pago realizado:</strong> ${apartado.payment.toFixed(2)}
            </p>
            <p>
              <strong>Status de apartado:</strong> {apartado.status}
            </p>
            <button
              onClick={() =>
                handleAction(apartado.generated_key, apartado.status)
              }
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
