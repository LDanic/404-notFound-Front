import { getCart } from '../utils/carUtils';

function Cart() {
  const cart = getCart();

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h2>{item.stamp.name}</h2>
              <p>Color: {item.selectedColor}</p>
              <p>Modelo: {item.selectedModel}</p>
              <p>Tela: {item.selectedFabric}</p>
              <p>Talla: {item.selectedSize}</p>
              <p>Total: ${item.total}</p>
              <p>Posición: X - {item.position.x}, Y - {item.position.y}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
