import { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importar íconos de react-icons
import styles from '../styles/Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Enlace a Facebook */}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
          <FaFacebookF className={styles.socialIcon} />
        </a>

        {/* Enlace a Instagram */}
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
          <FaInstagram className={styles.socialIcon} />
        </a>

        {/* Enlace al correo electrónico */}
        <a href="" className={styles.footerLink}>
          <FaEnvelope className={styles.socialIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
