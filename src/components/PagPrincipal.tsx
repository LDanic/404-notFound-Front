import style from "../style/PagPrincipal.module.css";
import Slider1 from "../assets/Slider/slider1.png";
import Slider2 from "../assets/Slider/slider2.png";
import { Link } from "react-router-dom";

function PagPrincipal() {
  const imgSlider = [Slider1, Slider2];
  const contCard = [
    {
      text: "Disney",
      img: "https://static.kiabi.es/images/camiseta-disney-blanco-zf032_2_hd1.jpg?width=800",
    },
    {
      text: "Navidad",
      img: "https://www.kiabi.es/images/camiseta-de-navidad-rojo-zh518_5_hd1.jpg",
    },
    {
      text: "Halloween",
      img: "https://http2.mlstatic.com/D_NQ_NP_638717-MCO71804642477_092023-O.webp",
    },
  ];

  return (
    <div>
      <div className={style.espacio70}></div>

      <div className={style.contCards}>
        {contCard.map((cont) => (
          <div className={style.carta}>
            <img src={cont.img} alt="" />
            <div className={style.infoCard}>
              <h4 className={style.textCard}>{cont.text}</h4>
              <Link to="/catalogo">
                <button className={style.btnCard}>Ver más</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PagPrincipal;
