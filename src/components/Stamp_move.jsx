import React, { useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import style from "../style/Stamp_move.module.css";

// Componente del nodo personalizado
const CustomNode = ({ data }) => {
  return (
    <div style={{ width: '50px', height: '50px', pointerEvents: 'auto', backgroundColor: 'transparent', border: 'none' }}>
      {data.label}
    </div>
  );
};

function Stamp_move({ setPosition, selectedModel, selectedColor, selectedImage, customWindow=true }) {
  const [backgroundImage, setBackgroundImage] = useState('');
  const initialPosition = { x: customWindow? 125: setPosition.x*30/125, y: customWindow ? 175: setPosition.y*22/175 };

  useEffect(() => {
    // Función para determinar la ruta de la imagen basada en modelo y color
    const getImagePath = (model, color) => {
      return `src/assets/${model}/${model}-neck-${color}.png`
    };

    // Actualizar la imagen de fondo según el modelo y color seleccionados
    const newBackgroundImage = getImagePath(selectedModel, selectedColor);
    setBackgroundImage(newBackgroundImage);

  }, [selectedModel, selectedColor]);

  const initialNodes = [
    {
      id: '1',
      type: 'custom', // Usar el tipo de nodo personalizado
      data: { label: <img src={selectedImage} alt="Estampa" style={{ width: customWindow ? '100px':'30%', height: customWindow ? '100px':'30%' }} /> },
      position: { x: initialPosition.x, y: initialPosition.y },
      draggable: customWindow ? true: false,
      selectable: false,
      resizeable: false
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const limitNodeMovement = useCallback((event, node) => {
    var nodeX = node.position.x;
    var nodeY = node.position.y;

    if (nodeX <= 110 | nodeX >= 325 | nodeY < 100 | nodeY > 470) {
      alert("No puedes colocar la estampa fuera de la camisa :)")
      node.position.x = initialPosition.x;
      node.position.y = initialPosition.y;
    }

    setPosition(node.position);
  }, []);

  const drag = useCallback((event, node) => {
    setPosition(node.position);
  }, [setPosition]);

  return (
  <div className={style.containerPreview}>
    {/* Lienzo de ReactFlow */}
    <div className={customWindow ? style.flowCanvas : style.flowCanvasCart}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        onNodeDragStop={limitNodeMovement}
        onNodeDrag={drag}
        nodeTypes={{ custom: CustomNode }} // Registrar el tipo de nodo personalizado
        style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: customWindow ? '490px 490px' : '120px 120px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
        panOnScroll={false} // Desactivar desplazamiento al hacer scroll
        zoomOnScroll={false} // Desactivar zoom al hacer scroll
        zoomOnPinch={false} // Desactivar zoom al hacer pinch en pantallas táctiles
        panOnDrag={false} // Desactivar desplazamiento al arrastrar
        draggable={false}
      >
      </ReactFlow>
    </div>

    {/* Ver posición cambiando en pantalla
    <div className={style.panel}>
      <h3>Panel de Compra</h3>
      <p>Posición actual de la estampa:</p>
      <p>X: {nodes[0].position.x}, Y: {nodes[0].position.y}</p>
    </div>*/}
  </div>

  );
}

export default Stamp_move;
