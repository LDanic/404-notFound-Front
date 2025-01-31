"use client";

import { useState } from "react";
import ArtistHeader from "./ArtistHeader";
import DesignsView from "./DesignsView";
import UploadDesign from "./UploadDesign";
import SalesBalance from "./SalesBalance";
import styles from "../../style/ArtistDashboard.module.css";
import foto from "../../assets/User.png";

// Mock data for demonstration
const mockDesigns = [
  { id: 1, name: "Cool Cat", sales: 50, revenue: 750, hidden: false },
  { id: 2, name: "Funky Monkey", sales: 30, revenue: 450, hidden: false },
  { id: 3, name: "Space Odyssey", sales: 40, revenue: 600, hidden: false },
];

export default function ArtistDashboard() {
  const [designs, setDesigns] = useState(mockDesigns);
  const [activeTab, setActiveTab] = useState("designs");

  const addNewDesign = (newDesign: { name: string }) => {
    const newDesignEntry = {
      id: designs.length + 1,
      name: newDesign.name,
      sales: 0,
      revenue: 0,
      hidden: false,
    };
    setDesigns([...designs, newDesignEntry]);
  };

  const toggleDesignVisibility = (id: number) => {
    setDesigns(
      designs.map((design) =>
        design.id === id ? { ...design, hidden: !design.hidden } : design
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ArtistHeader
          initialName="Jane Doe"
          initialDescription="Artista apasionada por el diseño de camisetas. Creando arte que puedes vestir desde 2015."
          avatarUrl={foto}
        />
      </div>

      <div className={styles.tabsContainer}>
        <div className={styles.tabsList}>
          <button
            className={styles.tabsTrigger}
            data-state={activeTab === "designs" ? "active" : ""}
            onClick={() => setActiveTab("designs")}
          >
            Tus Diseños
          </button>
          <button
            className={styles.tabsTrigger}
            data-state={activeTab === "upload" ? "active" : ""}
            onClick={() => setActiveTab("upload")}
          >
            Subir Diseño
          </button>
          <button
            className={styles.tabsTrigger}
            data-state={activeTab === "sales" ? "active" : ""}
            onClick={() => setActiveTab("sales")}
          >
            Balance de Ventas
          </button>
        </div>

        <div
          className={`${styles.card} ${
            activeTab !== "designs" ? styles.hidden : ""
          }`}
        >
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Tus Diseños</h2>
            <p className={styles.cardDescription}>
              Ver y gestionar tus diseños de camisetas
            </p>
          </div>
          <div className={styles.cardContent}>
            <DesignsView
              designs={designs}
              onToggleVisibility={toggleDesignVisibility}
            />
          </div>
        </div>

        <div
          className={`${styles.card} ${
            activeTab !== "upload" ? styles.hidden : ""
          }`}
        >
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Subir Nuevo Diseño</h2>
            <p className={styles.cardDescription}>
              Añade un nuevo diseño de camiseta a tu colección
            </p>
          </div>
          <div className={styles.cardContent}>
            <UploadDesign onUpload={addNewDesign} />
          </div>
        </div>

        <div
          className={`${styles.card} ${
            activeTab !== "sales" ? styles.hidden : ""
          }`}
        >
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Balance de Ventas</h2>
            <p className={styles.cardDescription}>
              Resumen de tus ventas de camisetas e ingresos
            </p>
          </div>
          <div className={styles.cardContent}>
            <SalesBalance
              designs={designs.filter((design) => !design.hidden)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
