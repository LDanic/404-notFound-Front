import { useState } from "react";
import DireccionEnvio from "./DireccionEnvio";
import MedioPago from "./MedioPago";
import styles from "../style/MiCuenta.module.css";
import "../style/MiCuenta.module.css";
import user from "../assets/ProfileArtist.png";
interface Usuario {
  nombre: string
  documento: string
  tipoTarjeta: string
}

interface Direccion {
  codigo_postal: number
  nombre_direccion: string
  direccion: string
  detalles_direccion: string
}

interface Tarjeta {
  id: number
  numero: string
  tipo: string
  fechaVencimiento: string
}

const usuarioInicial: Usuario = {
  nombre: "Juan Pérez",
  documento: "1234567890",
  tipoTarjeta: "cc"
}

const direccionInicial: Direccion = {
  codigo_postal: 110111,
  nombre_direccion: "Casa",
  direccion: "Calle 123 #45-67",
  detalles_direccion: "Apartamento 301",
}
const tarjetasIniciales: Tarjeta[] = [{ id: 1, numero: "**** **** **** 1234", tipo: "Visa", fechaVencimiento: "12/25" }]

export default function MiCuenta() {
  const [usuario] = useState<Usuario>(usuarioInicial)
  const [direccion, setDireccion] = useState<Direccion>(direccionInicial)  
  const [tarjetas, setTarjetas] = useState<Tarjeta[]>(tarjetasIniciales)
  const [activeTab, setActiveTab] = useState<"direcciones" | "pagos">("direcciones")

  const actualizarDireccion = (direccionActualizada: Direccion) => {
    setDireccion(direccionActualizada)
  }

  const agregarTarjeta = (nuevaTarjeta: Omit<Tarjeta, "id">) => {
    const id = Math.max(0, ...tarjetas.map((t) => t.id)) + 1
    setTarjetas([...tarjetas, { id, ...nuevaTarjeta }])
  }

  const actualizarTarjeta = (tarjetaActualizada: Tarjeta) => {
    setTarjetas(tarjetas.map((t) => (t.id === tarjetaActualizada.id ? tarjetaActualizada : t)))
  }

  const eliminarTarjeta = (id: number) => {
    setTarjetas(tarjetas.filter((t) => t.id !== id))
  }


  return (
    <div className={styles.container}>
      <div className={styles.userCard}>
        <img src={user} alt="usuario" className={styles.user} />
        <div className={styles.datos}>
          <h3>{usuario.nombre}</h3>
          <p>{usuario.tipoTarjeta}: {usuario.documento}</p>
        </div>
      </div>


      <div className={styles.tabs}>
        <div className={styles.tabList}>
          <button
            className={`${styles.tabButton} ${activeTab === "direcciones" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("direcciones")}
          >
            Direcciones de Envío
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "pagos" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("pagos")}
          >
            Medios de Pago
          </button>
        </div>
        <div className={styles.tabContent}>
          {activeTab === "direcciones" && (
            <DireccionEnvio
              direccion={direccion}
              onActualizar={actualizarDireccion}
            />
          )}
          {activeTab === "pagos" && (
            <MedioPago
              tarjetas={tarjetas}
              onAgregar={agregarTarjeta}
              onActualizar={actualizarTarjeta}
              onEliminar={eliminarTarjeta}
            />
          )}
        </div>
      </div>
    </div>
  );
}
