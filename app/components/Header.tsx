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

  const navLinks = [
    { href: "/", label: "INICIO" },
    { href: "/productos", label: "PRODUCTOS" },
    { href: "/apartados", label: "APARTADOS" },
    { href: "/contacto", label: "CONTACTO" },
  ];

  return (
    <header className={styles.headerContainer}>
      <section className={styles.header}>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="Logo del restaurante" className={styles.logo} width={300} height={300} />
        </div>

        {!isMenuOpen && (
          <button className={styles.hamburger} onClick={toggleMenu}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        )}

        {isMenuOpen && (
          <button className={styles.closeButton} onClick={toggleMenu}>
            &times;
          </button>
        )}

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {navLinks.map(({ href, label }) => (
              <li key={href} className={styles.navItem}>
                <Link
                  href={href}
                  className={`${styles.navLink} ${pathname === href ? styles.activeLink : ""
                    }`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <div className={styles.line}></div>
    </header>
  );
};

export default Header;
