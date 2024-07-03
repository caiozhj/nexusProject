import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Badge,
  HStack,
  Heading,
  Divider  
} from '@chakra-ui/react';



// Dados de exemplo
const reservations = [
    {
      requesterName: 'João Silva',
      area: 'Piscina',
      day: '12/07',
      time: '14:00',
    },
    {
      requesterName: 'Maria Oliveira',
      area: 'Salão de Festas',
      day: '05/07',
      time: '18:00',
    },
    {
      requesterName: 'Carlos Souza',
      area: 'Churrasqueira',
      day: '10/07',
      time: '12:00',
    },
  ];


export default function SecondTable(){

    return(
       
        <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
           
             <Heading as="h5" size="sm" mb={4}>
        Lista de Pedidos Pendentes
      </Heading>
      <Divider/>
      <TableContainer>
        
        <Table variant="simple">
          <TableCaption>Reservas de Áreas de Lazer</TableCaption>
          <Thead bg="gray.100">
            <Tr>
              <Th>Nome do Solicitante</Th>
              <Th>Área Alugada</Th>
              <Th>Dia</Th>
              <Th>Horário</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reservations.map((reservation, index) => (
              <Tr key={index}>
                <Td>{reservation.requesterName}</Td>
                <Td>{reservation.area}</Td>
                <Td>{reservation.day}</Td>
                <Td>{reservation.time}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
     
    </Box>

    )
}