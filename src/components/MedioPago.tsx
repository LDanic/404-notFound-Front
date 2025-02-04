import type React from "react"
import { useState } from "react"
import styles from "../style/MiCuenta.module.css"

interface Tarjeta {
  id: number
  numero: string
  tipo: string
  fechaVencimiento: string
}

interface MedioPagoProps {
  tarjetas: Tarjeta[]
  onAgregar: (tarjeta: Omit<Tarjeta, "id">) => void
  onActualizar: (tarjeta: Tarjeta) => void
  onEliminar: (id: number) => void
}

export default function MedioPago({ tarjetas, onAgregar, onActualizar, onEliminar }: MedioPagoProps) {
  const [nuevaTarjeta, setNuevaTarjeta] = useState({ numero: "", tipo: "", fechaVencimiento: "" })
  const [editando, setEditando] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editando !== null) {
      onActualizar({ id: editando, ...nuevaTarjeta })
      setEditando(null)
    } else {
      onAgregar(nuevaTarjeta)
    }
    setNuevaTarjeta({ numero: "", tipo: "", fechaVencimiento: "" })
  }

  const handleEditar = (tarjeta: Tarjeta) => {
    setEditando(tarjeta.id)
    setNuevaTarjeta(tarjeta)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Número de Tarjeta"
          value={nuevaTarjeta.numero}
          onChange={(e) => setNuevaTarjeta({ ...nuevaTarjeta, numero: e.target.value })}
          required
        />
        <select
          value={nuevaTarjeta.tipo}
          onChange={(e) => setNuevaTarjeta({ ...nuevaTarjeta, tipo: e.target.value })}
          required
        >
          <option value="">Seleccione tipo de tarjeta</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="American Express">American Express</option>
        </select>
        <input
          type="text"
          placeholder="Fecha de Vencimiento (MM/YY)"
          value={nuevaTarjeta.fechaVencimiento}
          onChange={(e) => setNuevaTarjeta({ ...nuevaTarjeta, fechaVencimiento: e.target.value })}
          required
        />
        <button type="submit">{editando !== null ? "Actualizar" : "Agregar"} Tarjeta</button>
      </form>

      {tarjetas.map((tarjeta) => (
        <div key={tarjeta.id} className={styles.card}>
          <h3>Medio de Pago</h3>
          <p>Número: {tarjeta.numero}</p>
          <p>Tipo: {tarjeta.tipo}</p>
          <p>Vencimiento: {tarjeta.fechaVencimiento}</p>
          <div className={styles.cardActions}>
            <button onClick={() => handleEditar(tarjeta)}>Editar</button>
            <button onClick={() => onEliminar(tarjeta.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  )
}

