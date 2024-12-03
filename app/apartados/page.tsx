'use client';

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ModalApartar from "../components/ModalApartar"; 
import { fetchProductById } from "@/services/supabaseClient";
import styles from "../styles/Apartados.module.css";

const ApartadosPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState<{ id: number; name: string; price: number } | null>(null);

  const steps = [
    "Selecciona el producto que deseas apartar desde la sección de productos y haz click en el botón de 'Apartar'.",
    "Rellena el formulario con tus datos y presiona el botón de 'Generar clave'.",
    "Coloca la clave generada en el concepto al momento de hacer tu transferencia con el monto indicado.",
    "Una vez realizado el pago presiona el botón 'Finalizar' y espera a que un operador apruebe el apartado.",
    "Puedes comprobar el estado de tu apartado en la barra de búsqueda mediante la clave generada, se te notificará por correo electrónico cuando sea aprobada.",
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const numericId = Number(id);

        if (isNaN(numericId)) {
          alert("El ID proporcionado no es un número válido.");
          return;
        }

        const productData = await fetchProductById(numericId);

        if (productData) {
          setProduct(productData);
          setIsModalOpen(true);
        } else {
          alert("El producto no existe.");
        }
      }
    };

    fetchProduct();
  }, [id]);

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
          <Link href="/productos" passHref legacyBehavior>
            <a className={styles.button}>BUSCA PRODUCTOS</a>
          </Link>
        </section>

        {isModalOpen && product && (
        <ModalApartar
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          productId={product.id}
        />
      )}
      </main>
    </>
  );
}

export default ApartadosPage;