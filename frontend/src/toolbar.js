import { DraggableNode } from './draggableNode';
import { Flex, Box } from '@chakra-ui/react';

export const PipelineToolbar = () => {
  return (
    <Box p={2} bg="gray.100" borderRadius="md" boxShadow="sm" maxW="800px" mx="auto">
      <Flex mt={1} wrap="nowrap" gap={1} justifyContent="center">
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm' label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text' label='Text' />
        <DraggableNode type='boolean' label='Toggle Boolean' />
        <DraggableNode type='number' label='Number' />
        <DraggableNode type='dropDown' label='DropDown' />
        <DraggableNode type='slider' label='Slider' />
        <DraggableNode type='colourPick' label='Colour picker' />
      </Flex>
    </Box>
  );
};
