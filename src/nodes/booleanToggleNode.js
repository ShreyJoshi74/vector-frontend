
import './booleanToggleNode.css';
import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from '../Components/BaseNode.jsx';

const handleConfig = [
  { type: 'source', position: Position.Right, id: 'boolean' },
];

export const BooleanToggleNode = ({ id, data }) => {
  const [isEnabled, setIsEnabled] = useState(data?.isEnabled ?? false);

  const handleToggle = () => {
    setIsEnabled(prev => !prev);
  };

  return (
    <BaseNode
      id={id}
      title="Boolean Toggle"
      handles={handleConfig}
      className="boolean-toggle-node"
    >
      <div className="toggle-container nodrag">
        <span className={`toggle-text ${isEnabled ? 'on' : 'off'}`}>
          {isEnabled ? 'True' : 'False'}
        </span>

        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={handleToggle}
          />
          <span className="toggle-slider" />
        </label>
      </div>
    </BaseNode>
  );
};

export default BooleanToggleNode;
