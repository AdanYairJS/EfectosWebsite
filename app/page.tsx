import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      {/* Imagen grande */}
      <section className={styles.hero}>
        <img src="/HOME/Portada.png" alt="Bolsa principal" className={styles.heroImage} />
      </section>

      {/* Texto y botón */}
      <section style={{display:'flex', flexDirection: 'row'}}>
        <div className={styles.description}>
          <p>
            En Efectos encontrarás una exclusiva selección de bolsas diseñadas
            para cada estilo, además de pequeños tesoros y accesorios únicos.
            Descubre el complemento perfecto para cualquier ocasión y añade un
            toque especial a tu día.
          </p>
          <a href="#" className={styles.button}>CONOCE NUESTROS PRODUCTOS</a>
        </div>

        {/* Imágenes pequeñas */}
        <div className={styles.products}>
          <div className={styles.product}><img src="/HOME/wkjbcd.png" alt="Bolsa 2" /></div>
          <div className={styles.product}><img src="/HOME/cmmc.png" alt="Bolsa 3" /></div>
          <div className={styles.product}><img src="/HOME/bote.png" alt="Bolsa 4" /></div>
        </div>
      </section>
    </main>
  );
};

export default Home;
