import "../style/loginStyle.css";
import logo from "../assets/logo.png";
import userIcon from "../assets/User.png";
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
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      setError("No se pudo conectar con el servidor");
    }
  };

  return (
    <div>
      {/* Encabezado */}
      <header>
        <img src={logo} alt="Logo de la Tienda" style={{ height: "80px" }} />
      </header>

      {/* Contenido principal */}
      <main>
        <div className="box-login downFade">
          <div id="formContent">
            <h2 className="active">Iniciar sesión</h2>
            <div>
              <img src={userIcon} id="icon" alt="User Icon" />
            </div>
            <form method="post">
              <input
                type="text"
                id="login"
                className="box-fade second"
                name="k_correo"
                placeholder="Usuario"
                required
              />
              <input
                type="password"
                id="password"
                className="box-fade third"
                name="k_contraseña"
                placeholder="Contraseña"
                required
              />
              <input
                type="submit"
                className="box-fade fourth"
                value="Iniciar sesión"
              />
            </form>
            <div id="formFooter">
              <a className="footer" href="#">
                Registrarse
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Pie de página */}
      <footer>
        <p>&copy; 2024 Tienda de Camisetas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Login;
