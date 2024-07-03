import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Divider,
  Badge,
  Heading,
  Button,
  Spacer,
  HStack
} from "@chakra-ui/react";

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'

export default function TableCadastroVisitante() {
  const tableBg = useColorModeValue("white", "gray.800");
  const headerBg = useColorModeValue("gray.100", "gray.700");
  const headerColor = useColorModeValue("black", "white");
  const rowBg = useColorModeValue("white", "gray.700");
  const rowHoverBg = useColorModeValue("gray.50", "gray.600");

  const buttonBg = useColorModeValue("blue.400", "blue.300");
  const buttonHoverBg = useColorModeValue("blue.600", "blue.400");
  const buttonColor = useColorModeValue("white", "gray.800");

  const visitorsData = [
    {
      nomeVisitante: "Carlos da Silva",
      casaBloco: "Bloco A, Casa 101",
      dia: "01/07/2024",
      horario: "14:00",
      morador: "Ana Carolina Oliveira Lima",
      status: "Acesso Livre",
    },
    {
      nomeVisitante: "Mariana Oliveira",
      casaBloco: "Bloco B, Casa 202",
      dia: "02/07/2024",
      horario: "16:00",
      morador: "Gustavo Santos Silva",
      status: "Pendente",
    },
    {
      nomeVisitante: "Pedro Almeida",
      casaBloco: "Bloco C, Casa 303",
      dia: "03/07/2024",
      horario: "09:00",
      morador: "Fernando Henrique Costa",
      status: "Rejeitado",
    },
    {
      nomeVisitante: "Juliana Santos",
      casaBloco: "Bloco D, Casa 404",
      dia: "04/07/2024",
      horario: "15:00",
      morador: "Patrícia Martins Pereira",
      status: "Acesso Livre",
    },
    {
      nomeVisitante: "Lucas Oliveira",
      casaBloco: "Bloco E, Casa 505",
      dia: "05/07/2024",
      horario: "11:00",
      morador: "Rafael da Silva Santos",
      status: "Pendente",
    },
    {
        nomeVisitante: "Fernanda Lima",
        casaBloco: "Bloco F, Casa 606",
        dia: "06/07/2024",
        horario: "14:30",
        morador: "Luis Fernando Costa",
        status: "Acesso Livre",
      },
      {
        nomeVisitante: "André Santos",
        casaBloco: "Bloco G, Casa 707",
        dia: "07/07/2024",
        horario: "10:00",
        morador: "Camila Almeida Pereira",
        status: "Pendente",
      },
      {
        nomeVisitante: "Isabela Oliveira",
        casaBloco: "Bloco H, Casa 808",
        dia: "08/07/2024",
        horario: "12:00",
        morador: "Lucas Oliveira Santos",
        status: "Rejeitado",
      },
      {
        nomeVisitante: "Rodrigo Alves",
        casaBloco: "Bloco I, Casa 909",
        dia: "09/07/2024",
        horario: "16:00",
        morador: "Carla Silva Ribeiro",
        status: "Acesso Livre",
      },
      {
        nomeVisitante: "Ana Paula Martins",
        casaBloco: "Bloco J, Casa 1010",
        dia: "10/07/2024",
        horario: "15:00",
        morador: "Rodrigo Santos Alves",
        status: "Pendente",
      },
      
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Acesso Livre":
        return "green";
      case "Pendente":
        return "yellow";
      case "Rejeitado":
        return "red";
      default:
        return "gray";
    }
  };

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={5} bg={tableBg} borderRadius="lg" boxShadow="md">
      <HStack spacing="24px">
        <Heading as="h5" size="sm" mb={4}>
          Listagem de Visitantes
        </Heading>
        <Spacer />
        <Button
          size="sm"
          bg={buttonBg}
          color={buttonColor}
          _hover={{ bg: buttonHoverBg }}
          onClick={onOpen}
        >
          Cadastrar Novo Visitante
        </Button>
      </HStack>

      <Divider />
      <Table variant="simple">
        <Thead bg={headerBg}>
          <Tr>
            <Th color={headerColor}>Nome do Visitante</Th>
            <Th color={headerColor}>Casa/Bloco a Visitar</Th>
            <Th color={headerColor}>Dia</Th>
            <Th color={headerColor}>Horário</Th>
            <Th color={headerColor}>Morador Responsável</Th>
            <Th color={headerColor}>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td colSpan={6} p={0}>
              <Divider />
            </Td>
          </Tr>
          {visitorsData.map((visitor, index) => (
            <Tr key={index} bg={rowBg} _hover={{ bg: rowHoverBg }}>
              <Td>{visitor.nomeVisitante}</Td>
              <Td>{visitor.casaBloco}</Td>
              <Td>{visitor.dia}</Td>
              <Td>{visitor.horario}</Td>
              <Td>{visitor.morador}</Td>
              <Td>
                <Badge colorScheme={getStatusColor(visitor.status)}>
                  {visitor.status}
                </Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Novo Visitante</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            {/* Formulário para cadastrar novo visitante */}
            <p>Aqui vai o formulário para cadastrar um novo visitante.</p>
          </ModalBody>
          <Divider />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button variant="ghost">Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
