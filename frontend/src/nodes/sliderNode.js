import React, { useState } from 'react';
import { BaseNode } from './baseNode';

export const SliderNode = ({ id, data }) => {
  const [sliderValue, setSliderValue] = useState(data?.value || 50);

  const handleSliderChange = (e) => setSliderValue(Number(e.target.value));

  return (
    <BaseNode id={id} data={data}>
      <div>
        <label>Value: {sliderValue}</label>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </div>
    </BaseNode>
  );
};
