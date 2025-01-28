import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import Custom from "./components/Custom.jsx";
import "./main.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import CatalogoEstampa from "./components/CatalogoEstampa";
import PagPrincipal from "./components/PagPrincipal";
import Cart from "./components/Cart";
import SignUp from "./components/SignUp.jsx"
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PagPrincipal />} />
        <Route path="/catalogo" element={<CatalogoEstampa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/pagPrincipal" element={<PagPrincipal/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  </StrictMode>
);
