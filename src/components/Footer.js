// src/components/Footer.js
import React from 'react';
import { Box, Flex, Link, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="blue.900" color="white" py={10}>
      <Flex justify="space-around" mb={10}>
        <Box>
          <Text fontWeight="bold" fontSize="xl" mb={4}>SkyChex</Text>
          <Text mb={4}><p>Whether you're planning a vacation,
             a business trip, or any other travel adventure, 
             </p>
             <pr>
             SkyChex offers a friendly and comprehensive solution to meet your flight booking needs.</pr></Text>
          <HStack spacing={4}>
            <Link href="#" isExternal><Icon as={FaFacebook} boxSize={6} /></Link>
            <Link href="#" isExternal><Icon as={FaTwitter} boxSize={6} /></Link>
            <Link href="#" isExternal><Icon as={FaInstagram} boxSize={6} /></Link>
            <Link href="#" isExternal><Icon as={FaLinkedin} boxSize={6} /></Link>
          </HStack>
        </Box>
        <VStack align="flex-start">
          <Text fontWeight="bold" mb={2}>Book with us</Text>
          <Link href="#">Airlines we ticket</Link>
          <Link href="#">Buy now, pay later</Link>
          <Link href="#">Pay the way you want</Link>
          <Link href="#">You're protected</Link>
          <Link href="#">Our customer service</Link>
          <Link href="#">Travel agents</Link>
        </VStack>
        <VStack align="flex-start">
          <Text fontWeight="bold" mb={2}>My booking</Text>
          <Link href="#">Manage my booking</Link>
          <Link href="#">Help centre</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Contact us</Link>
          <Link href="#">Travel advice</Link>
        </VStack>
        <VStack align="flex-start">
          <Text fontWeight="bold" mb={2}>Company</Text>
          <Link href="#">About us</Link>
          <Link href="#">Reviews</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Media centre</Link>
          <Link href="#">Careers</Link>
        </VStack>
      </Flex>
      <Flex justify="center">
        <Link href="#" mx={2}>Privacy</Link>
        <Link href="#" mx={2}>Terms</Link>
        <Link href="#" mx={2}>Sitemap</Link>
      </Flex>
    </Box>
  );
};

export default Footer;
