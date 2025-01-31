import styles from "../style/SignUp.module.css";
import React, { useState } from "react";

function SignUp() {
  const validarContraseña = (e) => {
    e.preventDefault();
    const password = document.getElementById("contra").value;
    const confirmPassword = document.getElementById("validacion").value;

    if (password !== confirmPassword) {
      document.getElementById("mensaje_error").textContent =
        "Las contraseñas no coinciden.";
      return false;
    }

    document.getElementById("mensaje_error").textContent = "";
    alert("Registro exitoso");
    return true;
  };

  const [password, setPassword] = useState("");
  const [longitudValida, setLongitudValida] = useState(false);
  const [tieneNumero, setTieneNumero] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    // Validar longitud mínima (8 caracteres)
    setLongitudValida(passwordValue.length >= 8);

    // Validar si contiene al menos un número
    setTieneNumero(/\d/.test(passwordValue));
  };

  return (
    <div>
      <section className={styles.contenido}>
        <div
          className={`${styles.mosaico} ${styles["box-fade"]} ${styles.seventh}`}
        ></div>
        <div className={styles.contenidoRegistro}>
          <div
            className={`${styles.cajaRegistro} ${styles.downFade}`}
            aria-labelledby="registro"
          >
            <form onSubmit={validarContraseña}>
              <h1
                id="registro"
                className={`${styles.RegistroC} ${styles.titulo} ${styles.boxFade} ${styles.first}`}
              >
                Registro de usuario
              </h1>
              <label
                className={`${styles.sub} ${styles.inicial} ${styles.boxFade} ${styles.first}`}
                htmlFor="nombre"
              >
                Nombre
                <input
                  id="nombre"
                  className={`${styles.nombreC} ${styles.boxFade} ${styles.first}`}
                  type="text"
                  placeholder="Digite su nombre"
                  required
                />
              </label>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.first}`}
                htmlFor="apellido"
              >
                Apellido
                <input
                  id="apellido"
                  className={`${styles.apellidoC} ${styles.boxFade} ${styles.first}`}
                  type="text"
                  placeholder="Digite su apellido"
                  required
                />
              </label>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.second}`}
                htmlFor="tipoDocumento"
              >
                Tipo de documento de identidad
                <select
                  id="tipoDocumento"
                  className={`${styles.tipoDocumentoC} ${styles.boxFade} ${styles.second}`}
                  required
                >
                  <option value="CC">Cédula de ciudadanía</option>
                  <option value="TE">Tarjeta de extranjería</option>
                  <option value="PA">Pasaporte</option>
                </select>
              </label>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.second}`}
                htmlFor="documento"
              >
                Documento de identidad
                <input
                  id="documento"
                  className={`${styles.documentoC} ${styles.boxFade} ${styles.second}`}
                  type="text"
                  placeholder="Digite su documento de identidad"
                  required
                />
              </label>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.third}`}
                htmlFor="correo"
              >
                Correo
                <input
                  id="correo"
                  className={`${styles.correoC} ${styles.boxFade} ${styles.third}`}
                  type="email"
                  placeholder="Digite su correo"
                  required
                />
              </label>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.third}`}
                htmlFor="usuario"
              >
                Usuario
                <input
                  id="usuario"
                  className={`${styles.usuarioC} ${styles.boxFade} ${styles.third}`}
                  type="text"
                  placeholder="Digite su usuario"
                  required
                />
              </label>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.third}`}
                htmlFor="contra"
              >
                Contraseña
                <input
                  id="contra"
                  className={`${styles.contraC} ${styles.boxFade} ${styles.third}`}
                  type="password"
                  placeholder="Digite su contraseña"
                  pattern="^(?=.*\d)[A-Za-z\d]{8,}$"
                  onChange={handlePasswordChange}
                  required
                />
              </label>
              <ul
                id="requisitos"
                className={styles.requisitos}
                style={{
                  display: longitudValida && tieneNumero ? "none" : "block",
                }}
              >
                <li
                  id="longitud"
                  className={longitudValida ? styles.cumplido : ""}
                >
                  Debe tener 8 o más caracteres
                </li>
                <li id="numero" className={tieneNumero ? styles.cumplido : ""}>
                  Debe contener al menos un número
                </li>
              </ul>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.fourth}`}
                htmlFor="validacion"
              >
                Confirme su contraseña
                <input
                  id="validacion"
                  className={`${styles.validacionC} ${styles.boxFade} ${styles.fourth}`}
                  type="password"
                  placeholder="Digite nuevamente su contraseña"
                  required
                />
              </label>
              <span id="mensaje_error" className={styles.error}></span>
              <br />
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.fifth}`}
                htmlFor="tipo"
              >
                ¿Qué quieres ser?
                <select
                  id="tipo"
                  className={`${styles.tipoC} ${styles.boxFade} ${styles.fifth}`}
                  required
                >
                  <option value="cliente">Cliente</option>
                  <option value="artista">Artista</option>
                </select>
              </label>
              <label
                className={`${styles.sub} ${styles.final} ${styles.boxFade} ${styles.sixth}`}
                htmlFor="terminos"
              >
                <input
                  id="terminos"
                  className={`${styles.terminosC} ${styles.boxFade} ${styles.sixth}`}
                  type="checkbox"
                  required
                />
                Acepto las condiciones del servicio de 404 Not Found
              </label>
              <button
                className={`${styles.registrar} ${styles.boxFade} ${styles.sixth}`}
                type="submit"
              >
                Registrar
              </button>
              <h3
                className={`${styles.sesion} ${styles.boxFade} ${styles.sixth}`}
              >
                ¿Ya tienes cuenta? <a href="">Inicia sesión</a>
              </h3>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
