import React, { useState } from 'react';
import { BaseNode } from './baseNode';

export const NumberNode = ({ id, data }) => {
  const [numValue, setNumValue] = useState(data?.number || 0);

  const handleNumberChange = (e) => setNumValue(Number(e.target.value));

  return (
    <BaseNode id={id} data={data}>
      {(handleTextChange, currText) => (
        <div>
          <label>Number:
            <input
              type="number"
              value={numValue}
              onChange={handleNumberChange}
            />
          </label>
        </div>
      )}
    </BaseNode>
  );
};
