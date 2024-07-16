// src/components/PopularDestinations.js

import React from 'react';
import { Box, Image, Text, VStack, Grid, GridItem } from '@chakra-ui/react';
import hyderabad from './Photos/hyderabad.jpg';
import newyork from './Photos/newyork.jpg';
import london from './Photos/london.jpg';
import paris from './Photos/paris.jpg';

const destinations = [
  { city: "Hyderabad", country: "India", price: "$110", img: hyderabad },
  { city: "NewYork", country: "USA", price: "$110", img: newyork },
  { city: "London", country: "EngLand", price: "$110", img: london },
  { city: "Paris", country: "France", price: "$110", img: paris },
];

const PopularDestinations = () => {
  return (
    <Box p={8}>
      <Text fontSize="2xl" align="center" fontStyle="normal" fontWeight="bold" mb={4}>Popular right now</Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {destinations.map((destination, index) => (
          <GridItem key={index} bg="white" p={4} borderRadius="md" boxShadow="md">
            <Image src={destination.img} alt={destination.city} borderRadius="md" mb={2} />
            <VStack align="start">
              <Text fontSize="lg">{destination.city}</Text>
              <Text color="gray.500">{destination.country}</Text>
              <Text fontWeight="bold">{destination.price}</Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularDestinations;
