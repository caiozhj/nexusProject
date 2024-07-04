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

export default function ModalTaxa() {
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    type: '',
    amount: '',
    category: '',
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
      title: 'Taxa de condomínio cadastrada!',
      description: `Taxa ${formData.name} do tipo ${formData.type} no valor de ${formData.amount} para a data ${formData.date} foi cadastrada com sucesso.`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    // Pode adicionar aqui a lógica para limpar o formulário após o envio
    setFormData({
      date: '',
      name: '',
      type: '',
      amount: '',
      category: '',
      description: '',
    });
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" mx="auto">
      <Heading as="h3" size="lg" mb={6} textAlign="center">
        Cadastrar Taxa de Condomínio
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
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Nome da Taxa</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome da taxa"
          />
        </FormControl>
        <FormControl id="type" mb={4} isRequired>
          <FormLabel>Tipo</FormLabel>
          <Select
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Selecione o tipo"
          >
            <option value="Fixa">Fixa</option>
            <option value="Variável">Variável</option>
          </Select>
        </FormControl>
        <FormControl id="amount" mb={4} isRequired>
          <FormLabel>Valor</FormLabel>
          <Input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Valor da taxa"
          />
        </FormControl>
        <FormControl id="description" mb={4}>
          <FormLabel>Descrição ou Observações</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descrição detalhada ou observações"
            size="md"
            resize="vertical"
          />
        </FormControl>
        <FormControl id="category" mb={4} isRequired>
          <FormLabel>Categoria</FormLabel>
          <Select
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Selecione a categoria"
          >
            <option value="Receitas">Receitas</option>
            <option value="Despesas">Despesas</option>
            <option value="Reservas">Reservas</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue" type="submit" width="full">
          Cadastrar Taxa de Condomínio
        </Button>
      </form>
    </Box>
  );
}