import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { Flex, Container } from '@chakra-ui/react';

function App() {
  return (
    <Container maxW="container.xl" py={6}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <PipelineToolbar />
        <SubmitButton />
      </Flex>
      <PipelineUI />
    </Container>
  );
}

export default App;
