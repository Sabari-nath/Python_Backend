import React, { useState } from 'react';
import { BaseNode } from './baseNode';

export const ColorPickerNode = ({ id, data }) => {
  const [colorValue, setColorValue] = useState(data?.color || '#000000');

  const handleColorChange = (e) => setColorValue(e.target.value);

  return (
    <BaseNode id={id} data={data}>
      {(handleTextChange, currText) => (
        <div>
          <label>Color:
            <input
              type="color"
              value={colorValue}
              onChange={handleColorChange}
            />
          </label>
        </div>
      )}
    </BaseNode>
  );
};
