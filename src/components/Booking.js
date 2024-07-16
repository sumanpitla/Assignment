// src/components/Booking.js

import React from 'react';
import { Box, Button, Flex, Input, Select, Text, VStack, Grid, Image } from '@chakra-ui/react';

const Booking = () => {
  return (
    <Box bg="blue.50" p={8}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="6xl" align="center" fontWeight="bold" >Let's Book Your Flight</Text>
        <Text fontSize="lg" align="center">Make your flight more memorable</Text>
        <Flex bg="white" p={4} borderRadius="md" boxShadow="md" justify="space-between">
          <Select placeholder="From" w="180px">
            <option value="GDN">Hyderabad (IND)</option>
          </Select>
          <Select placeholder="To" w="180px" ml={2}>
            <option value="POZ">NewYork (USA)</option>
            <option value="POZ">London (ENG)</option>
          </Select>
          <Input type="date" placeholder="Depart" w="200px" ml={2} />
          <Select placeholder="1 Passenger, Economy" w="200px" ml={2}>
            <option value="1">1 Passenger, Economy</option>
            <option value="1">2 Passenger, Economy</option>
            <option value="1">1 Passenger, Class</option>
          </Select>
          <Button colorScheme="blue" w="100px" ml={2}>Search</Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Booking;