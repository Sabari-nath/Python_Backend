import React from 'react';
import { BaseNode } from './baseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data}>
      <div>
        <span>This is an LLM Node.</span>
      </div>
    </BaseNode>
  );
};
