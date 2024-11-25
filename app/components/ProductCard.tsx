import React from "react";
import styles from '../styles/Productos.module.css'; 

interface CardProps {
  image: string;
  name: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, name, price }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.cardImage}/>
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardPrice}>{price}</p>
      <button className={styles.cardButton}>Apartar</button>
    </div>
  );
};

export default Card;
