// src/components/Navbar.js

import React from 'react';
import { Box, Flex, Text, Button, IconButton, Image } from '@chakra-ui/react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsPhoneVibrate } from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';
import logo from './Photos/Logo.jpeg';

const Navbar = () => {
  return (
    <Box bg="blue.500" color="white">
      <Flex justify="space-between" align="center" p={4}>
        <Flex align="center">
          <Image src={logo} alt="Logo" boxSize="150px" />
        </Flex>
        <Text fontSize="3xl" fontWeight="bold" align="center" ml={2}>SkyChex</Text>
        <Flex display={{ base: 'none', md: 'flex' }} align="center">
          <Flex align="center" mr={4}>
            <BsPhoneVibrate />
            <Text ml={2}>Support</Text>
          </Flex>
          <Flex align="center" mr={4}>
            <AiOutlineGlobal />
            <Text ml={2}>Languages</Text>
          </Flex>
          <Button
            variant="solid"
            colorScheme="blue"
            size="md"
            mr={4}
            _hover={{ bg: 'blue.700' }}
          >
            Sign In
          </Button>
          <Button
            variant="solid"
            bg="white"
            color="blue.500"
            size="md"
            _hover={{ bg: 'gray.100' }}
          >
            Sign Up
          </Button>
        </Flex>
        <IconButton
          icon={<CgMenuGridO />}
          display={{ base: 'flex', md: 'none' }}
          variant="ghost"
          colorScheme="whiteAlpha"
        />
      </Flex>
    </Box>
  );
};

export default Navbar;