
import './inputNode.css';
import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from '../Components/BaseNode.jsx';

const handleConfig = [
  {
    type: 'source',
    position: Position.Right,
    id: 'value',
  },
];

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Input"
      handles={handleConfig}
      className="input-node-custom"
    >
      <div className="input-node-fields nodrag">
        <label className="input-node-label">
          Name
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            placeholder="input_name"
          />
        </label>

        <label className="input-node-label">
          Type
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};

export default InputNode;
