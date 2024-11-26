import styles from '../styles/Contacto.module.css';

const Contacto = () => {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contactContainer}>
        {/* Información de contacto */}
        <div className={styles.contactInfo}>
          <h1 className={styles.contactTitle}>Contacto</h1>
          <p>
            ¿Tienes alguna pregunta o necesitas ayuda para elegir el accesorio perfecto? En Efectos estamos aquí para ayudarte. Completa el formulario a continuación o envíanos un correo directamente. Nos encanta escuchar a nuestros clientes y resolver cualquier duda que tengan.
          </p>
          <p>
            Para consulta directa, contáctanos a: <strong>contacto@efectos.com</strong>
          </p>
        </div>

        {/* Formulario de contacto */}
        <form className={styles.contactForm}>
          <input type="text" placeholder="NOMBRE" className={styles.inputField} />
          <input type="email" placeholder="E-MAIL" className={styles.inputField} />
          <input type="text" placeholder="ASUNTO" className={styles.inputField} />
          <textarea placeholder="MENSAJE" className={styles.textArea}></textarea>
          <button type="submit" className={styles.submitButton}>ENVIAR</button>
        </form>
      </section>
    </main>
  );
};

export default Contacto;
