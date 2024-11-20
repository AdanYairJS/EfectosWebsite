import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      {/* Imagen grande */}
      <section className={styles.hero}>
        <img src="/HOME/xxx.png" alt="Bolsa principal" className={styles.heroImage} />
      </section>

      {/* Texto y botón */}
      <section className={styles.description}>
        <p>
          En Efectos encontrarás una exclusiva selección de bolsas diseñadas
          para cada estilo, además de pequeños tesoros y accesorios únicos.
          Descubre el complemento perfecto para cualquier ocasión y añade un
          toque especial a tu día.
        </p>
        <a href="#" className={styles.button}>CONOCE NUESTROS PRODUCTOS</a>
      </section>

      {/* Imágenes pequeñas */}
      <section className={styles.products}>
        <div className={styles.product}><img src="/HOME/wkjbcd.png" alt="Bolsa 2" /></div>
        <div className={styles.product}><img src="/HOME/cmmc.png" alt="Bolsa 3" /></div>
        <div className={styles.product}><img src="/HOME/cdcdcdcd.png" alt="Bolsa 4" /></div>
      </section>
    </main>
  );
};

export default Home;
