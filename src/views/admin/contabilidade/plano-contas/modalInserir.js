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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from "@chakra-ui/react";
import { BiSolidFilePdf } from 'react-icons/bi';
import ModalTaxa from './modalTaxa';

export default function ModalInserir() {
  const [formData, setFormData] = useState({
    date: '',
    activity: '',
    status: '',
    category: '',
    description: '',
  });

  

  const [filterCategory, setFilterCategory] = useState('');

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
    //   category: '',
    //   description: '',
    // });
  };

  const scheduleData = [
    { id: 1, date: '01/07/2024', activity: 'Receitas', category: 'Receitas', status: 'Pago' },
    { id: 2, date: '02/07/2024', activity: 'Taxa Condominio', category: 'Despesas', status: 'Pendente' },
    { id: 3, date: '03/07/2024', activity: 'Reserva de Dependencia', category: 'Reservas', status: 'Pago' },
    { id: 4, date: '04/07/2024', activity: 'Multas', category: 'Despesas', status: 'Pendente' },
    { id: 5, date: '05/07/2024', activity: 'Juros', category: 'Despesas', status: 'Pago' },
    { id: 6, date: '06/07/2024', activity: 'Multa Condominial', category: 'Despesas', status: 'Pago' },
    { id: 7, date: '07/07/2024', activity: 'Agua', category: 'Despesas', status: 'Pendente' },
    { id: 8, date: '08/07/2024', activity: 'Luz', category: 'Despesas', status: 'Pago' },
    { id: 9, date: '09/07/2024', activity: 'Fundos de Reservas', category: 'Reservas', status: 'Pendente' },
  ];

  const handleEdit = (id) => {
    // Implemente a lógica de edição aqui
    console.log(`Editar item com ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implemente a lógica de exclusão aqui
    console.log(`Excluir item com ID: ${id}`);
  };

  const handleNewTax = () => {
    // Implemente a lógica para adicionar nova taxa
    console.log('Adicionar nova taxa');
  };

  const handleNewTax2 = () => {
    // Implemente a lógica para adicionar nova taxa
    console.log('Adicionar nova taxa');
  };

  const handleCategoryFilter = (e) => {
    const { value } = e.target;
    setFilterCategory(value);
  };

  const filteredData = filterCategory
    ? scheduleData.filter((item) => item.category === filterCategory)
    : scheduleData;

    const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" mx="auto">
      <Box mb={6} display="flex" >
      <Button
          leftIcon={<AiOutlinePlus />}
          colorScheme="blue"
          variant="outline"
          size="sm"
          onClick={onOpen}
          ml={2}
        >
          Nova Taxa
        </Button>
        <Button
          leftIcon={<BiSolidFilePdf />}
          colorScheme="blue"
          variant="outline"
          size="sm"
          onClick={handleNewTax2}
          ml={2}
        >
          Relatorio
        </Button>
        <Select
          name="category"
          value={filterCategory}
          onChange={handleCategoryFilter}
          placeholder="Filtrar por categoria"
          maxWidth="200px"
          ml={2}
        >
          <option value="">Todas as categorias</option>
          <option value="Receitas">Receitas</option>
          <option value="Despesas">Despesas</option>
          <option value="Reservas">Reservas</option>
        </Select>
      </Box>
      <Table variant="simple" mb={6}>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Status</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredData.map((item) => (
            <Tr key={item.id}>
              <Td>{item.date}</Td>
              <Td>{item.activity}</Td>
              <Td>{item.status}</Td>
              <Td>
                <IconButton
                  icon={<AiOutlineEdit />}
                  aria-label="Editar"
                  onClick={() => handleEdit(item.id)}
                  variant="ghost"
                  colorScheme="blue"
                  mr={2}
                />
                <IconButton
                  icon={<AiOutlineDelete />}
                  aria-label="Excluir"
                  onClick={() => handleDelete(item.id)}
                  variant="ghost"
                  colorScheme="red"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inserir Taxa</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <ModalTaxa/>
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