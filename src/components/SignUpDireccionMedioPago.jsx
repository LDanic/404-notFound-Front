import styles from "../style/SignUp.module.css";
import React, { useState } from "react";

function SignUpDireccionMedioPago() {


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
            <form>
              <h1
                id="registro"
                className={`${styles.RegistroC} ${styles.titulo} ${styles.boxFade} ${styles.first}`}
              >
                Dirección
              </h1>
              <label
                className={`${styles.sub} ${styles.inicial} ${styles.boxFade} ${styles.first}`}
                htmlFor="direccion"
              >
                Dirección
                <input
                  id="direccion"
                  className={`${styles.nombreC} ${styles.boxFade} ${styles.first}`}
                  type="text"
                  placeholder="Digite su direccion"
                  required
                />
              </label>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.first}`}
                htmlFor="Nombre de la direccion"
              >
                Nombre de la dirección
                <input
                  id="nombre"
                  className={`${styles.apellidoC} ${styles.boxFade} ${styles.first}`}
                  type="text"
                  placeholder="Digite el nombre de su dirección"
                  required
                />
              </label>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.second}`}
                htmlFor="codigo postal"
              >
                Código postal
                <input
                  id="codigoPostal"
                  className={`${styles.documentoC} ${styles.boxFade} ${styles.second}`}
                  type="text"
                  placeholder="Digite su codigo postal"
                  required
                />
              </label>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.third}`}
                htmlFor="detalles"
              >
                Detalles de la dirección:
                <input
                  id="detalles"
                  className={`${styles.correoC} ${styles.boxFade} ${styles.third}`}
                  type="email"
                  placeholder="Digite los detalles de su direccion"
                  required
                />
              </label>

              <h1
                id="registro"
                className={`${styles.RegistroC} ${styles.titulo} ${styles.boxFade} ${styles.first}`}
              >
                Medio de pago
              </h1>
              <label
                className={`${styles.sub} ${styles.inicial} ${styles.boxFade} ${styles.first}`}
                htmlFor="numero"
              >
                Número
                <input
                  id="numero_tarjeta"
                  className={`${styles.nombreC} ${styles.boxFade} ${styles.first}`}
                  type="text"
                  placeholder="Digite el número de si tarjeta"
                  required
                />
              </label>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.first}`}
                htmlFor="Tipo de tarjeta"
              >
                Tipo de tarjeta:
                <input
                  id="tipo_tarjeta"
                  className={`${styles.apellidoC} ${styles.boxFade} ${styles.first}`}
                  type="text"
                  placeholder="Digite el tipo de tarjeta"
                  required
                />
              </label>
              <label
                className={`${styles.sub} ${styles.boxFade} ${styles.second}`}
                htmlFor="fecha de vencimiento"
              >
                Fecha de vencimiento
                <input
                  id="f_vencimiento"
                  className={`${styles.documentoC} ${styles.boxFade} ${styles.second}`}
                  type="text"
                  placeholder="Digite su fecha de vencimiento"
                  required
                />
              </label>
              <button
                className={`${styles.registrar} ${styles.boxFade} ${styles.sixth}`}
                type="submit"
              >
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
