import styles from "../styles/Apartados.module.css";

export default async function Index() {
  const steps = [
    "Selecciona el producto que deseas apartar.",
    "Haz clic en el botón 'Apartar'.",
    "Llena el formulario con tus datos.",
    "Confirma tu apartado y espera la notificación.",
  ];

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
                En nuestra tienda, puedes apartar tus productos favoritos con
                facilidad. Sigue los pasos indicados y asegura tus artículos
                preferidos antes de que se agoten.
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
        </section>
      </main>
    </>
  );
}
