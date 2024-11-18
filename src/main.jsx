import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Custom from './components/Custom.jsx'
import './main.css'
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import CatalogoEstampa from "./components/CatalogoEstampa";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Custom/>
  </StrictMode>,
)
