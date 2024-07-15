import React, { useState } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useToast,
  Link,
} from "@chakra-ui/react";
import { postCriarPix } from "api/service";

const moradores = [
  { nome: "Morador 1", email: "morador1@example.com", cpf: "15635303099", valor: 10 },
  { nome: "Morador 2", email: "morador2@example.com", cpf: "54387485000", valor: 20 },
  { nome: "Morador 3", email: "morador3@example.com", cpf: "68936985000", valor: 30 },
];

export default function ListaMoradores() {
  const [ticketUrls, setTicketUrls] = useState({});
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handlePostCriarPix = (morador) => {
    setLoading(true);
    const requestData = {
      transaction_amount: morador.valor,
      description: "Pagamento de teste",
      email: morador.email,
      identificationType: "CPF",
      number: morador.cpf,
      paymentMethodId: "pix",
    };

    postCriarPix(requestData)
      .then((response) => {
        console.log("response");
        setTicketUrls((prevUrls) => ({
          ...prevUrls,
          [morador.email]: response.data.point_of_interaction.transaction_data.ticket_url,
        }));
        toast({
          title: "Pagamento criado com sucesso!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Erro ao criar pagamento",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" mx="auto">
      <Heading as="h3" size="lg" mb={6} textAlign="center">
        Lista de Moradores
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>Valor</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {moradores.map((morador) => (
            <Tr key={morador.email}>
              <Td>{morador.nome}</Td>
              <Td>{morador.email}</Td>
              <Td>R$ {morador.valor}</Td>
              <Td>
                <Button
                  colorScheme="blue"
                  onClick={() => handlePostCriarPix(morador)}
                  isLoading={loading}
                >
                  Gerar Pagamento
                </Button>
                {ticketUrls[morador.email] && (
                  <Box mt={2}>
                    <Link href={ticketUrls[morador.email]} isExternal>
                      <Button colorScheme="blue">Abrir Ticket</Button>
                    </Link>
                  </Box>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}