'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchProductById, insertApartado } from "@/services/supabaseClient";
import styles from "../styles/ModalApartar.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: number;
}

const ModalApartar: React.FC<ModalProps> = ({ isOpen, onClose, productId }) => {
  const router = useRouter();
  const [product, setProduct] = useState<{
    name: string;
    price: number;
    codigo: string;
  } | null>(null);  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [generatedKey, setGeneratedKey] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await fetchProductById(productId);
      if (productData) {
        setProduct(productData);
      }
    };

    if (isOpen) {
      fetchProduct();
    }
  }, [isOpen, productId]);

  const validateForm = (data: typeof formData) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isPhoneValid = /^\d{10}$/.test(data.phone);
    const allFilled = Object.values(data).every((field) => field.trim() !== "");

    return allFilled && emailRegex.test(data.email) && isPhoneValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    setIsValid(validateForm(updatedData));
  };

  const handleGenerateKey = () => {
    if (!isValid || !product) {
      alert("Completa todos los campos correctamente.");
      return;
    }
    const key = `AP-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setGeneratedKey(key);
  };

  const handleConfirm = async () => {
    if (!generatedKey || !product) {
      alert("Por favor, genera una clave antes de confirmar el apartado.");
      return;
    }

    const payment = product.price * 0.3;

    const success = await insertApartado({
      productCode: product.codigo,
      userName: formData.name,
      email: formData.email,
      address: formData.address,
      phone: formData.phone,
      generatedKey,
      payment,
    });

    if (success) {
      alert("Producto apartado exitosamente.");
      handleClose();
    } else {
      alert("Hubo un error al realizar el apartado.");
    }
  };

  const handleClose = () => {
    setGeneratedKey("");
    setFormData({ name: "", email: "", address: "", phone: "" });
    onClose();
    router.push("/apartados");
  };

  if (!isOpen || !product) return null;

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
            maxLength={10}
            onChange={handleChange}
          />
        </form>

        {!generatedKey ? (
          <button disabled={!isValid} onClick={handleGenerateKey} className={styles.generateButton}>
            Generar Clave
          </button>
        ) : (
          <>
            <p>Clave generada: {generatedKey}</p>
            <p>Realiza la transferencia a la cuenta: 4915669522269420</p>
            <button onClick={handleConfirm} className={styles.completeButton}>
              Confirmar
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
