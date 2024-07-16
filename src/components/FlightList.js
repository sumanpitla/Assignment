// src/components/FlightList.js
import React from 'react';
import { Box, Flex, ButtonGroup, Button } from '@chakra-ui/react';
import FlightCard from './FlightCard';

const flights = [
  {
    departureTime: '21:50',
    arrivalTime: '23:00',
    from: 'Hyderabad, India',
    to: 'New York, USA',
    price: 110,
    inboundDepartureTime: '10:00',
    inboundArrivalTime: '11:10',
    inboundFrom: 'New York, USA',
    inboundTo: 'Hyderabad, India',
  },
  {
    departureTime: '10:00',
    arrivalTime: '11:10',
    from: 'London, England',
    to: 'Paris, France',
    price: 90,
    inboundDepartureTime: '12:00',
    inboundArrivalTime: '13:10',
    inboundFrom: 'Paris, France',
    inboundTo: 'London, England',
  },
  {
    departureTime: '13:30',
    arrivalTime: '15:00',
    from: 'New York, USA',
    to: 'Hyderabad, India',
    price: 120,
    inboundDepartureTime: '16:00',
    inboundArrivalTime: '17:30',
    inboundFrom: 'Hyderabad, India',
    inboundTo: 'New York, USA',
  },
  {
    departureTime: '16:45',
    arrivalTime: '18:00',
    from: 'Paris, France',
    to: 'London, England',
    price: 140,
    inboundDepartureTime: '19:00',
    inboundArrivalTime: '20:15',
    inboundFrom: 'London, England',
    inboundTo: 'Paris, France',
  },
  {
    departureTime: '08:20',
    arrivalTime: '09:30',
    from: 'Hyderabad, India',
    to: 'New York, USA',
    price: 85,
    inboundDepartureTime: '10:30',
    inboundArrivalTime: '11:40',
    inboundFrom: 'New York, USA',
    inboundTo: 'Hyderabad, India',
  },
  {
    departureTime: '19:10',
    arrivalTime: '21:00',
    from: 'London, England',
    to: 'Paris, France',
    price: 100,
    inboundDepartureTime: '22:00',
    inboundArrivalTime: '23:30',
    inboundFrom: 'Paris, France',
    inboundTo: 'London, England',
  },
  {
    departureTime: '06:00',
    arrivalTime: '07:50',
    from: 'New York, USA',
    to: 'Hyderabad, India',
    price: 95,
    inboundDepartureTime: '08:50',
    inboundArrivalTime: '10:40',
    inboundFrom: 'Hyderabad, India',
    inboundTo: 'New York, USA',
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