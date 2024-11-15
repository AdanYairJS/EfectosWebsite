"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Logo del restaurante" className={styles.logo} width={300} height={300} />
      </div>
      
      {/* Botón de menú hamburguesa */}
      {!isMenuOpen && (
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      )}

      {/* Botón de cierre (X) */}
      {isMenuOpen && (
        <button className={styles.closeButton} onClick={toggleMenu}>
          &times;
        </button>
      )}

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink} onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/menu" className={styles.navLink} onClick={closeMenu}>
              Menú
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contacto" className={styles.navLink} onClick={closeMenu}>
              Contacto
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/promociones" className={styles.navLink} onClick={closeMenu}>
              Promociones
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
