import React, { useState, useRef, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { Box, Textarea, Text, Flex } from '@chakra-ui/react';

export const TextNode = ({ id, data }) => {
  const [textValue, setTextValue] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);
  const [height, setHeight] = useState(120);

  const FIXED_WIDTH = 200;
  const MIN_HEIGHT = 120;  
  const CHAR_LIMIT = 10;

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  const detectVariables = (text) => {
    const variableRegex = /\{\{\s*(\w+)\s*\}\}/g;
    const detectedVariables = [];
    let match;
    while ((match = variableRegex.exec(text)) !== null) {
      detectedVariables.push(match[1]); 
    }
    setVariables(detectedVariables);
  };

  useEffect(() => {
    detectVariables(textValue);
    if (textAreaRef.current && textValue.length > CHAR_LIMIT) {
      const newHeight = Math.max(MIN_HEIGHT, textAreaRef.current.scrollHeight + 20);
      setHeight(newHeight);
    } else {
      setHeight(MIN_HEIGHT);
    }
  }, [textValue]);

  return (
    <Flex position="relative" justifyContent="center" alignItems="center">
      {/* Main Node Box */}
      <Box
        width={`${FIXED_WIDTH}px`}
        minHeight={`${height}px`}
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        boxShadow="md"
        p={3}
        bg="white"
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-in`}
          style={{ top: '50%', transform: 'translateY(-50%)' }} 
        />

        <Text fontSize="sm" color="gray.600" fontWeight="bold" mb={2}>
          {data.name || id}
        </Text>

        <Textarea
          ref={textAreaRef}
          value={textValue}
          onChange={handleChange}
          size="sm"
          bg="gray.50"
          borderColor="gray.300"
          _hover={{ borderColor: "blue.300" }}
          _focus={{ borderColor: "blue.500", boxShadow: "outline" }}
          resize="none"
          width={`${FIXED_WIDTH - 20}px`}  
          height={`${height - 40}px`} 
          placeholder="Enter text here..."
        />

        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-out`}
          style={{ top: '50%', transform: 'translateY(-50%)' }} 
        />
      </Box>

      <Box position="absolute"  left="-88px" display="flex" flexDirection="column" justifyContent="center">
        {variables.map((variable, index) => (
          <Flex key={index} alignItems="center" mb={2}>
            <Handle
              type="target"
              position={Position.Left}
              id={`${id}-var-${index}`}
              style={{ left: '85px', top: '0%', transform: 'translateY(-50%)' }} 
            />
            <Text fontSize="xs" marginLeft="2px" marginBottom="30px" color="blue.600" ml={1} fontWeight="medium">
              {variable}
            </Text>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
};
