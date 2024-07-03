import React from 'react'

import { Box, SimpleGrid, Heading, useColorModeValue } from '@chakra-ui/react';

import TableCadastroVisitante from './TableCadastroVisitante';    
    export default function TabCadastroVisitante() {

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
        Gestão de Cadastro de Visitantes
        </Heading>
        
          <Box height="100%">
            <TableCadastroVisitante/>
          </Box>
         
      
      </Box>
      )
    }
   