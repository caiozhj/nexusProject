import React from "react";
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
  Divider,
} from "@chakra-ui/react";

// Dados de exemplo


const reservations = [
  {
    requesterName: "Segurança Ltda.",
    area: "Serviços de Segurança",
    day: "15/07/2024",
    time: "R$ 800,00",
  },
  {
    requesterName: "Limpeza & Cia.",
    area: "Serviços de Limpeza",
    day: "10/07/2024",
    time: "R$ 400,00",
  },
  {
    requesterName: "Jardinagem Verde",
    area: "Manutenção de Jardins",
    day: "20/07/2024",
    time: "R$ 300,00",
  },
];

export default function SecondTable() {
  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md">
      <Heading as="h5" size="sm" mb={4}>
        Contas a Pagar Pendente
      </Heading>
      <Divider />
      <TableContainer>
        <Table variant="simple">
          <TableCaption> Contas a Pagar Pendente</TableCaption>
          <Thead bg="gray.100">
            <Tr>
              <Th>Nome do Responsável</Th>
              <Th>Descrição</Th>
              <Th>Data de Vencimento</Th>
              <Th>Valor</Th>
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
  );
}
