
import './apiNode.css';
import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from '../Components/BaseNode.jsx';

const handleConfig = [
  {
    type: 'target',
    position: Position.Left,
    id: 'url',
    style: { top: '50%' },
  },
  {
    type: 'source',
    position: Position.Right,
    id: 'data',
    style: { top: '33.33%' },
  },
  {
    type: 'source',
    position: Position.Right,
    id: 'error',
    style: { top: '66.66%' },
  },
];

export const ApiNode = ({ id, data }) => {
  const [defaultUrl, setDefaultUrl] = useState(data?.defaultUrl || '');

  const handleUrlChange = (e) => {
    setDefaultUrl(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="API Request"
      handles={handleConfig}
      className="api-node-custom"   
    >
      {/* Main content */}
      <label className="nodrag">
        Default URL:
        <input
          type="text"
          value={defaultUrl}
          onChange={handleUrlChange}
          placeholder="Ex:- https://api.example.com/data"
        />
      </label>

 
      <div className="api-handle-label left" style={{ top: '50%' }}>
        URL
      </div>
      <div className="api-handle-label right" style={{ top: '33.33%' }}>
        Data
      </div>
      <div className="api-handle-label right" style={{ top: '66.66%' }}>
        Error
      </div>
    </BaseNode>
  );
};

export default ApiNode;
