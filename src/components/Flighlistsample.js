// src/components/FlightList.js
import React from 'react';
import { Box, Flex, ButtonGroup, Button } from '@chakra-ui/react';
import FlightCard from './FlightCard';

const flights = [
  {
    departureTime: '21:50',
    arrivalTime: '23:00',
    from: 'Gdansk Lech Walesa GDN',
    to: 'Poznan Lawica POZ',
    price: 110,
  },
  {
    departureTime: '10:00',
    arrivalTime: '11:10',
    from: 'Warsaw Chopin WAW',
    to: 'Krakow KRK',
    price: 90,
  },
  {
    departureTime: '13:30',
    arrivalTime: '15:00',
    from: 'Berlin BER',
    to: 'Munich MUC',
    price: 120,
  },
  {
    departureTime: '16:45',
    arrivalTime: '18:00',
    from: 'London LHR',
    to: 'Paris CDG',
    price: 140,
  },
  {
    departureTime: '08:20',
    arrivalTime: '09:30',
    from: 'Madrid MAD',
    to: 'Barcelona BCN',
    price: 85,
  },
  {
    departureTime: '19:10',
    arrivalTime: '21:00',
    from: 'Rome FCO',
    to: 'Venice VCE',
    price: 100,
  },
  {
    departureTime: '06:00',
    arrivalTime: '07:50',
    from: 'Amsterdam AMS',
    to: 'Brussels BRU',
    price: 95,
  },
];

const FlightList = () => {
  return (
    <Box p={4}>
      <Flex justify="space-between" mb={4}>
        <ButtonGroup size="sm" isAttached>
          <Button>Cheapest</Button>
          <Button>Fastest</Button>
        </ButtonGroup>
        <ButtonGroup size="sm" isAttached>
          <Button>Stops</Button>
        </ButtonGroup>
      </Flex>
      {flights.map((flight, index) => (
        <FlightCard key={index} {...flight} />
      ))}
    </Box>
  );
};

export default FlightList;
