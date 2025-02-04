import type React from "react"
import { useState } from "react"
import styles from "../style/MiCuenta.module.css"

interface Direccion {
  id: number
  codigoPostal: string
  numero: string
  calle: string
  carrera: string
  ciudad: string
}

interface DireccionEnvioProps {
  direcciones: Direccion[]
  onAgregar: (direccion: Omit<Direccion, "id">) => void
  onActualizar: (direccion: Direccion) => void
  onEliminar: (id: number) => void
}

export default function DireccionEnvio({ direcciones, onAgregar, onActualizar, onEliminar }: DireccionEnvioProps) {
  const [nuevaDireccion, setNuevaDireccion] = useState<Omit<Direccion, "id">>({
    codigoPostal: "",
    numero: "",
    calle: "",
    carrera: "",
    ciudad: "",
  })
  const [editando, setEditando] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editando !== null) {
      onActualizar({ id: editando, ...nuevaDireccion })
      setEditando(null)
    } else {
      onAgregar(nuevaDireccion)
    }
    setNuevaDireccion({ codigoPostal: "", numero: "", calle: "", carrera: "", ciudad: "" })
  }

  const handleEditar = (direccion: Direccion) => {
    setEditando(direccion.id)
    setNuevaDireccion(direccion)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Calle"
          value={nuevaDireccion.calle}
          onChange={(e) => setNuevaDireccion({ ...nuevaDireccion, calle: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Carrera"
          value={nuevaDireccion.carrera}
          onChange={(e) => setNuevaDireccion({ ...nuevaDireccion, carrera: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Número"
          value={nuevaDireccion.numero}
          onChange={(e) => setNuevaDireccion({ ...nuevaDireccion, numero: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Código Postal"
          value={nuevaDireccion.codigoPostal}
          onChange={(e) => setNuevaDireccion({ ...nuevaDireccion, codigoPostal: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Ciudad"
          value={nuevaDireccion.ciudad}
          onChange={(e) => setNuevaDireccion({ ...nuevaDireccion, ciudad: e.target.value })}
          required
        />
        <button className={styles.boton} type="submit">{editando !== null ? "Actualizar" : "Agregar"} Dirección</button>
      </form>

      {direcciones.map((direccion) => (
        <div key={direccion.id} className={styles.card}>
          <h3>Dirección de Envío</h3>
          <p>Calle: {direccion.calle}</p>
          <p>Carrera: {direccion.carrera}</p>
          <p>Número: {direccion.numero}</p>
          <p>Ciudad: {direccion.ciudad}</p>
          <p>Código Postal: {direccion.codigoPostal}</p>
          <div className={styles.cardActions}>
            <button onClick={() => handleEditar(direccion)}>Editar</button>
            <button onClick={() => onEliminar(direccion.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  )
}

