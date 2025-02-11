import type React from "react"
import { useState } from "react"
import styles from "../style/MiCuenta.module.css"

interface Direccion {
  codigo_postal: number
  nombre_direccion: string
  direccion: string
  detalles_direccion: string
}

interface DireccionEnvioProps {
  direccion: Direccion
  onActualizar: (direccion: Direccion) => void
}

export default function DireccionEnvio({ direccion, onActualizar, oculto }: DireccionEnvioProps & {oculto: boolean}) {
  const [editando, setEditando] = useState(false)
  const [direccionEditada, setDireccionEditada] = useState(direccion)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onActualizar(direccionEditada)
    setEditando(false)
  }

  if (!editando) {
    return (
      <div className={styles.card}>
        <h3>Dirección de Envío</h3>
        <p>
          <strong>Nombre:</strong> {direccion.nombre_direccion}
        </p>
        <p>
          <strong>Dirección:</strong> {direccion.direccion}
        </p>
        <p>
          <strong>Detalles:</strong> {direccion.detalles_direccion}
        </p>
        <p>
          <strong>Código Postal:</strong> {direccion.codigo_postal}
        </p>
        <div className={styles.cardActions}>
          <button 
            onClick={() => setEditando(true)}
            style={{ display: oculto ? "none" : "block" }}
            >Editar</button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>Nombre: </label>
      <input
        type="text"
        placeholder="Nombre de la dirección"
        value={direccionEditada.nombre_direccion}
        onChange={(e) => setDireccionEditada({ ...direccionEditada, nombre_direccion: e.target.value })}
        required
      />
      <label>Dirección: </label>
      <input
        type="text"
        placeholder="Dirección"
        value={direccionEditada.direccion}
        onChange={(e) => setDireccionEditada({ ...direccionEditada, direccion: e.target.value })}
        required
      />
      <label>Detalles: </label>
      <input
        type="text"
        placeholder="Detalles de la dirección"
        value={direccionEditada.detalles_direccion}
        onChange={(e) => setDireccionEditada({ ...direccionEditada, detalles_direccion: e.target.value })}
      />
      <label>Código postal: </label>
      <input
        type="number"
        placeholder="Código Postal"
        value={direccionEditada.codigo_postal}
        onChange={(e) => setDireccionEditada({ ...direccionEditada, codigo_postal: Number(e.target.value) })}
        required
      />
      <div className={styles.formActions}>
        <button type="submit">Guardar</button>
        <button type="button" onClick={() => setEditando(false)}>
          Cancelar
        </button>
      </div>
    </form>
  )
}

