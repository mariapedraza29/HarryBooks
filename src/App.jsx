import React from "react";
import { ItemList } from "./components/ItemList/ItemList";
import { Navbar } from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { Footer } from "./components/Footer/Footer";

export const App = () => {

  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
      <Footer/>
    </ShoppingCartProvider>
    
  );
};