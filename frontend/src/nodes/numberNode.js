import React, { useState } from 'react';
import { BaseNode } from './baseNode';
import { Box, Input, FormControl, FormLabel } from '@chakra-ui/react';

export const NumberNode = ({ id, data }) => {
  const [numValue, setNumValue] = useState(data?.number || 0);

  const handleNumberChange = (e) => setNumValue(Number(e.target.value));

  return (
    <BaseNode id={id} data={data}>
      <Box>
        <FormControl>
          <FormLabel fontSize="sm">Number</FormLabel>
          <Input 
            type="number" 
            value={numValue}
            onChange={handleNumberChange}
            size="sm"
            borderColor="gray.400"
            _hover={{ borderColor: "blue.400" }}
            _focus={{ borderColor: "blue.500", boxShadow: "outline" }}
          />
        </FormControl>
      </Box>
    </BaseNode>
  );
};
