import React, { useState } from 'react';
import { BaseNode } from './baseNode';
import { Select, Box, FormControl, FormLabel } from '@chakra-ui/react';

export const DropdownNode = ({ id, data }) => {
  const [selectedOption, setSelectedOption] = useState(data?.option || 'Option 1');

  const handleSelectChange = (e) => setSelectedOption(e.target.value);

  return (
    <BaseNode id={id} data={data}>
      <Box>
        <FormControl>
          <FormLabel fontSize="sm">Option</FormLabel>
          <Select 
            value={selectedOption} 
            onChange={handleSelectChange}
            size="sm"
            borderColor="gray.400"
            _hover={{ borderColor: "blue.400" }}
            _focus={{ borderColor: "blue.500", boxShadow: "outline" }}
          >
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </Select>
        </FormControl>
      </Box>
    </BaseNode>
  );
};
