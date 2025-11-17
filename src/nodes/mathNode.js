// /frontend/src/nodes/mathNode.jsx

import './mathNode.css';
import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from '../Components/BaseNode.jsx';

const handleConfig = [
  { type: 'target', position: Position.Left, id: 'numA', style: { top: '33.33%' } },
  { type: 'target', position: Position.Left, id: 'numB', style: { top: '66.66%' } },
  { type: 'source', position: Position.Right, id: 'result' },
];

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Math Operation"
      handles={handleConfig}
      className="math-node-custom"
    >
      <div className="math-node-body nodrag">
        <label className="math-operation-label">
          Operation
          <select value={operation} onChange={handleOperationChange}>
            <option value="add">Add (+)</option>
            <option value="subtract">Subtract (-)</option>
            <option value="multiply">Multiply (*)</option>
            <option value="divide">Divide (/)</option>
          </select>
        </label>
      </div>

      {/* Handle labels */}
      <div className="math-handle-label left" style={{ top: '33.33%' }}>
        Num A
      </div>
      <div className="math-handle-label left" style={{ top: '66.66%' }}>
        Num B
      </div>
      <div className="math-handle-label right" style={{ top: '50%' }}>
        Result
      </div>
    </BaseNode>
  );
};

export default MathNode;
