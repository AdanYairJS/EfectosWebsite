import React, { useState } from "react";
import styles from "../styles/ModalApartar.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: { name: string; price: number };
}

const ModalApartar: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [generatedKey, setGeneratedKey] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const emailRegex = /\S+@\S+\.\S+/;
    const isPhoneValid = /^\d+$/.test(formData.phone || "");
    const allFilled = Object.values({ ...formData, [name]: value }).every(
      (field) => field.trim() !== ""
    );

    setIsValid(allFilled && emailRegex.test(formData.email) && isPhoneValid);
  };

  const handleGenerateKey = () => {
    setGeneratedKey(`AP-${Math.random().toString(36).substring(2, 8).toUpperCase()}`);
  };

  const handleClose = () => {
    setGeneratedKey("");
    setFormData({ name: "", email: "", address: "", phone: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Apartar Producto</h2>
        <p>Nombre del producto: {product.name}</p>
        <p>Costo total: ${product.price.toFixed(2)}</p>
        <p>Importe de apartado: ${(product.price * 0.3).toFixed(2)}</p>

        <form className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Tu dirección"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Tu teléfono"
            value={formData.phone}
            onChange={handleChange}
          />
        </form>

        {!generatedKey ? (
          <button
            disabled={!isValid}
            onClick={handleGenerateKey}
            className={styles.generateButton}
          >
            Generar Clave
          </button>
        ) : (
          <>
            <p>Clave generada: {generatedKey}</p>
            <button onClick={handleClose} className={styles.completeButton}>
              Completado
            </button>
          </>
        )}

        <button onClick={handleClose} className={styles.cancelButton}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ModalApartar;
