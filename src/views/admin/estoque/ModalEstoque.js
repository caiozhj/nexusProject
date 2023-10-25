import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function ModalEstoque({ onFileUploaded }) {
  const [formData, setFormData] = useState({
    paciente: "",
    horario: "",
    procedimento: "",
    convenio: "",
    medico: "",
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Aqui você fará a solicitação POST para a URL desejada usando os dados do formulário (formData).
    // Substitua 'URL_DA_API' pela URL real.
    const url = "https://back-teste-sigma.vercel.app/api/consulta";
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
        setTimeout(() => {
          window.location.reload();
        }, 1000); // 1000 milissegundos = 1 segundo
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
        <ModalHeader>Cadastra Estoque</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Estoque</FormLabel>
            <Input
              placeholder="Digite o nome do produto"
              name="Produto"
              value={formData.paciente}
              onChange={handleInputChange}
            />
          </FormControl>

          

          <FormControl mt={4}>
            <FormLabel>Tipo do produto</FormLabel>
            <Input
              placeholder="Digite o tipo do produto"
              name="Tipo"
              value={formData.procedimento}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Detalhes do Produto</FormLabel>
            <Input
              placeholder="Detalhes do produto"
              name="Detalhes"
              value={formData.convenio}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Data entrada</FormLabel>
            <Input
              placeholder="Entrada do produto"
              name="Produto Entrada"
              value={formData.horario}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>N° de cadastro</FormLabel>
            <Input
              placeholder="N° de cadastro do produto"
              name="N° de cadastro"
              value={formData.medico}
              onChange={handleInputChange}
            />
          </FormControl>

         
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Cadastrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
}
