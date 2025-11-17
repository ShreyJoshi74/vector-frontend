// /frontend/src/nodes/sentimentNode.jsx

import './sentimentNode.css';
import { useEffect, useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from '../Components/BaseNode.jsx';

const handleConfig = [
  { type: 'target', position: Position.Left, id: 'text' },
  { type: 'source', position: Position.Right, id: 'sentiment' },
];

export const SentimentNode = ({ id, data }) => {
  const [sentiment, setSentiment] = useState(data?.sentimentResult || 'neutral');

  useEffect(() => {
    setSentiment(data?.sentimentResult || 'neutral');
  }, [data?.sentimentResult]);

  return (
    <BaseNode
      id={id}
      title="Sentiment"
      handles={handleConfig}
      className={`sentiment-node-custom sentiment-${sentiment}`}
    >
      <div className="sentiment-display nodrag">
        {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
      </div>
    </BaseNode>
  );
};

export default SentimentNode;
