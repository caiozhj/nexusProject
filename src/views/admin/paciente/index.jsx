import React from "react";

// Chakra imports
import { Box, Flex, Grid, Spacer, Button } from "@chakra-ui/react";

// Custom components

import TablePaciente from "./components/TablePaciente";
import Card from "components/card/Card.js";

export default function Paciente() {
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          {/* <Banner /> */}
          <Flex direction="column">
            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <Flex>
                <Box p="4" marginRight={2} >
                <Button colorScheme='blue'>  Cadastrar </Button>
                
                </Box>
                <Spacer />
                <Box p="4" >
                <Button colorScheme='blue'>  Editar</Button>
                </Box>
                <Spacer />
                <Box p="4" >
                <Button colorScheme='blue'>  Excluir</Button>
                </Box>
                <Spacer />
                <Box p="4" >
                <Button colorScheme='blue'>  Ajuda</Button>
                </Box>
              </Flex>
            </Flex>

            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
              marginTop={-7}
            >
              <TablePaciente />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card px="0px" mb="20px"></Card>
        </Flex>
      </Grid>
    </Box>
  );
}
