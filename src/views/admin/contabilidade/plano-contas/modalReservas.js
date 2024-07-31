import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { postCriarPix } from "api/service";

export default function ModalPagamentoPendente() {
  const [formData, setFormData] = useState({
    transaction_amount: "",
    description: "",
    email: "",
    first_name: "",
    last_name: "",
    identificationType: "CPF",
    number: "68936985000",
    paymentMethodId: "pix", // default to "pix"
    zip_code: "",
    street_name: "",
    street_number: "",
    neighborhood: "",
    city: "",
    federal_unit: "",
  });
  const [ticketUrl, setTicketUrl] = useState("");
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePostCriarPix = () => {
    const requestData = {
      ...formData,
      transaction_amount: parseFloat(formData.transaction_amount), // Converting to a numeric value
      payer: {
        first_name: formData.first_name,
        last_name: formData.last_name,
      },
    };

    postCriarPix(requestData)
      .then((response) => {
        setTicketUrl(response.data.point_of_interaction.transaction_data.ticket_url);
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
      });
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" mx="auto" w="full">
      <Heading as="h3" size="lg" mb={6} textAlign="center">
        Adicionar Pagamento Pendente
      </Heading>
      <form>
        <SimpleGrid columns={[1, null, 2]} spacing={4} mb={4}>
          <FormControl>
            <FormLabel>Valor da Transação</FormLabel>
            <Input
              type="number"
              name="transaction_amount"
              value={formData.transaction_amount}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Descrição</FormLabel>
            <Input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 2]} spacing={4} mb={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
          <FormControl>
            <FormLabel>CPF</FormLabel>
            <Input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 2]} spacing={4} mb={4}>
          <FormControl>
            <FormLabel>Primeiro Nome</FormLabel>
            <Input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Sobrenome</FormLabel>
            <Input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 4]} spacing={4} mb={4}>
          <FormControl>
            <FormLabel>Unidade Federal</FormLabel>
            <Input
              type="text"
              name="federal_unit"
              value={formData.federal_unit}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Cidade</FormLabel>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Número</FormLabel>
            <Input
              type="text"
              name="street_number"
              value={formData.street_number}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Bairro</FormLabel>
            <Input
              type="text"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={[1, null, 2]} spacing={4} mb={4}>
          <FormControl>
            <FormLabel>CEP</FormLabel>
            <Input
              type="text"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Nome da Rua</FormLabel>
            <Input
              type="text"
              name="street_name"
              value={formData.street_name}
              onChange={handleChange}
              w="full"
            />
          </FormControl>
        </SimpleGrid>
        <FormControl mb={4}>
          <FormLabel>Método de Pagamento</FormLabel>
          <Select
            name="paymentMethodId"
            value={formData.paymentMethodId}
            onChange={handleChange}
            w="full"
          >
            <option value="pix">Pix</option>
            <option value="bolbradesco">Boleto</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue" onClick={handlePostCriarPix} width="full">
          Enviar cobrança
        </Button>
      </form>

      {ticketUrl && (
        <Box mt={4}>
          <Link href={ticketUrl} isExternal>
            <Button colorScheme="blue" width="full">Abrir Ticket</Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
