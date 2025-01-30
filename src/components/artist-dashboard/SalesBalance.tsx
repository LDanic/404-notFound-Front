import { DollarSign } from "lucide-react"
import styles from "./SalesBalance.module.css"

interface Design {
  id: number
  name: string
  sales: number
  revenue: number
}

interface SalesBalanceProps {
  designs: Design[]
}

export default function SalesBalance({ designs }: SalesBalanceProps) {
  const totalSales = designs.reduce((sum, design) => sum + design.sales, 0)
  const totalRevenue = designs.reduce((sum, design) => sum + design.revenue, 0)

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Design Name</th>
            <th className={styles.textRight}>Sales</th>
            <th className={styles.textRight}>Revenue</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {designs.map((design) => (
            <tr key={design.id}>
              <td>{design.name}</td>
              <td className={styles.textRight}>{design.sales}</td>
              <td className={styles.textRight}>${design.revenue}</td>
            </tr>
          ))}
          <tr>
            <td className={styles.textRight}>Total</td>
            <td className={styles.textRight}>{totalSales}</td>
            <td className={styles.textRight}>${totalRevenue}</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.totalEarnings}>
        <DollarSign size={24} />
        <span className={styles.totalAmount}>${totalRevenue}</span>
      </div>
    </div>
  )
}

