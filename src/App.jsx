import { useEffect, useState } from 'react'
import './App.css'
import Stamp_move from '/stamp-move/Stamp_move.jsx'
import { addToCart } from './utils/carUtils';

const COLORS = [
  { name: 'white', label: 'White' },
  { name: 'black', label: 'Black' },
  { name: 'lightBlue', label: 'Light Blue' },
  { name: 'pink', label: 'Pink' },
  { name: 'blue', label: 'Blue' },
  { name: 'green', label: 'Green' },
  { name: 'red', label: 'Red' },
]

const FABRICS = ['Lana', 'Poliester']
const SIZES = ['XS', 'S', 'M', 'L', 'XL']
const stamp = {
  img_principal: "https://i.pinimg.com/originals/68/8b/d2/688bd2e2fba6756a496640c10465a28e.png",
  name: 'Estampa Harry Potter', 
  artist: 'Pepito Perez',
  price: 10000
}



function App() {
  const [selectedColor, setSelectedColor] = useState('white')
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedFabric, setSelectedFabric] = useState('Lana')
  const [selectedModel, setSelectedModel] = useState('R')
  const [shirtPrice, setShirtPrice] = useState(40000);
  const [position, setPosition] = useState({ x: 125, y: 175 });


  const handleAddToCart = () => {
    const total = shirtPrice + stamp.price
    addToCart({
      selectedColor,
      selectedModel,
      selectedFabric,
      selectedSize,
      stamp,
      total,
      position,
    });
  };

  useEffect(() => {
    if (selectedFabric === 'Poliester') {
      setShirtPrice(30000);
    } else {
      setShirtPrice(40000);
    }
  }, [selectedFabric]);

  return (
    <div className="container">
      <div className="main-content">
        {/* Left Column - T-shirt Preview */}
        <div className="preview-panel">
          <Stamp_move setPosition={setPosition}/>
        </div>

        {/* Right Column - Customization Options */}
        <div className="customization-panel">
          {/* Stamp Info and Actions */}
          <div className="stamp-section">
            <div className="stamp-info">
              <div className="stamp-preview">
                <img 
                  src = {stamp.img_principal}
                  alt="404 Stamp"
                />
              </div>
              <div className="stamp-details">
                <h1>{stamp.name}</h1>
                <p>Artista: {stamp.artist}</p>
                <p className="price">${stamp.price}</p>
              </div>
            </div>
            
            <div className="stamp-actions">
              <button className="btn btn-change">
                CAMBIAR ESTAMPA
              </button>
              <button className="btn btn-cart" onClick={handleAddToCart}>
                AÑADIR AL CARRITO
                <svg className="cart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="options-section">
            <div className="option-group">
              <h3>Modelo:</h3>
              <div className="model-buttons">
                <button
                  onClick={() => setSelectedModel('R')}
                  className={`model-button ${selectedModel === 'R' ? 'selected' : ''}`}
                >
                  <img src="src\assets\crew-neck.png" alt="Crew Neck" />
                </button>
                <button
                  onClick={() => setSelectedModel('V')}
                  className={`model-button ${selectedModel === 'V' ? 'selected' : ''}`}
                >
                  <img src="src\assets\v-neck.png" alt="V Neck" />
                </button>
              </div>
            </div>

            <div className="option-group">
              <h3>Color:</h3>
              <div className="color-buttons">
                {COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`color-button ${color.name} ${
                      selectedColor === color.name ? 'selected' : ''
                    }`}
                    title={color.label}
                  />
                ))}
              </div>
            </div>

            <div className="option-group">
              <h3>Tela:</h3>
              <div className="fabric-buttons">
                {FABRICS.map((fabric) => (
                  <button
                    key={fabric}
                    onClick={() => setSelectedFabric(fabric)}
                    className={`fabric-button ${selectedFabric === fabric ? 'selected' : ''}`}
                  >
                    {fabric}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <h3>Talla:</h3>
              <div className="size-buttons">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="total">
              <span>Total:</span>
              <span>${shirtPrice+stamp.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App