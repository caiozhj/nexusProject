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




export default function ModalReservas(){

    const [formData, setFormData] = useState({
        area: '',
        residence: '',
        requesterName: '',
        startDate: '',
        endDate: '',
        time: '',
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
          title: 'Reserva realizada com sucesso!',
          description: `Reserva para ${formData.area} de ${formData.startDate} a ${formData.endDate} foi realizada.`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      };
    

    return(
        <Box p={5} bg="white" borderRadius="lg" boxShadow="md" mx="auto">
        <Heading as="h3" size="lg" mb={6} textAlign="center">
          Reserva de Área de Lazer
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="area" mb={4} isRequired>
            <FormLabel>Área de Lazer</FormLabel>
            <Select
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Selecione a área de lazer"
            >
              <option value="Piscina">Piscina</option>
              <option value="Salão de Festas">Salão de Festas</option>
              <option value="Churrasqueira">Churrasqueira</option>
              <option value="Quadra de Esportes">Quadra de Esportes</option>
            </Select>
          </FormControl>
          <FormControl id="residence" mb={4} isRequired>
            <FormLabel>Residência Responsável</FormLabel>
            <Input
              type="text"
              name="residence"
              value={formData.residence}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="requesterName" mb={4} isRequired>
            <FormLabel>Nome do Solicitante</FormLabel>
            <Input
              type="text"
              name="requesterName"
              value={formData.requesterName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="startDate" mb={4} isRequired>
            <FormLabel>Data de Início</FormLabel>
            <Input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="endDate" mb={4} isRequired>
            <FormLabel>Data de Fim</FormLabel>
            <Input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="time" mb={4} isRequired>
            <FormLabel>Horário</FormLabel>
            <Input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="description" mb={4}>
            <FormLabel>Descrição</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descrição adicional sobre a reserva"
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" width="full">
            Reservar Área
          </Button>
        </form>
      </Box>
    )
}