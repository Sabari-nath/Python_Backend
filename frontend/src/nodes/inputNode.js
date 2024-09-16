import React from 'react';
import { BaseNode } from './baseNode';

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data}>
      <div>
        <label>Name:
          <input type="text" value={data.inputName} readOnly />
        </label>
        <label>Type:
          <select value={data.inputType} readOnly>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
