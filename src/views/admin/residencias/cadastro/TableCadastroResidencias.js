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

export default function TableCadastroResidencias() {
  const tableBg = useColorModeValue("white", "gray.800");
  const headerBg = useColorModeValue("gray.100", "gray.700");
  const headerColor = useColorModeValue("black", "white");
  const rowBg = useColorModeValue("white", "gray.700");
  const rowHoverBg = useColorModeValue("gray.50", "gray.600");

  const buttonBg = useColorModeValue("blue.400", "blue.300");
  const buttonHoverBg = useColorModeValue("blue.600", "blue.400");
  const buttonColor = useColorModeValue("white", "gray.800");

  const residencesData = [
    {
      numeroUnidade: "101",
      bloco: "Bloco A",
      tipo: "Apartamento",
      status: "À venda",
      proprietario: "João da Silva",
      tamanho: "80 m²"
    },
    {
      numeroUnidade: "202",
      bloco: "Bloco B",
      tipo: "Casa",
      status: "Alugada",
      proprietario: "Maria Oliveira",
      tamanho: "120 m²"
    },
    {
      numeroUnidade: "303",
      bloco: "Bloco C",
      tipo: "Apartamento",
      status: "À venda",
      proprietario: "Carlos Ferreira",
      tamanho: "90 m²"
    },
    {
      numeroUnidade: "404",
      bloco: "Bloco D",
      tipo: "Casa",
      status: "À venda",
      proprietario: "Ana Santos",
      tamanho: "150 m²"
    },
    {
      numeroUnidade: "505",
      bloco: "Bloco E",
      tipo: "Apartamento",
      status: "Alugada",
      proprietario: "Pedro Souza",
      tamanho: "100 m²"
    },
    {
      numeroUnidade: "606",
      bloco: "Bloco F",
      tipo: "Casa",
      status: "À venda",
      proprietario: "Fernanda Lima",
      tamanho: "130 m²"
    },
    {
      numeroUnidade: "707",
      bloco: "Bloco G",
      tipo: "Apartamento",
      status: "À venda",
      proprietario: "José Pereira",
      tamanho: "85 m²"
    },
    {
      numeroUnidade: "808",
      bloco: "Bloco H",
      tipo: "Casa",
      status: "Alugada",
      proprietario: "Aline Costa",
      tamanho: "110 m²"
    },
    {
      numeroUnidade: "909",
      bloco: "Bloco I",
      tipo: "Apartamento",
      status: "À venda",
      proprietario: "Ricardo Almeida",
      tamanho: "95 m²"
    },
    {
      numeroUnidade: "1010",
      bloco: "Bloco J",
      tipo: "Casa",
      status: "À venda",
      proprietario: "Carla Silva",
      tamanho: "140 m²"
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "À venda":
        return "green";
      case "Alugada":
        return "yellow";
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
          Listagem de Residências
        </Heading>
        <Spacer />
        <Button
          size="sm"
          bg={buttonBg}
          color={buttonColor}
          _hover={{ bg: buttonHoverBg }}
          onClick={onOpen}
        >
          Cadastrar Nova Residência
        </Button>
      </HStack>

      <Divider />
      <Table variant="simple">
        <Thead bg={headerBg}>
          <Tr>
            <Th color={headerColor}>Número da Unidade</Th>
            <Th color={headerColor}>Bloco</Th>
            <Th color={headerColor}>Tipo de Unidade</Th>
            <Th color={headerColor}>Status</Th>
            <Th color={headerColor}>Proprietário</Th>
            <Th color={headerColor}>Tamanho</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td colSpan={6} p={0}>
              <Divider />
            </Td>
          </Tr>
          {residencesData.map((residence, index) => (
            <Tr key={index} bg={rowBg} _hover={{ bg: rowHoverBg }}>
              <Td>{residence.numeroUnidade}</Td>
              <Td>{residence.bloco}</Td>
              <Td>{residence.tipo}</Td>
              <Td>
                <Badge colorScheme={getStatusColor(residence.status)}>
                  {residence.status}
                </Badge>
              </Td>
              <Td>{residence.proprietario}</Td>
              <Td>{residence.tamanho}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Nova Residência</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            {/* Formulário para cadastrar nova residência */}
            <p>Aqui vai o formulário para cadastrar uma nova residência.</p>
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
