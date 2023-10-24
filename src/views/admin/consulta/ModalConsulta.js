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

export default function ModalConsulta({ onFileUploaded }) {
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
        <ModalHeader>Cadastrar Consulta</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Paciente</FormLabel>
            <Input
              placeholder="Digite o Nome do Paciente"
              name="paciente"
              value={formData.paciente}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Horário</FormLabel>
            <Input
              placeholder="Digite o dia da consulta"
              name="horario"
              value={formData.horario}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Procedimento</FormLabel>
            <Input
              placeholder="Digite o tipo de procedimento"
              name="procedimento"
              value={formData.procedimento}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Convênio</FormLabel>
            <Input
              placeholder="Digite o convênio"
              name="convenio"
              value={formData.convenio}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Médico</FormLabel>
            <Input
              placeholder=" Digite o nome do medico"
              name="medico"
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
