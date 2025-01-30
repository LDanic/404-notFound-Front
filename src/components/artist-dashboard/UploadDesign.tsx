"use client"

import { useState } from "react"
import { Upload } from "lucide-react"
import styles from "./UploadDesign.module.css"

interface UploadDesignProps {
  onUpload: (design: { name: string }) => void
}

export default function UploadDesign({ onUpload }: UploadDesignProps) {
  const [newDesign, setNewDesign] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewDesign(e.target.files[0])
    }
  }

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()
    if (newDesign) {
      onUpload({ name: newDesign.name })
      setNewDesign(null)
    }
  }

  return (
    <form onSubmit={handleUpload} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="design-upload" className={styles.label}>
          Design File
        </label>
        <input id="design-upload" type="file" onChange={handleFileChange} className={styles.input} />
      </div>
      <button type="submit" disabled={!newDesign} className={styles.button}>
        <Upload size={16} />
        Upload Design
      </button>
    </form>
  )
}

