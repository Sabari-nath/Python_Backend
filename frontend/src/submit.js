import React from 'react';
import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the pipeline data');
      }

      const result = await response.json();
      console.log('Pipeline data parsed successfully:', result);
    } catch (error) {
      console.error('Error submitting the pipeline:', error);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};
