import React from 'react';
import { Box, Heading, Flex, Input, Button } from '@chakra-ui/react';

const EmailSignup = () => {
  return (
    <Box
      bg="blue.50"
      p={4}
      rounded="md"
      shadow="md"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Heading as="h2" size="lg" mb={4} align="center">
        Want to receive exclusive discounts and updates straight to your inbox?
      </Heading>
      <Flex px={8} align="center">
        <Input
          type="email"
          placeholder="Your Email"
          size="lg"
          variant="filled"
          borderColor="gray.300"
          mr={2} // Add a small margin to the right of the input
          w="auto"
          flex={1}
        />
        <Button
          colorScheme="blue"
          size="lg"
          rounded="md"
          _hover={{ bg: 'blue.600' }}
        >
          Sign me up
        </Button>
      </Flex>
    </Box>
  );
};

export default EmailSignup;