// /frontend/src/nodes/timerNode.jsx

import './timerNode.css';
import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from '../Components/BaseNode.jsx';

const handleConfig = [
  { type: 'target', position: Position.Left, id: 'triggerIn' },
  { type: 'source', position: Position.Right, id: 'triggerOut' },
];

export const TimerNode = ({ id, data }) => {
  const [seconds, setSeconds] = useState(data?.seconds || '5');

  const handleTimeChange = (e) => {
    setSeconds(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Timer"
      handles={handleConfig}
      className="timer-node-custom"
    >
      <div className="timer-controls nodrag">
        <label className="timer-label">
          Delay (sec)
          <input
            type="number"
            value={seconds}
            min="0"
            onChange={handleTimeChange}
          />
        </label>
      </div>


      <div className="timer-handle-label left" style={{ top: '50%' }}>
        In
      </div>
      <div className="timer-handle-label right" style={{ top: '50%' }}>
        Out
      </div>
    </BaseNode>
  );
};

export default TimerNode;
