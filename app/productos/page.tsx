import { createClient } from '@/utils/supabase/server';
import styles from '../styles/Productos.module.css'

export default async function Productos() {
  const supabase = await createClient(); // Espera a que la promesa se resuelva
  const { data: productos } = await supabase.from("productos").select();

  // return <pre>{JSON.stringify(productos, null, 2)}</pre>;
  return (
    <main>
      <section className={styles.section_header}>
        <h2 className={styles.title}>Bolsas</h2>
        <p className={styles.text}>Descubre nuestra colección de bolsas únicas para cada ocasión. Con nuestro sistema de apartado, puedes reservar tus favoritas con facilidad.</p>
        <div></div>
      </section>

    </main>
  );
}
