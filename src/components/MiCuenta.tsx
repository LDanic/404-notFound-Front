import { useState } from "react";
import DireccionEnvio from "./DireccionEnvio";
import MedioPago from "./MedioPago";
import styles from "../style/MiCuenta.module.css";
import "../style/MiCuenta.module.css";
import user from "../assets/ProfileArtist.png";
import { useEffect } from "react";
interface Usuario {
  nombre: string
  numeroId: string
  apellido: string
  tipoId: string
}

interface Direccion {
  codigo_postal: number
  nombre_direccion: string
  direccion: string
  detalles_direccion: string
}

interface Tarjeta {
  id: number
  numeroTarjeta: string
  tipoTarjeta: string
  fechaVencimiento: string
}



const usuarioInicial: Usuario = {
  nombre: "Juan",
  apellido: "Pérez",
  numeroId: "1234567890",
  tipoId: "cc"
}

const direccionInicial: Direccion = {
  codigo_postal: 110111,
  nombre_direccion: "Casa",
  direccion: "Calle 123 #45-67",
  detalles_direccion: "Apartamento 301",
}
const tarjetasIniciales: Tarjeta[] = [{ id: 1, numeroTarjeta: "**** **** **** 1234", tipoTarjeta: "Visa", fechaVencimiento: "12/25" }]

export default function MiCuenta() {

  const [direccion, setDireccion] = useState<Direccion>(direccionInicial) 
  const [direcciones, setDirecciones] = useState<Direccion[]>([]);
 
  const [tarjetas, setTarjetas] = useState<Tarjeta[]>(tarjetasIniciales)
  const [activeTab, setActiveTab] = useState<"direcciones" | "pagos">("direcciones")
  const [usuario, setUsuario] = useState<Usuario>(usuarioInicial);

  useEffect(() => {
    fetch("http://localhost:8080/clientes/infoCliente")
      .then((res) => res.json())
      .then((data) => setUsuario(data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []); 

  useEffect(() => {
    fetch("http://localhost:8080/clientes/direcciones")
      .then((res) => res.json())
      .then((data) => setDireccion(data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []); 
  useEffect(() => {
    fetch("http://localhost:8080/clientes/mediosPago")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Imprime la respuesta en la consola
        setTarjetas(data);
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

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
          <h3>{usuario.nombre+" "+usuario.apellido}</h3>
          <p>{usuario.tipoId}: {usuario.numeroId}</p>
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
