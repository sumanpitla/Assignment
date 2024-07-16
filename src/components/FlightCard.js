// src/components/FlightCard.js
import React from 'react';
import { Box, Badge, Flex, Text, Heading, Button, useColorModeValue } from '@chakra-ui/react';


const FlightCard = ({ departureTime, arrivalTime, from, to, price, inboundDepartureTime, inboundArrivalTime, inboundFrom, inboundTo }) => {
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.700', 'gray.200');
    return (
      <Box
        bg={bgColor}
        p={4}
        rounded="md"
        mb={4}
        shadow="md"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Flex justify="space-between" mb={2}>
          <Box>
            <Text color={textColor} fontSize="xs">
              Wed, Oct 18 : Outbound
            </Text>
          </Box>
          <Box>
            <Text color={textColor} fontSize="xs">
              Wed, Oct 20 : Inbound
            </Text>
          </Box>
          <Box>
            <Text color={textColor} fontSize="xs">
              Included: 1
            </Text>
          </Box>
        </Flex>
        <Flex justify="space-between" mt={4}>
          <Box w="60%">
            <Heading size="sm" color={textColor}>
              {departureTime} : {from}
            </Heading>
            <Text color={textColor} fontSize="xs" mb={2}>
              1h10m : <Badge colorScheme="green">Direct</Badge>
            </Text>
            <Heading size="sm" color={textColor}>
              {arrivalTime} : {to}
            </Heading>
          </Box>
          <Box w="60%">
            <Heading size="sm" color={textColor}>
              {inboundDepartureTime} : {inboundFrom}
            </Heading>
            <Text color={textColor} fontSize="xs" mb={2}>
              1h10m : <Badge colorScheme="green">Direct</Badge>
            </Text>
            <Heading size="sm" color={textColor}>
              {inboundArrivalTime} : {inboundTo}
            </Heading>
          </Box>
          <Box w="40%" textAlign="right">
            <Heading size="xl" color={textColor}>
              ${price}
            </Heading>
            <Button
              colorScheme="blue"
              size="md"
              mt={4}
              rounded="md"
              _hover={{ bg: 'blue.600' }}
            >
              Book Now
            </Button>
          </Box>
        </Flex>
      </Box>
    );
  };

  export default FlightCard;