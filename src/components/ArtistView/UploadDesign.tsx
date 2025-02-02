import { useState } from "react"
import { Upload } from "lucide-react"
import styles from "../../style/UploadDesign.module.css"

 
interface DesignData {
  name: string
  description: string
  theme: string
  price: number
  imageUrl: string
}
 
interface UploadDesignProps {
  onUpload: (design: DesignData) => void
}
 
export default function UploadDesign({ onUpload }: UploadDesignProps) {
  const [designData, setDesignData] = useState<DesignData>({
    name: "",
    description: "",
    theme: "",
    price: 0,
    imageUrl: "",
  })
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDesignData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number.parseFloat(value) || 0 : value,
    }))
  }
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpload(designData)
    setDesignData({
      name: "",
      description: "",
      theme: "",
      price: 0,
      imageUrl: "",
    })
  }
 
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="name" className={styles.label}>
          Nombre de la estampa
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={designData.name}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
      </div>
 
      <div className={styles.inputGroup}>
        <label htmlFor="description" className={styles.label}>
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          value={designData.description}
          onChange={handleInputChange}
          required
          className={styles.textarea}
        />
      </div>
 
      <div className={styles.inputGroup}>
        <label htmlFor="theme" className={styles.label}>
          Tema
        </label>
        <input
          id="theme"
          name="theme"
          type="text"
          value={designData.theme}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
      </div>
 
      <div className={styles.inputGroup}>
        <label htmlFor="price" className={styles.label}>
          Precio
        </label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={designData.price}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
      </div>
 
      <div className={styles.inputGroup}>
        <label htmlFor="imageUrl" className={styles.label}>
          Link de la imagen
        </label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="url"
          value={designData.imageUrl}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
      </div>
 
      <button type="submit" className={styles.button}>
        <Upload size={16} className={styles.up}/>  Subir diseño
      </button>
    </form>
  )
}

