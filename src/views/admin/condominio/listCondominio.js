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
import TabReservas from "./reservas/tabReservas";

export default function ListCondominio() {
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
                Reservas
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Ocorrências
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Visitantes Autorizados
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Encomendas
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Assembleia
              </Tab>
            </TabList>
          </Flex>
        
          <TabPanels>
            <TabPanel>
              <TabReservas/>
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
