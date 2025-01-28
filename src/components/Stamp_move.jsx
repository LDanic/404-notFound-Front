import React, { useCallback, useState, useEffect } from 'react';
import { ReactFlow, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import style from "../style/Stamp_move.module.css";
import { AlertCircle } from 'lucide-react';

// Componente del nodo personalizado
const CustomNode = ({ data }) => {
  return (
    <div style={{ width: '50px', height: '50px', pointerEvents: 'auto', backgroundColor: 'transparent', border: 'none' }}>
      {data.label}
    </div>
  );
};

function Stamp_move({ setPosition, selectedModel, selectedColor, selectedImage}) {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [showErrorToast, setShowErrorToast] = useState(false);

  useEffect(() => {
    const getImagePath = (model, color) => {
      return `src/assets/${model}/${model}-neck-${color}.png`
    };

    const newBackgroundImage = getImagePath(selectedModel, selectedColor);
    setBackgroundImage(newBackgroundImage);
  }, [selectedModel, selectedColor]);

  const initialNodes = [
    {
      id: '1',
      type: 'custom',
      data: { label: <img src={selectedImage} alt="Estampa" style={{ width: '100px', height: '100px' }} /> },
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

    if (nodeX <= 110 || nodeX >= 325 || nodeY < 100 || nodeY > 470) {
      node.position.x = 125;
      node.position.y = 175;
      setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 3000);
    }

    setPosition(node.position);
  }, []);

  const drag = useCallback((event, node) => {
    setPosition(node.position);
  }, [setPosition]);

  return (
    <div className={style.containerPreview}>
      <div className={style.flowCanvas}>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          onNodeDragStop={limitNodeMovement}
          onNodeDrag={drag}
          nodeTypes={{ custom: CustomNode }}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '490px 490px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          panOnScroll={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnDrag={false}
          draggable={false}
        >
        </ReactFlow>
      </div>

      {/* Error Toast Notification */}
      <div className={`${style.errorToast} ${showErrorToast ? style.show : ''}`}>
        <AlertCircle className={style.errorIcon} size={20} />
        <span>La estampa debe estar dentro de la camiseta</span>
      </div>
    </div>
  );
}

export default Stamp_move;