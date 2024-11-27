import styles from "../styles/Apartados.module.css";

export default async function Index() {
  const steps = [
    "Selecciona el producto que deseas apartar desde la sección de productos y haz click en el botón de 'Apartar'.",
    "Rellena el formulario con tus datos.",
    "Da click en el botón de 'Generar Clave'",
    "Coloca la clave en el concepto de tu transferencia",
    "Espera a que un operador verifique tu pago y recibe la confimacion vía watsop",
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
              En Efectos ofrecemos un sistema de apartado para que puedas reservar tus productos favoritos sin preocuparte por la disponibilidad. Asegura ese accesorio que tanto te gusta y recógelo cuando estés listo.
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
          <a href="#" className={styles.button}>APARTAR AHORA</a>
        </section>
      </main>
    </>
  );
}
