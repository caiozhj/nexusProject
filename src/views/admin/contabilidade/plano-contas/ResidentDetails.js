import React, { useState } from 'react';
import {
  Box,
  Heading,
  Divider,
  Button,
  VStack,
  useToast,
  Text,
  Flex,
  Stack,
  Badge,
  FormControl,
  FormLabel,
  Input,
  Select,
  Link,
} from '@chakra-ui/react';
import { postCriarPix } from 'api/service';

const getStatusColor = (status) => {
  switch (status) {
    case "Pago":
      return "green";
    case "Pendente":
      return "red";
    default:
      return "gray";
  }
};

const ResidentDetails = ({ resident, onClose }) => {
  const [ticketUrls, setTicketUrls] = useState({});
  const [loading, setLoading] = useState(false);
  const [paymentDescription, setPaymentDescription] = useState('');
  const [paymentMethodId, setPaymentMethodId] = useState('pix'); // default to "pix"
  const toast = useToast();

  const handlePostCriarPix = () => {
    setLoading(true);
    const requestData = {
      transaction_amount: parseFloat(resident.transaction_amount),
      description: paymentDescription || getPaymentDescription(),
      email: resident.email,
      // cpf: resident.cpf,
      first_name: resident.first_name,
      last_name: resident.last_name,
      identificationType: "CPF",
      number: "68936985000",
      paymentMethodId: paymentMethodId,
      zip_code: resident.zip_code,
      street_name: resident.street_name,
      street_number: resident.street_number,
      neighborhood: resident.neighborhood,
      city: resident.city,
      federal_unit: resident.federal_unit,
    };

    postCriarPix(requestData)
      .then((response) => {
        console.log("Resposta do POST:", response);
        const updatedTicketUrls = {
          ...ticketUrls,
          [resident.email]: {
            ticketUrl: response.data.point_of_interaction.transaction_data.ticket_url,
            status: response.data.status,
          },
        };
        setTicketUrls(updatedTicketUrls);
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

  const getPaymentDescription = () => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString('pt-BR', { month: 'long' });
    const year = currentDate.getFullYear();
    return `Taxa de condomínio do mês ${month}/${year}`;
  };

  const handleChangeDescription = (event) => {
    setPaymentDescription(event.target.value);
  };

  const handleChangePaymentMethod = (event) => {
    setPaymentMethodId(event.target.value);
  };

  return (
    <Box>
      <Heading as="h5" size="lg" mb={4}>Detalhes do Morador</Heading>
      <Stack spacing={3}>
        <Flex justify="space-between">
          <Text fontWeight="bold">Nome:</Text>
          <Text>{resident.first_name} {resident.last_name}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">CPF:</Text>
          <Text>{resident.cpf}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">Telefone:</Text>
          <Text>{resident.telefone}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">Data de Nascimento:</Text>
          <Text>{resident.nascimento}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">Situação:</Text>
          <Text>{resident.situacao}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">Quantidade de Moradores:</Text>
          <Text>{resident.quantidadeMoradores}</Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontWeight="bold">Status:</Text>
          <Text>{resident.status}</Text>
        </Flex>
      </Stack>
      <Divider my={4} />
      <Heading as="h6" size="md" mb={3}>Últimos Pagamentos</Heading>
      <VStack align="start" spacing={2}>
        {resident.ultimosPagamentos.map((pagamento, index) => (
          <Flex key={index} justify="space-between" width="full">
            <Text>{pagamento.mes}: {pagamento.valor}</Text>
            <Badge colorScheme={getStatusColor(pagamento.status)}>
              {pagamento.status}
            </Badge>
          </Flex>
        ))}
      </VStack>
      <Divider my={4} />
      <VStack mt={4} spacing={3}>
        <FormControl>
          <FormLabel>Descrição do Pagamento</FormLabel>
          <Input
            type="text"
            value={paymentDescription}
            onChange={handleChangeDescription}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Método de Pagamento</FormLabel>
          <Select
            value={paymentMethodId}
            onChange={handleChangePaymentMethod}
          >
            <option value="pix">Pix</option>
            <option value="bolbradesco">Boleto</option>
          </Select>
        </FormControl>
        <Button
          colorScheme="teal"
          onClick={handlePostCriarPix}
          isLoading={loading}
          width="full"
        >
          Enviar Cobrança
        </Button>
        <Button colorScheme="blue" onClick={onClose} width="full">
          Fechar
        </Button>
        {ticketUrls[resident.email] && (
          <Box mt={2} width="full">
            <Link href={ticketUrls[resident.email].ticketUrl} isExternal>
              <Button colorScheme="blue" width="full">
                Abrir Ticket
              </Button>
            </Link>
            <Text mt={2} textAlign="center">
              Status: {ticketUrls[resident.email].status}
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default ResidentDetails;
