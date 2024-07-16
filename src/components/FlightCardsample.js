// src/components/FlightCard.js
import React from 'react';
import { Box, Flex, Text, Button, Divider, Badge } from '@chakra-ui/react';

const FlightCard = ({ departureTime, arrivalTime, from, to, price }) => {
  return (
    <Box bg="white" boxShadow="md" borderRadius="md" p={4} mb={4}>
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontWeight="bold">{departureTime}</Text>
          <Text>{from}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">{arrivalTime}</Text>
          <Text>{to}</Text>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold" color="blue.500">${price}</Text>
          <Button colorScheme="blue" size="sm">Book Now</Button>
        </Box>
      </Flex>
      <Divider my={4} />
      <Flex justify="space-between" align="center">
        <Badge colorScheme="green">Direct</Badge>
        <Text>Included: 0 bag</Text>
      </Flex>
    </Box>
  );
};

export default FlightCard;
