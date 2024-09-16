import React, { useState } from 'react';
import { useStore } from './store';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Box } from '@chakra-ui/react';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const [isOpen, setIsOpen] = useState(false);
  const [pipelineResult, setPipelineResult] = useState(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async () => {
    const pipelineData = { nodes, edges };

    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pipelineData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the pipeline data');
      }

      const resultData = await response.json();
      setPipelineResult(resultData);
      openModal();
    } catch (error) {
      console.error('Error submitting the pipeline:', error);
      alert('Error submitting the pipeline.');
    }
  };

  return (
    <>
      <Button colorScheme="blue" onClick={handleSubmit}>
        Submit Pipeline
      </Button>

      <Modal isOpen={isOpen} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent maxWidth="400px" borderRadius="lg" boxShadow="lg">
          <ModalHeader 
            bg="gray.800" 
            color="white" 
            borderTopRadius="lg" 
            textAlign="center" 
            fontSize="lg" 
            fontWeight="bold"
            py={2}
          >
            Pipeline Result
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody py={4} px={6} bg="gray.50">
            {pipelineResult ? (
              <Box>
                <Text fontSize="md" fontWeight="bold" mb={2} color="gray.700">
                  Number of Nodes: <span style={{ color: "#2D3748" }}>{pipelineResult.num_nodes}</span>
                </Text>
                <Text fontSize="md" fontWeight="bold" mb={2} color="gray.700">
                  Number of Edges: <span style={{ color: "#2D3748" }}>{pipelineResult.num_edges}</span>
                </Text>
                <Text fontSize="md" fontWeight="bold" color="gray.700">
                  Is DAG: <span style={{ color: pipelineResult.is_dag ? "green" : "red" }}>{pipelineResult.is_dag ? 'Yes' : 'No'}</span>
                </Text>
              </Box>
            ) : (
              <Text>Loading result...</Text>
            )}
          </ModalBody>

          <ModalFooter bg="gray.100">
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
