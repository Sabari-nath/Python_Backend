import React, { useState } from 'react';
import { BaseNode } from './baseNode';
import { Box, Text, Switch } from '@chakra-ui/react';

export const BooleanNode = ({ id, data }) => {
  const [boolValue, setBoolValue] = useState(data?.bool || false);

  const handleToggle = () => setBoolValue(!boolValue);

  return (
    <BaseNode id={id} data={data}>
      <Box>
        <Text mb={2}>Value: {boolValue.toString()}</Text>
        <Switch 
          size="md"  
          colorScheme={boolValue ? "green" : "red"} 
          isChecked={boolValue} 
          onChange={handleToggle}
        />
      </Box>
    </BaseNode>
  );
};
