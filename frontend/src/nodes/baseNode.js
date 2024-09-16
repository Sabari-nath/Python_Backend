// baseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';
import { Box } from '@chakra-ui/react';

export class BaseNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.data?.name || this.props.id,
      type: this.props.data?.type || 'Default',
      text: this.props.data?.text || '{{input}}',
    };
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  renderHandles() {
    return (
      <>
        <Handle
          type="target"
          position={Position.Left}
          id={`${this.props.id}-in`}
        />
        <Handle
          type="source"
          position={Position.Right}
          id={`${this.props.id}-out`}
        />
      </>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <Box
        bg="white"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        p={3}
        boxShadow="md"
        width="200px"
        height="auto"
        _hover={{
          borderColor: "blue.400",
          boxShadow: "lg",
        }}
      >
        {this.renderHandles()}
        <div>{this.state.name}</div>
        {typeof this.props.children === 'function'
          ? this.props.children(this.handleTextChange, text)
          : this.props.children}
      </Box>
    );
  }
}
