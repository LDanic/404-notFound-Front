import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartUtils } from '../utils/carUtils';
import style from "../style/Checkout.module.css";

function Checkout() {
  const navigate = useNavigate();
  const cart = cartUtils.getCart();
  const total = cart.reduce((sum, item) => sum + ((item.shirtPrice+item.stampPrice) * item.quantity), 0);

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

  const handleCheckout = async () => {  
    // Fetch the cart data (assuming it's stored in localStorage)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    try {
      // Send the cart data to the backend
      const response = await fetch('http://localhost:8080/clientes/comprarPedido', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart), // Send the cart data as JSON
      });
  
      // Leer la respuesta como texto
      const textResponse = await response.text();

      // Verificar si la respuesta contiene "exitosamente"
      if (textResponse.includes("exitosamente")) {
        console.log('Orden creada con éxito:', textResponse);
        alert('FELICIDADES, TUS CAMISETAS ESTARÁN EN CAMINO MUY PRONTO.');

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
        navigate('/order-success'); // Redirigir a la página de éxito
        localStorage.removeItem('cart');

      } else {
        console.log('Error durante el pago:', textResponse);
        alert('Error durante el pago:', textResponse);
      }
    } catch (error) {
      alert('Network error. Please check your connection.');
    }


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
                  <p className={style.itemPrice}>${((item.shirtPrice+item.stampPrice) * item.quantity).toFixed(0)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={style.orderTotal}>
            <span>Total:</span>
            <span>${total.toFixed(0)}</span>
          </div>
        </div>
  
        <form className={style.checkoutForm}>
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
  
          <button type="submit" className={style.submitButton} onClick={handleCheckout}>
            Confirmar Pedido
          </button>
        </form>
      </div>
    </div>
  );
  
}

export default Checkout;