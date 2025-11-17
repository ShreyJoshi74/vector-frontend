// /frontend/src/nodes/llmNode.js

import './llmNode.css';
import { Position } from 'reactflow';
import BaseNode from '../Components/BaseNode.jsx';

const handleConfig = [
  {
    type: 'target',
    position: Position.Left,
    id: 'system',
    style: { top: '33.33%' },
  },
  {
    type: 'target',
    position: Position.Left,
    id: 'prompt',
    style: { top: '66.66%' },
  },
  {
    type: 'source',
    position: Position.Right,
    id: 'response',
  },
];

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      handles={handleConfig}
      className="llm-node-custom"
    >
      <div className="llm-content nodrag">
        Large Language Model
      </div>

    
      <div className="llm-handle-label left" style={{ top: '33.33%' }}>
        System
      </div>
      <div className="llm-handle-label left" style={{ top: '66.66%' }}>
        Prompt
      </div>
      <div className="llm-handle-label right" style={{ top: '50%' }}>
        Output
      </div>
    </BaseNode>
  );
};

export default LLMNode;
