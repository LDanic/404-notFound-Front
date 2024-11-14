//import React from "react";
import "../style/CatalogoEstampampa.css";
type Props = {};

function CatalogoEstampa({}: Props) {
  const camisas = [
    {
      id: 1,
      imagen:
        "https://w7.pngwing.com/pngs/292/708/png-transparent-dead-tongue-emoji-emoticon-emoji-icon-thumbnail.png",
      nombre: "400 NOT FOUND",
      precio: "$10.000", idTema: "Halloween"
    },
    {
      id: 2,
      imagen:
        "https://w7.pngwing.com/pngs/949/210/png-transparent-wall-e-and-eva-thumbnail.png",
      nombre: "Walle & Eva",
      precio: "$12.000", idTema: "Disney"
    },
    {
      id: 3,
      imagen:
        "https://w7.pngwing.com/pngs/72/539/png-transparent-anger-disgust-emotion-pixar-sadness-intensamente-child-orange-film-thumbnail.png",
      nombre: "Intensamiente furia",
      precio: "$12.000", idTema: "Disney"
    },
    {
      id: 4,
      imagen:
        "https://w7.pngwing.com/pngs/292/708/png-transparent-dead-tongue-emoji-emoticon-emoji-icon-thumbnail.png",
      nombre: "400 NOT FOUND",
      precio: "$10.000", idTema: "Halloween"
    },
    {
      id: 5,
      imagen:
        "https://w7.pngwing.com/pngs/949/210/png-transparent-wall-e-and-eva-thumbnail.png",
      nombre: "Walle & Eva",
      precio: "$12.000", idTema: "Navidad"
    },
    {
      id: 6,
      imagen:
        "https://w7.pngwing.com/pngs/72/539/png-transparent-anger-disgust-emotion-pixar-sadness-intensamente-child-orange-film-thumbnail.png",
      nombre: "Intensamiente furia",
      precio: "$12.000", idTema: "Navidad"
    },
  ];
  const temas = [
    { id: 1, nombre: "Disney" },
    { id: 1, nombre: "Halloween" },
    { id: 1, nombre: "Navidad" },
  ];
  return (
    <div className="container">
      <div className="filtro-container">
        <p>Categorias: </p>
        <div>
        {temas.map((tema) => (
          <button className="tema" key={tema.id}>
            {tema.nombre}
          </button>
        ))}
        </div>
      </div>
      <div className="catalogo-container">
        {camisas.map((camisa) => (
          <div className="carta" key={camisa.id}>
            <div className="contimagen">
              <img src={camisa.imagen} alt={camisa.nombre} className="imagen" />
              <div className="contBtn">
                <button className="btn-camisa">Configurar camisa</button>
              </div>
            </div>
            <h2 className="nombre">{camisa.nombre}</h2>
            <p className="precio">{camisa.precio}</p>
            <i className="bi bi-suit-heart-fill"></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogoEstampa;
