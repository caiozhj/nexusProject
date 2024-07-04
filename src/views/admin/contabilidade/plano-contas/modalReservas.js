import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';

export default function ModalPagamentoPendente() {
  const [formData, setFormData] = useState({
    date: '',
    activity: '',
    status: '',
    description: '',
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend
    toast({
      title: 'Pagamento pendente adicionado!',
      description: `Atividade de ${formData.activity} com status ${formData.status} para a data ${formData.date} foi adicionada como pendente.`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    // // Pode adicionar aqui a lógica para limpar o formulário após o envio
    // setFormData({
    //   date: '',
    //   activity: '',
    //   status: 'Pendente',
    //   description: '',
    // });
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" mx="auto">
      <Heading as="h3" size="lg" mb={6} textAlign="center">
        Adicionar Pagamento Pendente
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="date" mb={4} isRequired>
          <FormLabel>Data</FormLabel>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="activity" mb={4} isRequired>
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            placeholder="Nome do serviço realizado"
          />
        </FormControl>
        <FormControl id="description" mb={4}>
          <FormLabel>Descrição ou Motivo</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descrição detalhada ou motivo do recebimento"
            size="md" // Ajuste o tamanho conforme necessário
            resize="vertical" // Permite redimensionamento vertical
          />
        </FormControl>
        <FormControl id="status" mb={4} isRequired>
          <FormLabel>Status</FormLabel>
          <Select
            name="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="Selecione o status"
          >
            <option value="Pendente">Pendente</option>
            <option value="Pago">Pago</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue" type="submit" width="full">
          Adicionar Pagamento Pendente
        </Button>
      </form>
    </Box>
  );
}