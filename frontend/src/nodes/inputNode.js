import React from 'react';
import { BaseNode } from './baseNode';
import { Input, Select, Box, FormControl, FormLabel } from '@chakra-ui/react';

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data}>
      <Box>
        <FormControl mb={2}>
          <FormLabel fontSize="sm">Name</FormLabel>
          <Input 
            type="text" 
            value={data.inputName} 
            readOnly 
            size="sm"
            borderColor="gray.400" 
            _hover={{ borderColor: "blue.400" }} 
            _focus={{ borderColor: "blue.500", boxShadow: "outline" }} 
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="sm">Type</FormLabel>
          <Select 
            value={data.inputType} 
            size="sm"
            borderColor="gray.400"
            _hover={{ borderColor: "blue.400" }} 
            _focus={{ borderColor: "blue.500", boxShadow: "outline" }} 
            readOnly
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </Select>
        </FormControl>
      </Box>
    </BaseNode>
  );
};
