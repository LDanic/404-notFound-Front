import React, { useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '/src/style/Stamp_move.css';

// Componente del nodo personalizado
const CustomNode = ({ data }) => {
  return (
    <div style={{ width: '50px', height: '50px', pointerEvents: 'auto', backgroundColor: 'transparent', border: 'none' }}>
      {data.label}
    </div>
  );
};

function Stamp_move({ setPosition, selectedModel, selectedColor }) {
  const [backgroundImage, setBackgroundImage] = useState('');

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
      data: { label: <img src="https://i.pinimg.com/originals/68/8b/d2/688bd2e2fba6756a496640c10465a28e.png" alt="Estampa" style={{ width: '50px', height: '50px' }} /> },
      position: { x: 125, y: 175 },
      draggable: true,
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
      node.position.x = 125;
      node.position.y = 175;
    }

    setPosition(node.position);
  }, []);

  const drag = useCallback((event, node) => {
    setPosition(node.position);
  }, [setPosition]);

  return (
    <div className="container-preview">
      {/* Lienzo de ReactFlow */}
      <div className="flow-canvas">
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          onNodeDragStop={limitNodeMovement}
          onNodeDrag={drag}
          nodeTypes={{ custom: CustomNode }} // Registrar el tipo de nodo personalizado
          style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: '490px 490px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
          panOnScroll={false} // Desactivar desplazamiento al hacer scroll
          zoomOnScroll={false} // Desactivar zoom al hacer scroll
          zoomOnPinch={false} // Desactivar zoom al hacer pinch en pantallas táctiles
          panOnDrag={false} // Desactivar desplazamiento al arrastrar
          draggable = {false}
        >
        </ReactFlow>
      </div>

      {/* Ver posición cambiando en pantalla
      <div className="panel">
        <h3>Panel de Compra</h3>
        <p>Posición actual de la estampa:</p>
        <p>X: {nodes[0].position.x}, Y: {nodes[0].position.y}</p>
      </div>*/}
    </div>
  );
}

export default Stamp_move;
