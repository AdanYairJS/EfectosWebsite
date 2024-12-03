import styles from '../styles/Contacto.module.css';

const Contacto = () => {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contactContainer}>
        {/* Información de contacto */}
        <div className={styles.contactInfo}>
          <h1 className={styles.contactTitle}>Contacto</h1>
          <p>
            ¡Estamos aquí para ti! Visítanos en nuestra tienda física o escríbenos para cualquier duda o consulta. 
          </p>
          <p>
            ¿Buscas el accesorio perfecto? ¡Déjanos ayudarte a encontrarlo! 
          </p>
          <p>
            <strong>Horarios de atención: </strong>Lunes a Viernes de 11:00 AM a 2:00 PM y de 3:00 PM a 9:00 PM.
          </p>
          <p>
            <strong>Dirección:</strong> Al interior del centro comercial Macroplaza Oaxaca local 8 planta baja.
          </p>
          <p>
            <strong>Teléfono:</strong> (+52) 1 951 408 6830
          </p>
          <p>
            <strong>Correo Electrónico:</strong> contacto@efectos.com
          </p>
        </div>
        {/* Mapa */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.3766922170903!2d-96.69709312507291!3d17.068008583765685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c723c5c2a05369%3A0x6bada18c9f801410!2sMacroplaza!5e1!3m2!1ses-419!2smx!4v1733025119269!5m2!1ses-419!2smx"
            width="100%" 
            height="100%" 
            allowFullScreen={true} 
            loading="lazy" 
            title="Mapa del restaurante"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
