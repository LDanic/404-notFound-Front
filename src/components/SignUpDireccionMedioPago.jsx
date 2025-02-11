import styles from "../style/SignUp.module.css";
import React, { useState } from "react";
import axios from "axios";

function SignUpDireccionMedioPago() {
  const [direccion, setDireccion] = useState("");
  const [nombreDireccion, setNombreDireccion] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [detalles, setDetalles] = useState("");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [tipoTarjeta, setTipoTarjeta] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      direccion,
      nombreDireccion,
      codigoPostal,
      detalles,
      numeroTarjeta,
      tipoTarjeta,
      fechaVencimiento,
    };

    try {
      const response = await axios.post("http://localhost:8080/api/direccion-medio-pago", datos);
      
      if (response.status === 200) {
        alert("Datos guardados exitosamente");
      }
    } catch (error) {
      console.error("Error al registrar los datos:", error);
      alert("Error al registrar los datos");
    }
  };
  return (
    <div>
      <section className={styles.contenido}>
        <div className={`${styles.mosaico} ${styles["box-fade"]} ${styles.seventh}`}></div>
        <div className={styles.contenidoRegistro}>
          <div className={`${styles.cajaRegistro} ${styles.downFade}`} aria-labelledby="registro">
            <form onSubmit={handleSubmit}>
              <h1 id="registro" className={`${styles.RegistroC} ${styles.titulo} ${styles.boxFade} ${styles.first}`}>
                Dirección
              </h1>
              <label className={`${styles.sub} ${styles.inicial} ${styles.boxFade} ${styles.first}`} htmlFor="direccion">
                Dirección
                <input
                  id="direccion"
                  className={`${styles.nombreC} ${styles.boxFade} ${styles.first}`}
                  type="text"
                  placeholder="Digite su dirección"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required
                />
              </label>
              <label className={`${styles.sub} ${styles.boxFade} ${styles.first}`} htmlFor="nombreDireccion">
                Nombre de la dirección
                <input
                  id="nombreDireccion"
                  className={`${styles.apellidoC} ${styles.boxFade} ${styles.first}`}
                  type="text"
                  placeholder="Digite el nombre de su dirección"
                  value={nombreDireccion}
                  onChange={(e) => setNombreDireccion(e.target.value)}
                  required
                />
              </label>
              <label className={`${styles.sub} ${styles.boxFade} ${styles.second}`} htmlFor="codigoPostal">
                Código postal
                <input
                  id="codigoPostal"
                  className={`${styles.documentoC} ${styles.boxFade} ${styles.second}`}
                  type="text"
                  placeholder="Digite su código postal"
                  value={codigoPostal}
                  onChange={(e) => setCodigoPostal(e.target.value)}
                  required
                />
              </label>
              <label className={`${styles.sub} ${styles.boxFade} ${styles.third}`} htmlFor="detalles">
                Detalles de la dirección:
                <input
                  id="detalles"
                  className={`${styles.correoC} ${styles.boxFade} ${styles.third}`}
                  type="text"
                  placeholder="Digite los detalles de su dirección"
                  value={detalles}
                  onChange={(e) => setDetalles(e.target.value)}
                  required
                />
              </label>

              <h1 id="registro" className={`${styles.RegistroC} ${styles.titulo} ${styles.boxFade} ${styles.first} ${styles.medioPago}`}>
                Medio de pago
              </h1>
              <label className={`${styles.sub} ${styles.inicial} ${styles.boxFade} ${styles.first}`} htmlFor="numeroTarjeta">
                Número de tarjeta
                <input
                  id="numeroTarjeta"
                  className={`${styles.nombreC} ${styles.boxFade} ${styles.first}`}
                  type="text"
                  placeholder="Digite el número de su tarjeta"
                  value={numeroTarjeta}
                  onChange={(e) => setNumeroTarjeta(e.target.value)}
                  required
                />
              </label>
              <label className={`${styles.sub} ${styles.boxFade} ${styles.first}`} htmlFor="tipoTarjeta">
                Tipo de tarjeta
                <input
                  id="tipoTarjeta"
                  className={`${styles.apellidoC} ${styles.boxFade} ${styles.first}`}
                  type="text"
                  placeholder="Digite el tipo de tarjeta"
                  value={tipoTarjeta}
                  onChange={(e) => setTipoTarjeta(e.target.value)}
                  required
                />
              </label>
              <label className={`${styles.sub} ${styles.boxFade} ${styles.second}`} htmlFor="fechaVencimiento">
                Fecha de vencimiento
                <input
                  id="fechaVencimiento"
                  className={`${styles.documentoC} ${styles.boxFade} ${styles.second}`}
                  type="text"
                  placeholder="Digite su fecha de vencimiento"
                  value={fechaVencimiento}
                  onChange={(e) => setFechaVencimiento(e.target.value)}
                  required
                />
              </label>
              <button className={`${styles.registrar} ${styles.boxFade} ${styles.sixth}`} type="submit">
                Guardar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUpDireccionMedioPago;
