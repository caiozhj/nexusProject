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
import TabCadastroVisitante from "./cadastro/TabCadastroVisitante";


export default function ListVisitantes() {
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
                Cadastro de Visitantes
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Visitas Recorrentes
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Relatórios e Estatísticas
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Registro de Ocorrencias
              </Tab>
             
            </TabList>
          </Flex>
        
          <TabPanels>
            <TabPanel>
            <TabCadastroVisitante/>
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
