// src/components/GreatDeals.js

import React from 'react';
import { Box, Grid, GridItem, Text, Image, Flex } from '@chakra-ui/react';

import indiaFlag from './Photos/flags/india.png';
import germanyFlag from './Photos/flags/germany.png';
import polandFlag from './Photos/flags/round.png';
import swedenFlag from './Photos/flags/netherlands.png';
import canadaFlag from './Photos/flags/canada.png';
import spainFlag from './Photos/flags/spain.png';
import unitedKingdomFlag from './Photos/flags/united-kingdom.png';
import unitedStatesFlag from './Photos/flags/united-states.png';
import japanFlag from './Photos/flags/south-korea.png';
import brazilFlag from './Photos/flags/brazil.png';
import newzlandFlag from './Photos/flags/newzland.png';
import portugalFlag from './Photos/flags/portugal.png';

const deals = [
  { country: "India", price: "$110", flag: indiaFlag },
  { country: "Germany", price: "$110", flag: germanyFlag },
  { country: "Poland", price: "$110", flag: polandFlag },
  { country: "Sweden", price: "$110", flag: swedenFlag },
  { country: "Canada", price: "$110", flag: canadaFlag },
  { country: "Spain", price: "$110", flag: spainFlag },
  { country: "United Kingdom", price: "$110", flag: unitedKingdomFlag },
  { country: "United States", price: "$110", flag: unitedStatesFlag },
  { country: "Japan", price: "$110", flag: japanFlag },
  { country: "Brazil", price: "$110", flag: brazilFlag },
  {country: "Newzland", price: "$110", flag: newzlandFlag },
  {country: "Portugal", price: "$110", flag: portugalFlag },

];

const GreatDeals = () => {
  return (
    <Box p={8} bg="blue.50">
      <Text fontSize="2xl" align="center" fontWeight="bold" mb={4}>Great deals on plane tickets</Text>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)', // for mobile devices (less than 480px)
          md: 'repeat(2, 1fr)', // for tablets (between 480px and 768px)
          lg: 'repeat(3, 1fr)', // for desktop devices (greater than 768px)
        }}
        gap={4}
      >
        {deals.map((deal, index) => (
          <GridItem key={index} bg="white" p={4} borderRadius="md" boxShadow="md">
            <Flex justify="space-between">
              <Flex align="center">
                <Image src={deal.flag} alt={`${deal.country} flag`} boxSize="30px" mr={2} />
                <Text>{deal.country}</Text>
              </Flex>
              <Text fontWeight="bold" color="blue.500">{deal.price}</Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default GreatDeals;