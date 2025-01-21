// Inicializar el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function getCart() {
  return cart; // Retorna el estado actual del carrito
}

export function addToCart(newItem) {
  cart = [...cart, newItem]; // Agregar el nuevo artículo al carrito
  localStorage.setItem('cart', JSON.stringify(cart)); // Guardar el carrito actualizado en localStorage
}

export function clearCart() {
  cart = []; // Vaciar el carrito
  localStorage.setItem('cart', JSON.stringify(cart)); // Actualizar el localStorage
}
