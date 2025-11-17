

import './keywordExtractorNode.css';
import { useEffect, useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from '../Components/BaseNode.jsx';


const handleConfig = [
  { type: 'target', position: Position.Left, id: 'text' },
  { type: 'source', position: Position.Right, id: 'keywords' },
];

export const KeywordExtractorNode = ({ id, data }) => {
  const [keywords, setKeywords] = useState(data?.keywordsList || []);

  useEffect(() => {
    setKeywords(data?.keywordsList || []);
  }, [data?.keywordsList]);

  return (
    <BaseNode
      id={id}
      title="Keyword Extractor"
      handles={handleConfig}
      className="keyword-node-custom"
    >
      <div className="keyword-list nodrag">
        <strong className="label-title">Keywords</strong>

        {keywords.length > 0 ? (
          <ul>
            {keywords.map((kw, index) => (
              <li key={index}>{kw}</li>
            ))}
          </ul>
        ) : (
          <span className="placeholder">No keywords</span>
        )}
      </div>
    </BaseNode>
  );
};

export default KeywordExtractorNode;
