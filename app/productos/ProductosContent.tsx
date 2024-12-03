'use client';

import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/supabaseClient";
import styles from "../styles/Productos.module.css";
import Card from "../components/ProductCard";

type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
};

export default function ProductosContent() {
  const [products, setProducts] = useState<Product[]>([]); // Tipado explícito para el estado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data); // TypeScript sabe que "data" debe coincidir con Product[]
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section className={styles.section_header}>
        <h2 className={styles.title}>Bolsas</h2>
        <p className={styles.text}>
          Descubre nuestra colección de bolsas únicas para cada ocasión. Con
          nuestro sistema de apartado, puedes reservar tus favoritas con
          facilidad.
        </p>
      </section>
      <div className={styles.cardsContainer}>
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))
        ) : (
          <p className={styles.noProductsText}>
            No hay productos disponibles en este momento.
          </p>
        )}
      </div>
    </main>
  );
}
