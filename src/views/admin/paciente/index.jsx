/* eslint-disable no-undef */
import React from "react";

import  { useState } from "react";


import ModalPaciente from "./components/ModalPaciente";
import ModalExame from "./components/ModalExame"

// Chakra imports
import { Box, Flex, Grid, Spacer, Button,   Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, FormControl, FormLabel, Input, Divider } from "@chakra-ui/react";

// Custom components
import { useDisclosure } from '@chakra-ui/react'
import TablePaciente from "./components/TablePaciente";

import Card from "components/card/Card.js";
import TableExame from "./components/TableExame";



export default function Paciente() {

  // modal
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)






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
                <Box p="2" marginRight={2} >
                <Button onClick={onOpen} colorScheme='blue' size='sm' >  Novo Paciente </Button>
                
                </Box>
                <Spacer />  
                <Box p="2" >
               
                </Box>
                <Spacer />
                <Box p="2" >
               
                </Box>
              </Flex>
            </Flex>

            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
              marginTop={-4}
            >
              <TablePaciente />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card px="0px" mb="20px" marginTop="100px">
            <TableExame />
          </Card>
        </Flex>
      </Grid>


      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
       <ModalPaciente/>
      </Modal>

     

      
    </Box>
  );
}
