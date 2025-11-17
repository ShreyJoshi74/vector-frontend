// /frontend/src/nodes/outputNode.jsx

import './outputNode.css';
import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from '../Components/BaseNode.jsx';

const handleConfig = [
  {
    type: 'target',
    position: Position.Left,
    id: 'value',
  }
];

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  return (
    <BaseNode
      id={id}
      title="Output"
      handles={handleConfig}
      className="output-node-custom"
    >
      <div className="output-fields nodrag">
        <label className="output-label">
          Name
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            placeholder="output_name"
          />
        </label>

        <label className="output-label">
          Type
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};

export default OutputNode;
