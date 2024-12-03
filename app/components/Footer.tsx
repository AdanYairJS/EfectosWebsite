import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a href="https://www.facebook.com/efectosmacroplaza?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
          <FaFacebookF className={styles.socialIcon} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
          <FaInstagram className={styles.socialIcon} />
        </a>
        <Link href="/contacto" passHref legacyBehavior>
          <a className={styles.footerLink}>
            <FaEnvelope className={styles.socialIcon} />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
