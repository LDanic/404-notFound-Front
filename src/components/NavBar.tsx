import style from "../style/Navbar.module.css";
import logo from "../assets/Logo/Logo/404 not found logoN.png";
import { Link } from "react-router-dom";
type Props = {};

function NavBar({}: Props) {
  return (
    <div className={style.navb}>
      <div className={style.opciones}>
        <Link to="/catalogo" className={style.catalogo}>
          <h3>Catalogo</h3> <p>+1000 estampas</p>
        </Link>
        <div className={style.linea}></div>
        <Link to="/artista" className={style.artistas}>
          <h3>Artistas</h3> <p>+100 artistas</p>
        </Link>
      </div>

      <Link to="/pagPrincipal" className={style.logo}>
        <img src={logo} alt="" />
      </Link>

      <div className={style.icons}>
        <i className={`${style.bi} ${["bi-bag-heart-fill"]}`}></i>
        <div className={style.linea}></div>
        <Link to="/login" className={style.bi}>
          <i className={`${style.bi} ${["bi-person-fill"]}`}></i>
        </Link>
        <div className={style.linea}></div>
        <Link to="/cart" className={style.bi}>
        <i className={`${style.bi} ${["bi-cart-fill"]}`}></i>
        </Link>
        
      </div>
    </div>
  );
}

export default NavBar;
