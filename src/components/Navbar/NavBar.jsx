import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/ShoppingCartContext";
import './Navbar.css'

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to="/" className="LogoTitulo">
        <div className="logo">
          <img className="imagenLogo" src="/public/images/LogoHarryPotter.jpg" alt="HarryPotter-Logo"/>
        </div>
        <hr />
        <div className="titulo">
          <h2>HARRY BOOKS</h2>
        </div>
            
            
      </Link>
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
            <span className="cart-count">{quantity}</span>
            <img src="./public/images/carritoCompras.png" alt="" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};
