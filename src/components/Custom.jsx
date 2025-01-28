import { useEffect, useState, useRef } from 'react'
import style from "../style/Custom.module.css";
import Stamp_move from '/src/components/Stamp_move.jsx'
import {useNavigate } from "react-router-dom";
import NavBar from "/src/components/NavBar.tsx";
import { cartUtils } from '../utils/carUtils';
import { useLocation } from "react-router-dom";
import * as htmlToImage from "html-to-image";
import { CheckCircle } from 'lucide-react';

const COLORS = [
  { name: 'white', label: 'White' },
  { name: 'black', label: 'Black' },
  { name: 'babyblue', label: 'Light Blue' },
  { name: 'babypink', label: 'Pink' },
  { name: 'oilblue', label: 'Blue' },
  { name: 'babygreen', label: 'Green' },
  { name: 'red', label: 'Red' },
]

const FABRICS = ['Lana', 'Poliester']
const SIZES = ['XS', 'S', 'M', 'L', 'XL']

function Custom() {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState('white')
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedFabric, setSelectedFabric] = useState('Lana')
  const [selectedModel, setSelectedModel] = useState('R')
  const [shirtPrice, setShirtPrice] = useState(40000);
  const [position, setPosition] = useState({ x: 125, y: 175 });
  const [showToast, setShowToast] = useState(false);
  
  const location = useLocation();
  const stamp = location.state;
  const stampPrice = parseFloat(stamp.precio.replace("$", "").replace(".", ""));

  const previewRef = useRef();

  const handleAddToCart = () => {
    htmlToImage.toPng(previewRef.current, { useCORS: true }).then((dataUrl) => {
      const newItem = {
        selectedColor,
        selectedModel,
        selectedFabric,
        selectedSize,
        stamp,
        shirtPrice: shirtPrice,
        stampPrice: stampPrice,
        position,
        quantity: 1,
        previewImage: dataUrl,
        name: `Camiseta personalizada - ${stamp.nombre}`,
        total: shirtPrice + stampPrice
      };

      cartUtils.addToCart(newItem);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  const handleChangeStamp = () => {
    navigate('/catalogo');
  };

  useEffect(() => {
    if (selectedFabric === 'Poliester') {
      setShirtPrice(30000);
    } else {
      setShirtPrice(40000);
    }
  }, [selectedFabric]);

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.mainContent}>
        {/* Left Column - T-shirt Preview */}
        <div className={style.previewPanel} ref={previewRef}>
          <Stamp_move setPosition={setPosition} selectedModel={selectedModel} selectedColor={selectedColor} selectedImage={stamp.imagen}/>
        </div>

        {/* Right Column - Customization Options */}
        <div className={style.customizationPanel}>
          {/* Stamp Info and Actions */}
          <div className={style.stampSection}>
            <div className={style.stampInfo}>
              <div className={style.stampPreview}>
                <img
                  src={stamp.imagen}
                  alt="404 Stamp"
                />
              </div>
              <div className={style.stampDetails}>
                <h1>{stamp.nombre}</h1>
                <p>Artista: {stamp.artista}</p>
                <p className={style.price}>${stampPrice}</p>
              </div>
            </div>

            <div className={style.stampActions}>
              <button className={`${style.btn} ${style.btnChange}`} onClick={handleChangeStamp}>
                CAMBIAR ESTAMPA     
              </button>
              <button className={`${style.btn} ${style.btnCart}`} onClick={handleAddToCart}>
                AÑADIR AL CARRITO
                <svg className={style.cartIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>

          <div className={style.optionsSection}>
            <div className={style.optionGroup}>
              <h3>Modelo:</h3>
              <div className={style.modelButtons}>
                <button
                  onClick={() => setSelectedModel('R')}
                  className={`${style.modelButton} ${selectedModel === 'R' ? style.selected : ''}`}
                >
                  <img src="src/assets/R/R-neck-white.png" alt="Crew Neck" />
                </button>
                <button
                  onClick={() => setSelectedModel('V')}
                  className={`${style.modelButton} ${selectedModel === 'V' ? style.selected : ''}`}
                >
                  <img src="src/assets/V/V-neck-white.png" title="v-neck" />
                </button>
              </div>
            </div>

            <div className={style.optionGroup}>
              <h3>Color:</h3>
              <div className={style.colorButtons}>
                {COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`${style.colorButton} ${style[color.name]} ${selectedColor === color.name ? style.selected : ''}`}
                    title={color.label}
                  />
                ))}
              </div>
            </div>

            <div className={style.optionGroup}>
              <h3>Tela:</h3>
              <div className={style.fabricButtons}>
                {FABRICS.map((fabric) => (
                  <button
                    key={fabric}
                    onClick={() => setSelectedFabric(fabric)}
                    className={`${style.fabricButton} ${selectedFabric === fabric ? style.selected : ''}`}
                  >
                    {fabric}
                  </button>
                ))}
              </div>
            </div>

            <div className={style.optionGroup}>
              <h3>Talla:</h3>
              <div className={style.sizeButtons}>
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`${style.sizeButton} ${selectedSize === size ? style.selected : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className={style.total}>
              <span>Total:</span>
              <span>${shirtPrice + stampPrice}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`${style.toast} ${showToast ? style.show : ''}`}>
        <CheckCircle className={style.toastIcon} size={20} />
        <span>¡Producto añadido al carrito!</span>
      </div>
    </div>
  );
}

export default Custom