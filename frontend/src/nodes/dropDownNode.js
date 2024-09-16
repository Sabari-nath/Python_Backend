import React, { useState } from 'react';
import { BaseNode } from './baseNode';

export const DropdownNode = ({ id, data }) => {
  const [selectedOption, setSelectedOption] = useState(data?.option || 'Option 1');

  const handleSelectChange = (e) => setSelectedOption(e.target.value);

  return (
    <BaseNode id={id} data={data}>
      {(handleTextChange, currText) => (
        <div>
          <label>Option:
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </label>
        </div>
      )}
    </BaseNode>
  );
};
