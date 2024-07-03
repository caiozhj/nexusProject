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

import { Stack, HStack, VStack } from '@chakra-ui/react'

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
  useDisclosure
} from '@chakra-ui/react'

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
    { date: "01/07/2024", time: "10:00", activity: "Piscina", status: "Concluído" },
    { date: "02/07/2024", time: "14:00", activity: "Piscina", status: "Pendente" },
    { date: "03/07/2024", time: "09:00", activity: "Churrasqueira ", status: "Em andamento" },
    { date: "04/07/2024", time: "16:00", activity: "Quadra", status: "Concluído" },
    { date: "05/07/2024", time: "11:00", activity: "Salão de Festas", status: "Pendente" },
    { date: "06/07/2024", time: "13:00", activity: "Salão de Festas", status: "Em andamento" },
    { date: "07/07/2024", time: "15:00", activity: "Eventos", status: "Concluído" },
    { date: "08/07/2024", time: "12:00", activity: "Visita técnica", status: "Pendente" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Concluído":
        return "green";
      case "Pendente":
        return "red";
      case "Em andamento":
        return "yellow";
      default:
        return "gray";
    }
  };

  // modal 
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box p={5} bg={tableBg} borderRadius="lg" boxShadow="md">
  <HStack spacing="24px">
    <Heading as="h5" size="sm" mb={4}>
      Reserva de Área
    </Heading>
    <Spacer />
    <Button
      size="sm"
      bg={buttonBg}
      color={buttonColor}
     
      
      _hover={{ bg: buttonHoverBg }}
      onClick={onOpen}
    >
      Reservar Área
    </Button>
  </HStack>

  <Divider />
  <Table variant="simple">
    <Thead bg={headerBg}>
      <Tr>
        <Th color={headerColor}>Data</Th>
        <Th color={headerColor}>Horário</Th>
        <Th color={headerColor}>Área de Lazer</Th>
        <Th color={headerColor}>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td colSpan={4} p={0}>
          <Divider />
        </Td>
      </Tr>
      {scheduleData.map((item, index) => (
        <Tr key={index} bg={rowBg} _hover={{ bg: rowHoverBg }}>
          <Td>{item.date}</Td>
          <Td>{item.time}</Td>
          <Td>{item.activity}</Td>
          <Td>
            <Badge colorScheme={getStatusColor(item.status)}>{item.status}</Badge>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>

  <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar Reserva </ModalHeader>
          <Divider/>
          <ModalCloseButton />
          <ModalBody>
           <ModalReservas/>
          </ModalBody>
          <Divider/>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button variant='ghost'>Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Box>

  );
}
