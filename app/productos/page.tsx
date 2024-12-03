import { fetchProducts } from "@/services/supabaseClient";
import styles from "../styles/Productos.module.css";
import Card from "../components/ProductCard";

export default async function Productos() {
  const products = await fetchProducts();

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
          <p className={styles.noProductsText}>No hay productos disponibles en este momento.</p>
        )}
      </div>
    </main>
  );
}
