import { Box, Text } from '@chakra-ui/react';

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Box
      bg="gray.300"
      p={1}  
      minW="70px"  
      h="40px"    
      d="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="md"
      draggable
      cursor="grab"
      color="gray.700"
      fontWeight="bold"
      _hover={{
        backgroundColor: "gray.400", 
        boxShadow: "md",  
        transform: "scale(1.05)",  
        transition: "all 0.2s ease-in-out" 
      }}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
    >
      <Text fontSize="sm" fontWeight="bold" color="gray.600">{label}</Text>
    </Box>
  );
};
