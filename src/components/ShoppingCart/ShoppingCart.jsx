import React, { useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext";
import './ShoppingCart.css'

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="gen">
      <div className="cart-container">
        <div>
          <p>Carrito de Compras</p>
        </div>
        <div className="contains">
          <div>Items in cart: {quantity}</div>
          <div>Total: ${totalPrice}</div>
        </div>
        <div className="botones">
          <button onClick={() => alert("Gracias por tu compra. Tu pedido ha sido procesado.") }>Checkout</button>
        </div>
      </div>
    </div>
  );
};
