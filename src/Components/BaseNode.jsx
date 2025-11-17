import { memo } from 'react';
import { Handle } from 'reactflow';
import './BaseNode.css';

export const BaseNode = ({
  id,
  title,
  children,
  handles = [],
  className = '',        
}) => {
  return (
    <div className={`base-node-wrapper ${className}`}> 
      <div className="base-node-header">
        {title}
      </div>

      <div className="base-node-content">
        {children}
      </div>
      
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
        />
      ))}
    </div>
  );
};

export default memo(BaseNode);
