import style from "../style/loginStyle.module.css";
import user from "../assets/LoginSignup/User.png";
import robot from "../assets/LoginSignup/Robot.png";
import muestra from "../assets/LoginSignup/404Muestra.jpg";
import React, { useState } from "react";
import axios from "axios";

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState<string>("");
  const [contrasena, setContrasena] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Función para manejar el evento de login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Enviamos la solicitud GET al backend
      const response = await axios.get<boolean>(
        "http://localhost:8080/clientes/login",
        {
          params: {
            usuario: usuario,
            contrasena: contrasena,
          },
        }
      );

      // Verificamos la respuesta del backend
      if (response.data) {
        alert("Login exitoso");
        // Redirigir a otra página si es necesario, por ejemplo:
        // window.location.href = '/dashboard';
      } else {
        setError("Usuario o contraseña incorrectos");
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      setError("No se pudo conectar con el servidor");
    }
  };

  return (
    <div>
      <div className={style.div70px}></div>
      <section className={style.contenido}>
        <div className={`${style.sesion} ${style.downFade}`}>
          <img className={style.robot} src={robot} alt="Robot" />
          <form action="" method="" onSubmit={handleLogin}>
            <fieldset className={style.formulario}>
              <legend className={`${style.leyenda} ${style.boxFade} ${style.first}`}>
                <img
                  style={{ width: "40px" }}
                  className={style.leyenda}
                  src={user}
                  alt="User"
                />
              </legend>
              <select
                className={`${style.sujeto} ${style.boxFade} ${style.first}`}
                name=""
                required
              >
                <option>¿Qué eres?</option>
                <option value="cliente">Cliente</option>
                <option value="artista">Artista</option>
                <option value="administrador">Administrador</option>
              </select>
              <label
                className={`${style.sub} ${style.inicial} ${style.boxFade} ${style.first}`}
                htmlFor="usuario"
              >
                Usuario
                <input
                  className={`${style.boxFade} ${style.second} ${style.usuario}`}
                  type="text"
                  name=""
                  placeholder="Introduzca su usuario"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  required
                />
              </label>
              <label
                className={`${style.sub} ${style.boxFade} ${style.third}`}
                htmlFor="contra"
              >
                Contraseña
                <input
                  type="password"
                  className={`${style.boxFade} ${style.third} ${style.contra}`}
                  name=""
                  placeholder="Introduzca su contraseña"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  required
                />
              </label>
              <button
                className={`${style.inicioSesion} ${style.boxFade} ${style.fourth}`}
                type="submit"
              >
                Iniciar sesión
              </button>
              <h3 className={`${style.registro} ${style.boxFade} ${style.fourth}`}>
                ¿No te has registrado? <a href="">Regístrate</a>
              </h3>
            </fieldset>
          </form>
        </div>
        <div className={style.modelo}>
          <img className={`${style.muestra} ${style.boxFade} ${style.fifth}`} src={muestra} alt="Muestra" />
        </div>
      </section>
    </div>
  );
};

export default Login;
