import React from 'react';
import { BaseNode } from './baseNode';

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data}>
      <div>
        <label>Output:
          <input type="text" value={data.outputName} readOnly />
        </label>
        <label>Type:
          <select value={data.outputType} readOnly>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
