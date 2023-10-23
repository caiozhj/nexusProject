import {
  Box,
  Flex,
  Grid,
  Spacer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { useState } from "react";

export default function ModalPaciente() {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Aqui você fará a solicitação POST para a URL desejada usando os dados do formulário (formData).
    // Substitua 'URL_DA_API' pela URL real.
    const url = 'https://back-teste-sigma.vercel.app/api/v1/books';
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Lide com a resposta da API, se necessário.
        console.log(data);
      })
      .catch((error) => {
        // Lide com erros, se ocorrerem.
        console.error("Erro:", error);
      });
  };

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastrar Paciente</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input
              placeholder="Nome"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Author</FormLabel>
            <Input
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleInputChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
}
