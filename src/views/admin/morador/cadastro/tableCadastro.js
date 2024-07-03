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



import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  
} from '@chakra-ui/react'

export default function TableCadastro() {
    const tableBg = useColorModeValue("white", "gray.800");
    const headerBg = useColorModeValue("gray.100", "gray.700");
    const headerColor = useColorModeValue("black", "white");
    const rowBg = useColorModeValue("white", "gray.700");
    const rowHoverBg = useColorModeValue("gray.50", "gray.600");
  
    const buttonBg = useColorModeValue("blue.400", "blue.300");
    const buttonHoverBg = useColorModeValue("blue.600", "blue.400");
    const buttonColor = useColorModeValue("white", "gray.800");
  
    const residentsData = [
        {
            nomeProprietario: "Gustavo Santos Silva",
            cpf: "456.789.123-00",
            telefone: "(31) 77777-1111",
            nascimento: "10/08/1985",
            situacao: "Morando",
            quantidadeMoradores: 4,
            status: "Pagamentos em dia",
          },
          {
            nomeProprietario: "Ana Carolina Oliveira Lima",
            cpf: "321.654.987-00",
            telefone: "(41) 55555-2222",
            nascimento: "20/03/1990",
            situacao: "Alugada",
            quantidadeMoradores: 1,
            status: "Pagamentos a receber",
          },
          {
            nomeProprietario: "Fernando Henrique Costa",
            cpf: "111.222.333-44",
            telefone: "(51) 33333-3333",
            nascimento: "05/12/1973",
            situacao: "Morando",
            quantidadeMoradores: 2,
            status: "Pagamentos em dia",
          },
          {
            nomeProprietario: "Patrícia Martins Pereira",
            cpf: "555.444.333-22",
            telefone: "(61) 66666-4444",
            nascimento: "15/07/1988",
            situacao: "Alugada",
            quantidadeMoradores: 3,
            status: "Pagamentos em dia",
          },
          {
            nomeProprietario: "Rafael da Silva Santos",
            cpf: "777.888.999-11",
            telefone: "(91) 44444-5555",
            nascimento: "30/05/1982",
            situacao: "Morando",
            quantidadeMoradores: 2,
            status: "Pagamentos a receber",
          },

          {
            nomeProprietario: "Luis Fernando Costa",
            cpf: "123.456.789-00",
            telefone: "(21) 99999-1111",
            nascimento: "12/04/1980",
            situacao: "Morando",
            quantidadeMoradores: 2,
            status: "Pagamentos em dia",
          },
          {
            nomeProprietario: "Camila Almeida Pereira",
            cpf: "987.654.321-00",
            telefone: "(31) 88888-2222",
            nascimento: "25/09/1975",
            situacao: "Alugada",
            quantidadeMoradores: 1,
            status: "Pagamentos a receber",
          },
          {
            nomeProprietario: "Lucas Oliveira Santos",
            cpf: "111.222.333-44",
            telefone: "(41) 77777-3333",
            nascimento: "08/12/1978",
            situacao: "Morando",
            quantidadeMoradores: 3,
            status: "Pagamentos em dia",
          },
          {
            nomeProprietario: "Carla Silva Ribeiro",
            cpf: "555.666.777-88",
            telefone: "(51) 66666-4444",
            nascimento: "14/07/1983",
            situacao: "Alugada",
            quantidadeMoradores: 2,
            status: "Pagamentos em dia",
          },
          {
            nomeProprietario: "Rodrigo Santos Alves",
            cpf: "999.888.777-66",
            telefone: "(61) 55555-5555",
            nascimento: "30/05/1985",
            situacao: "Morando",
            quantidadeMoradores: 4,
            status: "Pagamentos a receber",
          },
          {
            nomeProprietario: "Juliana Pereira Martins",
            cpf: "222.333.444-55",
            telefone: "(71) 33333-9999",
            nascimento: "18/10/1990",
            situacao: "Morando",
            quantidadeMoradores: 1,
            status: "Pagamentos em dia",
          },
      // Adicione mais dados conforme necessário
    ];
  
    const getStatusColor = (status) => {
      switch (status) {
        case "Pagamentos em dia":
          return "green";
        case "Pagamentos a receber":
          return "red";
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
        Listagem de Moradores
      </Heading>
      <Spacer />
      <Button
        size="sm"
        bg={buttonBg}
        color={buttonColor}
        _hover={{ bg: buttonHoverBg }}
        onClick={onOpen}
      >
        Cadastrar Novo Morador
      </Button>
    </HStack>

    <Divider />
    <Table variant="simple">
      <Thead bg={headerBg}>
        <Tr>
          <Th color={headerColor}>Nome do Proprietário</Th>
          <Th color={headerColor}>CPF</Th>
          <Th color={headerColor}>Telefone</Th>
          <Th color={headerColor}>Data de Nascimento</Th>
          <Th color={headerColor}>Situação</Th>
          <Th color={headerColor}>Quantidade de Moradores</Th>
          <Th color={headerColor}>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td colSpan={7} p={0}>
            <Divider />
          </Td>
        </Tr>
        {residentsData.map((resident, index) => (
          <Tr key={index} bg={rowBg} _hover={{ bg: rowHoverBg }}>
            <Td>{resident.nomeProprietario}</Td>
            <Td>{resident.cpf}</Td>
            <Td>{resident.telefone}</Td>
            <Td>{resident.nascimento}</Td>
            <Td>{resident.situacao}</Td>
            <Td>{resident.quantidadeMoradores}</Td>
            <Td>
              <Badge colorScheme={getStatusColor(resident.status)}>
                {resident.status}
              </Badge>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>

    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastrar Novo Morador</ModalHeader>
        <Divider/>
        <ModalCloseButton />
        <ModalBody>
          {/* Formulário para cadastrar novo morador */}
          <p>Aqui vai o formulário para cadastrar um novo morador.</p>
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
