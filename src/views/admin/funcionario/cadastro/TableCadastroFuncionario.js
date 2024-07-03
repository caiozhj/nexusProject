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

export default function TableCadastroFuncionario() {
  const tableBg = useColorModeValue("white", "gray.800");
  const headerBg = useColorModeValue("gray.100", "gray.700");
  const headerColor = useColorModeValue("black", "white");
  const rowBg = useColorModeValue("white", "gray.700");
  const rowHoverBg = useColorModeValue("gray.50", "gray.600");

  const buttonBg = useColorModeValue("blue.400", "blue.300");
  const buttonHoverBg = useColorModeValue("blue.600", "blue.400");
  const buttonColor = useColorModeValue("white", "gray.800");

  const employeesData = [
    {
      nome: "João da Silva",
      dataNascimento: "15/03/1980",
      telefone: "(11) 99999-9999",
      cpf: "123.456.789-00",
      cargo: "Porteiro",
      escalaServico: "12x36",
      permissoes: "Acesso restrito",
    },
    {
      nome: "Maria Oliveira",
      dataNascimento: "22/07/1975",
      telefone: "(21) 88888-8888",
      cpf: "987.654.321-00",
      cargo: "Zelador",
      escalaServico: "Segunda a sexta",
      permissoes: "Acesso total",
    },
    {
      nome: "Fernando Souza",
      dataNascimento: "05/10/1983",
      telefone: "(31) 77777-7777",
      cpf: "555.444.333-22",
      cargo: "Administrador",
      escalaServico: "08:00 - 18:00",
      permissoes: "Acesso restrito",
    },
    {
      nome: "Ana Costa",
      dataNascimento: "12/06/1990",
      telefone: "(51) 66666-6666",
      cpf: "111.222.333-44",
      cargo: "Segurança",
      escalaServico: "24x48",
      permissoes: "Acesso restrito",
    },
    {
      nome: "Marcos Santos",
      dataNascimento: "30/04/1988",
      telefone: "(41) 55555-5555",
      cpf: "777.888.999-11",
      cargo: "Manutenção",
      escalaServico: "Segunda a sábado",
      permissoes: "Acesso restrito",
    },
    {
      nome: "Carla Lima",
      dataNascimento: "18/09/1985",
      telefone: "(61) 44444-4444",
      cpf: "222.333.444-55",
      cargo: "Recepcionista",
      escalaServico: "08:00 - 14:00",
      permissoes: "Acesso restrito",
    },
  ];

  const getStatusColor = (permissoes) => {
    switch (permissoes) {
      case "Acesso restrito":
        return "yellow";
      case "Acesso total":
        return "green";
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
          Cadastro de Funcionários
        </Heading>
        <Spacer />
        <Button
          size="sm"
          bg={buttonBg}
          color={buttonColor}
          _hover={{ bg: buttonHoverBg }}
          onClick={onOpen}
        >
          Cadastrar Novo Funcionário
        </Button>
      </HStack>

      <Divider />
      <Table variant="simple">
        <Thead bg={headerBg}>
          <Tr>
            <Th color={headerColor}>Nome</Th>
            <Th color={headerColor}>Data de Nascimento</Th>
            <Th color={headerColor}>Telefone</Th>
            <Th color={headerColor}>CPF</Th>
            <Th color={headerColor}>Cargo</Th>
            <Th color={headerColor}>Escala de Serviço</Th>
            <Th color={headerColor}>Permissões</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td colSpan={7} p={0}>
              <Divider />
            </Td>
          </Tr>
          {employeesData.map((employee, index) => (
            <Tr key={index} bg={rowBg} _hover={{ bg: rowHoverBg }}>
              <Td>{employee.nome}</Td>
              <Td>{employee.dataNascimento}</Td>
              <Td>{employee.telefone}</Td>
              <Td>{employee.cpf}</Td>
              <Td>{employee.cargo}</Td>
              <Td>{employee.escalaServico}</Td>
              <Td>
                <Badge colorScheme={getStatusColor(employee.permissoes)}>
                  {employee.permissoes}
                </Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastrar Novo Funcionário</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            {/* Formulário para cadastrar um novo funcionário */}
            <p>Aqui vai o formulário para cadastrar um novo funcionário.</p>
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
