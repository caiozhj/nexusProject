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
} from "@chakra-ui/react";

import { Stack, HStack, VStack } from "@chakra-ui/react";

// modal

import ModalReservas from "./modalReservas";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function TableReservas() {
  const tableBg = useColorModeValue("white", "gray.800");
  const headerBg = useColorModeValue("gray.100", "gray.700");
  const headerColor = useColorModeValue("black", "white");
  const rowBg = useColorModeValue("white", "gray.700");
  const rowHoverBg = useColorModeValue("gray.50", "gray.600");

  const buttonBg = useColorModeValue("blue.400", "blue.300");
  const buttonHoverBg = useColorModeValue("blue.600", "blue.400");
  const buttonColor = useColorModeValue("white", "gray.800");

  const scheduleData = [
    { date: "01/07/2024", activity: "João Silva", status: "Pago" },
    { date: "02/07/2024", activity: "Maria Oliveira", status: "Pendente" },
    { date: "03/07/2024", activity: "Carlos Souza", status: "Pago" },
    { date: "04/07/2024", activity: "Ana Santos", status: "Pendente" },
    { date: "05/07/2024", activity: "Pedro Lima", status: "Pago" },
    { date: "06/07/2024", activity: "Lucas Pereira", status: "Pago" },
    { date: "07/07/2024", activity: "Paula Costa", status: "Pendente" },
    { date: "08/07/2024", activity: "Fernanda Almeida", status: "Pago" },
    { date: "09/07/2024", activity: "Mariana Santos", status: "Pendente" },
    { date: "10/07/2024", activity: "Gustavo Oliveira", status: "Pago" },
    { date: "11/07/2024", activity: "André Souza", status: "Pago" },
    { date: "12/07/2024", activity: "Luiza Lima", status: "Pendente" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pago":
        return "green";
      case "Pendente":
        return "yellow";
      default:
        return "gray";
    }
  };

  // modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <HStack spacing="24px">
        <Heading as="h5" size="sm" mb={4}>
          Pagamentos Recebidos e Pendentes{" "}
        </Heading>
        <Spacer />
        <Button
          size="sm"
          bg={buttonBg}
          color={buttonColor}
          _hover={{ bg: buttonHoverBg }}
          onClick={onOpen}
        >
          Adicionar Pagamento Pendente
        </Button>
      </HStack>

      <Divider />

      <Table variant="simple" mt={4}>
        <Thead bg={headerBg}>
          <Tr>
            <Th color={headerColor} textAlign="left">
              Data
            </Th>
            <Th color={headerColor}>Nome</Th>
            <Th color={headerColor} textAlign="center">
              Status
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {scheduleData.map((item, index) => (
            <Tr key={index} bg={rowBg} _hover={{ bg: rowHoverBg }}>
              <Td textAlign="left">{item.date}</Td>
              <Td>{item.activity}</Td>
              <Td textAlign="center">
                <Badge colorScheme={getStatusColor(item.status)}>
                  {item.status}
                </Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar Pagamento Pendente</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <ModalReservas />
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
