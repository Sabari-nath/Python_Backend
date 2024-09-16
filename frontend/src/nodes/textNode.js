import React, { useState, useRef, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [textValue, setTextValue] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);
  const [height, setHeight] = useState(100);

  const FIXED_WIDTH = 200;
  const MIN_HEIGHT = 100;
  const CHAR_LIMIT = 100;

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  const detectVariables = (text) => {
    const variableRegex = /\{\{\s*(\w+)\s*\}\}/g;
    const detectedVariables = [];
    let match;
    while ((match = variableRegex.exec(text)) !== null) {
      detectedVariables.push(match[1]); // Extract the variable name
    }
    setVariables(detectedVariables);
    console.log(detectedVariables);
  };

  useEffect(() => {
    detectVariables(textValue);
    if (textAreaRef.current && textValue.length > CHAR_LIMIT) {
      const newHeight = Math.max(MIN_HEIGHT, textAreaRef.current.scrollHeight + 20);
      setHeight(newHeight);
    } else {
      setHeight(MIN_HEIGHT);
    }
  }, [textValue]);

  return (
    <div style={{
      width: FIXED_WIDTH,
      height: height,
      border: '1px solid black',
      padding: '10px',
    }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-in`}
      />
      <div >
        {variables.map((variable, index) => (
          <div style={{paddingLeft:'10px'}} key={index}>
            <Handle
              type="target"
              position={Position.Left}
              id={`${id}-in`}
              style={{ top: 20 * (index + 2) }}
            />
            <span style={{ position: 'absolute', left: '-50px', top: '20px' }}>{variable}</span>
          </div>
        ))}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-out`}
      />
      <div>{data.name || id}</div>
      <textarea
        ref={textAreaRef}
        value={textValue}
        onChange={handleChange}
        style={{
          width: FIXED_WIDTH - 20,
          height: height - 20, // Subtract padding
          resize: 'none',
          border: 'none',
          outline: 'none',
        }}
      />
    </div>
  );
};