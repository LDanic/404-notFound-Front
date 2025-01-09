import "../style/Navbar.css";
import logo from "../assets/Logo/Logo/404 not found logoN.png";
import { Link } from "react-router-dom";
type Props = {};

function NavBar({}: Props) {
  return (
    <div className="navb ">
      <Link to="/catalogo" className="catalogo">Catalogo</Link>
      <Link to="/pagPrincipal" className="logo">
        <img src={logo} alt="" />
      </Link>
      <div className="icons">
        <i className="bi bi-bag-heart-fill"></i>
        <Link to="/login">
          <i className="bi bi-person-fill"></i>
        </Link>
        <i className="bi bi-cart-fill"></i>
      </div>
    </div>
  );
}

export default NavBar;
