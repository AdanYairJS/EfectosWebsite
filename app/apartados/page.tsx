"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ModalApartar from "../components/ModalApartar";
import styles from "../styles/Apartados.module.css";

export default function Apartados() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const steps = [
    "Selecciona el producto que deseas apartar desde la sección de productos y haz click en el botón de 'Apartar'.",
    "Rellena el formulario con tus datos y presiona el botón de 'Generar clave'.",
    "Coloca la clave generada en el concepto al momento de hacer tu transferencia con el monto indicado.",
    "Una vez realizado el pago presiona el botón 'Finalizar' y espera a que un operador apruebe el apartado.",
    "Puedes comprobar el estado de tu apartado en la barra de búsqueda mediante la clave generada, se te notificará por correo electrónico cuando sea aprobada.",
  ];

  useEffect(() => {
    if (name && price) {
      setIsModalOpen(true);
    }
  }, [name, price]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <section className={styles.section}>
          <div className={styles.imageTextContainer}>
            <img
              src="apartados/apartados.png"
              alt="Apartados"
              className={styles.image}
            />
            <div className={styles.textContainer}>
              <h2 className={styles.title}>Apartados</h2>
              <p className={styles.paragraph}>
                En Efectos ofrecemos un sistema de apartado para que puedas reservar
                tus productos favoritos sin preocuparte por la disponibilidad. Asegura
                ese accesorio que tanto te gusta y recógelo cuando estés listo.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.stepsSection}>
          <h3 className={styles.stepsTitle}>Pasos para apartar un producto</h3>
          <ul className={styles.stepsList}>
            {steps.map((step, index) => (
              <li key={index} className={styles.stepItem}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <p className={styles.stepText}>{step}</p>
              </li>
            ))}
          </ul>
          <a href="#" className={styles.button}>BUSCA PRODUCTOS</a>
        </section>

        <ModalApartar
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={{ name: name as string, price: Number(price) }}
        />
      </main>
    </>
  );
}
