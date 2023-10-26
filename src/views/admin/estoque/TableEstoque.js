import {
  Flex,
  Table,
  Progress,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";


import { useState, useEffect } from "react";

// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
export default function TableEstoque() {
  

    const [dados, setDados] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://back-teste-sigma.vercel.app/api/consulta");
          if (response.ok) {
            const data = await response.json();
  
            const dados = data.data
  
            if (Array.isArray(dados)) {
              // Verifica se a resposta é um array
              setDados(dados);
              console.error("dados", dados);
            } else {
              console.error("A resposta não é um array:", data);
            }
          } else {
            console.error("Falha ao buscar os dados");
          }
        } catch (error) {
          console.error("Erro ao buscar os dados:", error);
        }
      };
  
      fetchData();
    }, []);



  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="10px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
         Cadastra de Produto
        </Text>
        <Menu />
      </Flex>
      <Table variant="simple" color="gray.500" mb="24px">
        <Thead>
          <Tr>
            <Th pe="10px" borderColor={borderColor}>
              <Th>Produto</Th>
              </Th>

               <Th pe="10px" borderColor={borderColor}><Th>Tipo de produto</Th></Th>
              
               <Th pe="10px" borderColor={borderColor}><Th>Detalhes do Produto</Th></Th>
               <Th pe="10px" borderColor={borderColor}><Th>Data entrada</Th></Th>
               <Th pe="10px" borderColor={borderColor}><Th>N° de cadastro</Th></Th>
           
          </Tr>
        </Thead>
        {/* <Tbody >
        {dados.map((consulta, index) => (
                <Tr key={index}>
                   <Th pe="10px" marginLeft={15}><Td >{consulta.paciente}</Td></Th>
                  <Th pe="10px" marginLeft={15}><Td >{consulta.horario}</Td></Th>
                
                  <Th pe="10px" marginLeft={15}><Td >{consulta.procedimento}</Td></Th>
                  <Th pe="10px" marginLeft={15}><Td >{consulta.convenio}</Td></Th>
                  <Th pe="10px" marginLeft={15}><Td >{consulta.medico}</Td></Th>
                </Tr>
              ))}
        </Tbody> */}
      </Table>
    </Card>
  );
}
