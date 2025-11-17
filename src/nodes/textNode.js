// /frontend/src/nodes/textNode.js

import './textNode.css';
import { useEffect, useRef, useState, useMemo } from 'react';
import { Position } from 'reactflow';
import BaseNode from '../Components/BaseNode.jsx';

// helper: extract JS variable names inside {{ ... }}
const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    vars.add(match[1]);
  }
  return Array.from(vars);
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || 'Input');
  const [sizeClass, setSizeClass] = useState('small'); // for width
  const textareaRef = useRef(null);

  // recompute variables whenever text changes
  const variables = useMemo(() => extractVariables(currText), [currText]);

  // build handles: one source output + one target per variable
  const handles = useMemo(() => {
    const varHandles = variables.map((name, index) => {
      const topPct = ((index + 1) / (variables.length + 1)) * 100;
      return {
        type: 'target',
        position: Position.Left,
        id: `var-${name}`,          // e.g. var-input
        style: { top: `${topPct}%` }
      };
    });

    const outputHandle = {
      type: 'source',
      position: Position.Right,
      id: 'output',
      style: { top: '50%' },
    };

    return [...varHandles, outputHandle];
  }, [variables]);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);

    // simple width classes based on length
    const len = value.length;
    if (len > 120) setSizeClass('large');
    else if (len > 50) setSizeClass('medium');
    else setSizeClass('small');
  };

  // auto-resize textarea height to fit content
  useEffect(() => {
    if (textareaRef.current) {
      const el = textareaRef.current;
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={handles}
      className={`text-node-custom text-node-${sizeClass}`}
    >
      <label className="nodrag text-node-label">
        
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          placeholder="Type text here... Use {{variable}} to create inputs."
        />
      </label>
    </BaseNode>
  );
};
