import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartUtils } from '../utils/carUtils';
import style from "../style/Checkout.module.css";

function Checkout() {
  const navigate = useNavigate();
  const cart = cartUtils.getCart();
  const total = cart.reduce((sum, item) => sum + (item.total * item.quantity), 0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderSummary = {
      items: cart,
      total,
      customerInfo: {
        name: formData.name,
        email: formData.email,
        address: formData.address
      },
      orderId: Math.random().toString(36).substr(2, 9)
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(orderSummary));
    localStorage.removeItem('cart');
    navigate('/order-success');
  };

  return (
    <div className={style.checkoutPage}>
      <div className={style.checkoutContainer}>
        <div className={style.checkoutSummary}>
          <h2>Resumen del Pedido</h2>
          <div className={style.orderItems}>
            {cart.map((item) => (
              <div key={item.id} className={style.orderItem}>
                <img src={item.previewImage} alt={item.name} className={style.itemThumbnail} />
                <div className={style.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>Talla: {item.selectedSize || 'M'}</p>
                  <p>Tela: {item.selectedFabric || 'Lana'}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p className={style.itemPrice}>${(item.total * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={style.orderTotal}>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
  
        <form onSubmit={handleSubmit} className={style.checkoutForm}>
          <h2>Información de Envío</h2>
          <div className={style.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={style.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={style.formGroup}>
            <input
              type="text"
              name="address"
              placeholder="Dirección de envío"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={style.formRow}>
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Código Postal"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
            />
          </div>
  
          <h2>Información de Pago</h2>
          <div className={style.formGroup}>
            <input
              type="text"
              name="cardNumber"
              placeholder="Número de tarjeta"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={style.formRow}>
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/AA"
              value={formData.expiryDate}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
  
          <button type="submit" className={style.submitButton}>
            Confirmar Pedido
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default Checkout;