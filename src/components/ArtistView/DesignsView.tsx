"use client"

import { Shirt, Eye, EyeOff } from "lucide-react"
import styles from "../../style/DesignsView.module.css"

interface Design {
  id: number
  name: string
  sales: number
  hidden: boolean
}

interface DesignsViewProps {
  designs: Design[]
  onToggleVisibility: (id: number) => void
}

export default function DesignsView({ designs, onToggleVisibility }: DesignsViewProps) {
  return (
    <div className={styles.grid}>
      {designs.map((design) => (
        <div key={design.id} className={`${styles.card} ${design.hidden ? styles.hidden : ""}`}>
          <div className={styles.cardContent}>
            <Shirt className={styles.designImage} />
            <p className={styles.designName}>{design.name}</p>
            <p className={styles.salesInfo}>{design.sales} vendidos</p>
            <button className={styles.hideButton} onClick={() => onToggleVisibility(design.id)}>
              {design.hidden ? <EyeOff size={16} /> : <Eye size={16}/>}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

