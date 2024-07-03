import React from "react";
import { Box, SimpleGrid, Heading, useColorModeValue } from '@chakra-ui/react';

import { Grid, GridItem } from '@chakra-ui/react'



import TableReservas from "./tableReservas";
import SecondTable from "./secondTable";

export default function TabReservas() {
  
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      p={5}
      bg={bgColor}
      borderRadius="lg"
      boxShadow="md"
      borderWidth="1px"
      borderColor={borderColor}
      mx="auto"
      
    >
      <Heading as="h3" size="lg" mb={6} textAlign="center">
      Gestão de Reservas 
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box height="100%">
          <TableReservas />
        </Box>
        <Box height="100%">
          <SecondTable />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
