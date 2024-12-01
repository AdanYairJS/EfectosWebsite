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

  const validateForm = (data: typeof formData) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isPhoneValid = /^\d{10}$/.test(data.phone); // Solo números y exactamente 10 dígitos
    const allFilled = Object.values(data).every((field) => field.trim() !== "");

    return allFilled && emailRegex.test(data.email) && isPhoneValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Solo permitir números en el campo de teléfono
    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    // Validar campos
    setIsValid(validateForm(updatedData));
  };

  const handleGenerateKey = () => {
    if (!isValid) {
      if (!/^\d{10}$/.test(formData.phone)) {
        alert("El número de teléfono debe tener exactamente 10 dígitos.");
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        alert("El correo electrónico no es válido.");
      }
      return;
    }

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
            type="tel"
            name="phone"
            placeholder="Tu teléfono (10 dígitos)"
            value={formData.phone}
            maxLength={10} // Limitar a 10 caracteres
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
            <p>Realiza la transferencia a la cuenta: 4915669522269420</p>
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
