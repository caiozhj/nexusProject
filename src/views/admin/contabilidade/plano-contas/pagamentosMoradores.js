import React, { useState } from "react";
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
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HStack } from '@chakra-ui/react';
import ResidentDetails from './ResidentDetails';

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
      id: 1,
      telefone: "(31) 77777-1111",
      nascimento: "10/08/1985",
      situacao: "Morando",
      cpf: "125.933.049-00",
      quantidadeMoradores: 4,
      status: "Pagamentos em dia",
      transaction_amount: 10,
      description: "Pagamento de Condominio",
      email: "gustavosortvto2122@gmail.com",
      first_name: "Gustavo Santos",
      last_name: "Silva",
      // number: "15635303099",
      zip_code: "66095020",
      street_name: "Passagem Bolivar",
      street_number: "32",
      neighborhood: "Pratinha",
      city: "Belém",
      federal_unit: "PA",
      ultimosPagamentos: [
        { mes: "Junho", valor: "R$ 600,00", status: "Pago" },
        { mes: "Maio", valor: "R$ 600,00", status: "Pago" },
        { mes: "Abril", valor: "R$ 600,00", status: "Pago" },
      ],
    },
    {
      id: 2,
      telefone: "(31) 88888-2222",
      nascimento: "15/09/1990",
      situacao: "Morando",
      cpf: "625.983.049-00",
      quantidadeMoradores: 2,
      status: "Pagamentos atrasados",
      transaction_amount: 20,
      description: "Pagamento de Condominio",
      email: "carlos.barbosa@itec.ufpa.br",
      first_name: "Maria Fernanda",
      last_name: "Oliveira",
      // number: "54387485000",
      zip_code: "66095120",
      street_name: "Rua Amazonas",
      street_number: "54",
      neighborhood: "Guamá",
      city: "Belém",
      federal_unit: "PA",
      ultimosPagamentos: [
        { mes: "Junho", valor: "R$ 600,00", status: "Pendente" },
        { mes: "Maio", valor: "R$ 600,00", status: "Pago" },
        { mes: "Abril", valor: "R$ 600,00", status: "Pago" },
      ],
    },
    {
      id: 3,
      telefone: "(31) 99999-3333",
      nascimento: "20/10/1980",
      situacao: "Morando",
      cpf: "325.983.049-00",
      quantidadeMoradores: 3,
      status: "Pagamentos em dia",
      transaction_amount: 30,
      description: "Pagamento de Condominio",
      email: "morador3@example.com",
      first_name: "Carlos Eduardo",
      last_name: "Santos",
      // number: "68936985000",
      zip_code: "66095230",
      street_name: "Avenida Nazaré",
      street_number: "76",
      neighborhood: "Nazaré",
      city: "Belém",
      federal_unit: "PA",
      ultimosPagamentos: [
        { mes: "Junho", valor: "R$ 600,00", status: "Pago" },
        { mes: "Maio", valor: "R$ 600,00", status: "Pago" },
        { mes: "Abril", valor: "R$ 600,00", status: "Pago" },
      ],
    },
  ];

  const [selectedResident, setSelectedResident] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleIdClick = (resident) => {
    setSelectedResident(resident);
    onOpen();
  };

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

  return (
    <Box p={5} bg={tableBg} borderRadius="lg" boxShadow="md">
      <HStack spacing="24px">
        <Heading as="h5" size="sm" mb={4}>
          Listagem de Moradores
        </Heading>
        <Spacer />
        
      </HStack>

      <Divider />
      <Table variant="simple">
        <Thead bg={headerBg}>
          <Tr>
            <Th color={headerColor}>ID</Th>
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
            <Td colSpan={8} p={0}>
              <Divider />
            </Td>
          </Tr>
          {residentsData.map((resident, index) => (
            <Tr key={index} bg={rowBg} _hover={{ bg: rowHoverBg }}>
              <Td>
                <Link color="teal.500" onClick={() => handleIdClick(resident)}>
                  {resident.id}
                </Link>
              </Td>
              <Td>{resident.first_name} {resident.last_name}</Td>
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

      {/* Modal para mostrar detalhes do morador */}
      {selectedResident && (
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Detalhes do Morador</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ResidentDetails resident={selectedResident} onClose={onClose} />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Fechar
              </Button>

            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}
