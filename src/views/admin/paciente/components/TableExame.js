import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    useColorModeValue,
    Flex, Divider
  } from "@chakra-ui/react";
  
  import { useState, useEffect } from "react";
  
  import Card from "components/card/Card";
  
  export default function TableExame() {
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  
    const [dados, setDados] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://back-teste-sigma.vercel.app/api/paciente");
          if (response.ok) {
            const data = await response.json();
  
            const dados = data.data
  
            if (Array.isArray(dados)) {
              // Verifica se a resposta é um array
              setDados(dados);
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
  
    return (
      <>
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
              Lista de Exames
            </Text>
          </Flex>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr  borderColor={borderColor}>
                  <Th>Nome</Th>
                  
                  <Th>Cpf</Th>
                 
                  <Th>Telefone</Th>
                
                </Tr>
              </Thead>
             
              <Tbody>
                {dados.map((medico, index) => (
                  <Tr key={index}>
                    <Td>{medico.name}</Td>
                    <Td>{medico.cpf}</Td>
                    <Td>{medico.telefone}</Td>
                  
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Total</Th>
                  <Th />
                  <Th isNumeric />
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Card>
      </>
    );
  }
  