import React, { useState } from 'react';
import { BaseNode } from './baseNode';
import { Box, Input, FormControl, FormLabel } from '@chakra-ui/react';

export const ColorPickerNode = ({ id, data }) => {
  const [colorValue, setColorValue] = useState(data?.color || '#000000');

  const handleColorChange = (e) => setColorValue(e.target.value);

  return (
    <BaseNode id={id} data={data}>
      <Box>
        <FormControl>
          <FormLabel fontSize="sm">Color</FormLabel>
          <Input 
            type="color" 
            value={colorValue} 
            onChange={handleColorChange}
            size="sm"
          />
        </FormControl>
      </Box>
    </BaseNode>
  );
};
