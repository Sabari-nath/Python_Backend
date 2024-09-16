import React from 'react';
import { BaseNode } from './baseNode';
import { Box, Text } from '@chakra-ui/react';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data}>
      <Box>
        <Text fontSize="sm">This is an LLM Node.</Text>
      </Box>
    </BaseNode>
  );
};
