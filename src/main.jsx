import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import Custom from "./components/Custom.jsx";
import "./main.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import CatalogoEstampa from "./components/CatalogoEstampa";
import PagPrincipal from "./components/PagPrincipal";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/pagPrincipal" element={<PagPrincipal />} />
        <Route path="/catalogo" element={<CatalogoEstampa />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </StrictMode>
);
