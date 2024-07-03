import React from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

// components 
import TabCadastro from "./cadastro/tabCadastro";


export default function ListMorador() {
  const tabBg = useColorModeValue("gray.100", "gray.700");
  const tabSelectedBg = useColorModeValue("blue.300");
  const tabHoverBg = useColorModeValue("gray.200", "gray.600");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box p={5} bg={cardBg} borderRadius="lg" boxShadow="md" mx="auto" >
      <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        <Tabs variant="soft-rounded" colorScheme="green">
          <Flex justify="center">
            <TabList>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
              >
                Cadastro de Moradores
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Pagamentos
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Reservas
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Multas e Advertências
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Compras
              </Tab>
            </TabList>
          </Flex>
        
          <TabPanels>
            <TabPanel>
             <TabCadastro/>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>tres!</p>
            </TabPanel>
            <TabPanel>
              <p>Encomendas!</p>
            </TabPanel>
            <TabPanel>
              <p>Assembleia</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
