// /frontend/src/toolbar.js

import './toolbar.css';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="pipeline-toolbar">
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="api" label="API" />
      <DraggableNode type="math" label="Math" />
      <DraggableNode type="timer" label="Delay" />
      <DraggableNode type="sentiment" label="Sentiment" />
      <DraggableNode type="keywords" label="Keywords" />
      <DraggableNode type="toggle" label="Toggle" />
    </div>
  );
};

export default PipelineToolbar;
