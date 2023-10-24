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
  GridItem,
  Stack,
  HStack,
  VStack,
  useToast
} from "@chakra-ui/react";

import { useState } from "react";

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default function ModalPaciente({ onFileUploaded }) {

  const onDrop = useCallback((acceptedFiles) => {
    // O usuário soltou um ou mais arquivos, trate-os aqui
    onFileUploaded(acceptedFiles[0]);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf', // Aceita apenas arquivos PDF
    multiple: false,  // Permite apenas um arquivo por vez
  });


 

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
    const url = "https://back-teste-sigma.vercel.app/api/paciente";
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
        <ModalHeader>Cadastrar Paciente</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <HStack spacing="24px" marginBottom={15}>
            <Box >
            <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input
              placeholder="Nome"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormControl>
            </Box>
            <Box >
            <FormControl>
            <FormLabel>CPF</FormLabel>
            <Input
              placeholder="Nome"
              name="cpf"
              value={formData.cpf}
              onChange={handleInputChange}
            />
          </FormControl>
            </Box>
            <Box >
            <FormControl>
            <FormLabel>Contato</FormLabel>
            <Input
              placeholder="Contato"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
            />
          </FormControl>
            </Box>
          </HStack>


          <HStack spacing="24px">
            <Box >
            <FormControl>
            <FormLabel>Endereço</FormLabel>
            <Input
              placeholder="Endereço"
              name="endereco"
              value={formData.endereco  }
              onChange={handleInputChange}
            />
          </FormControl>
            </Box>
            <Box >
            <FormControl>
            <FormLabel>Gênero</FormLabel>
            <Input
              placeholder="Gênero"
              name="genero"
              value={formData.genero}
              onChange={handleInputChange}
            />
          </FormControl>
            </Box>
            <Box >
            <FormControl>
            <FormLabel>RG</FormLabel>
            <Input
              placeholder="RG"
              name="rg"
              value={formData.rg}
              onChange={handleInputChange}
            />
          </FormControl>
            </Box>
          </HStack>

          <HStack spacing="24px">
          <Box marginTop={15} marginLeft={85}>
          <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      <p>Clique aqui para anexar documentos</p>
    </div>
    </Box>
          </HStack>
          

         
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
}
