//import React from "react";
import { Link } from "react-router-dom";
import style from "../style/CatalogoEstampampa.module.css";
import { useState, useEffect } from "react";
type Props = {};

interface Camisa {
  id: number;
  imagen: string;
  nombre: string;
  precio: string;
  idTema: string;
}

function CatalogoEstampa({}: Props) {
  const [temas, setTemas] = useState<{ id: number; nombre: string }[]>([]);

  
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => setTemas(data));
  }, []);

  //Funcionamientod el filtor
  const [inputValue, setInputValue] = useState("");

  const filtroSeleccionado = (value: string) => {
    setInputValue(value);
  };
  return (
    <div className="container">
      <div className="filtro-container">
        <p>Categorias: </p>

        <div>
          {temas.map((tema) => (
            <button
              className="tema"
              key={tema.id}
              onClick={() => filtroSeleccionado(tema.nombre)}
            >
              {tema.nombre}
            </button>
          ))}
          <button className="xTema tema" onClick={() => filtroSeleccionado("")}>
            <i className="bi bi-x"></i>
          </button>
        </div>
      </div>
      {contCatalogo(inputValue)}
    </div>
  );
}

function contCatalogo(value: string) {
  const camisas = [
    {
      id: 1,
      imagen:
        "https://raw.githubusercontent.com/LDanic/404-not-found-assets/refs/heads/main/404NotFound.png",
      nombre: "400 NOT FOUND",
      precio: "$10.000",
      idTema: "Halloween",
    },
    {
      id: 2,
      imagen:
        "https://raw.githubusercontent.com/LDanic/404-not-found-assets/refs/heads/main/wall-eandEve.png",
      nombre: "Walle & Eva",
      precio: "$12.000",
      idTema: "Disney",
    },
    {
      id: 3,
      imagen:
        "https://raw.githubusercontent.com/LDanic/404-not-found-assets/7d1aa6c10820ae9bf3adfd9e4c55e3e789e412ca/furia.png",
      nombre: "Furia",
      precio: "$12.000",
      idTema: "Disney",
    },
    {
      id: 4,
      imagen:
        "https://raw.githubusercontent.com/LDanic/404-not-found-assets/refs/heads/main/404NotFound.png",
      nombre: "400 NOT FOUND",
      precio: "$10.000",
      idTema: "Halloween",
    },
    {
      id: 5,
      imagen:
        "https://raw.githubusercontent.com/LDanic/404-not-found-assets/refs/heads/main/wall-eandEve.png",
      nombre: "Walle & Eva",
      precio: "$12.000",
      idTema: "Navidad",
    },
    {
      id: 6,
      imagen:
        "https://raw.githubusercontent.com/LDanic/404-not-found-assets/7d1aa6c10820ae9bf3adfd9e4c55e3e789e412ca/furia.png",
      nombre: "Intensamiente furia",
      precio: "$12.000",
      idTema: "Navidad",
    },
  ];

  let camisasFiltradas = camisas;

  if (value !== "") {
    camisasFiltradas = [];
    camisas.forEach((camisa) => {
      if (value === camisa.idTema) {
        camisasFiltradas.push(camisa);
      }
    });
  }

  return (
    <div className={style.catalogoContainer}>
      {camisasFiltradas.map((camisa) => (
        <div className={style.carta} key={camisa.id}>
          <div className={style.contimagen}>
            <img
              src={camisa.imagen}
              alt={camisa.nombre}
              className={style.imagen}
            />
            <div className={style.contBtn}>
            <Link to="/custom" state={camisa}>
                <button className={style.btnCamisa}>Configurar camisa</button>
              </Link>
            </div>
          </div>
          <h2 className={style.nombre}>{camisa.nombre}</h2>
          <p className={style.precio}>{camisa.precio}</p>
          <i className={`${style.bi} ${style["bi-suit-heart-fill"]}`}></i>
        </div>
      ))}
    </div>
  );
}

export default CatalogoEstampa;
