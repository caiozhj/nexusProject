

import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  Spacer,
  Modal
} from "@chakra-ui/react";

// Custom components
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";

import Card from "components/card/Card.js";



import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";


// tabela


import { useDisclosure } from '@chakra-ui/react'
import TableEstoque from "./TableEstoque";
import ModalEstoque from "./ModalEstoque";

import TableEstoqueFalta from "./TableEstoqueFalta";


export default function ListEstoque() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  const { isOpen, onOpen, onClose } = useDisclosure()


 


  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          {/* <Banner /> */}

          <Flex>
                <Box p="2" marginRight={2} marginBottom={-10}>
                <Button  colorScheme='blue' size='sm' onClick={onOpen}  >  Cadastro de produto </Button>
                
                </Box>
                <Spacer />  
             
        
               
              </Flex>
           

          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
              
              >
            

              <TableEstoque  
               
              />

           
            </Flex>
         
           
          </Flex>
        </Flex>
         <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
           <Card px='0px' mb='20px'>
            <TableEstoqueFalta
              
            />
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
       <ModalEstoque/>
      </Modal>
      {/* Delete Product */}
     
    </Box>
    
  );
}
