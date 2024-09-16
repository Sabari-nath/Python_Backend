import React, { useState } from 'react';
import { BaseNode } from './baseNode';

export const BooleanNode = ({ id, data }) => {
  const [boolValue, setBoolValue] = useState(data?.bool || false);

  const handleToggle = () => setBoolValue(!boolValue);

  return (
    <BaseNode id={id} data={data}>
      {(handleTextChange, currText) => (
        <div>
          <label>Value: {boolValue.toString()}</label>
          <button onClick={handleToggle}>Toggle</button>
        </div>
      )}
    </BaseNode>
  );
};
