'use client';

import React from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/Productos.module.css";

interface CardProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<CardProps> = ({ id, image, name, price }) => {
  const router = useRouter();

  const handleApartarClick = () => {
    router.push(`/apartados?id=${id}`);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardPrice}>${price.toFixed(2)}</p>
      <button onClick={handleApartarClick} className={styles.cardButton}>
        Apartar
      </button>
    </div>
  );
};

export default ProductCard;
