import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  AddIcon,
  Image,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import RelatorioFinanceiroBruto from "./RelatorioFinanceiroBruto";
import illustration from "assets/img/manuntencao3.png";
import RelatorioCadastro from "./RelatorioCadastro";
import RelatorioEmpresas from "./RelatorioEmpresas"

function ListRelatorio() {
  const textColor = useColorModeValue("navy.700", "white");

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Tabs size="md" orientation="vertical">
          <TabList>
            <Tab>Financeiro</Tab>
            <Tab>Cadastro</Tab>
            {/* <Tab>Estoque</Tab> */}
            <Tab>Empresas</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <RelatorioFinanceiroBruto></RelatorioFinanceiroBruto>
            </TabPanel>
            <TabPanel>
            <RelatorioCadastro></RelatorioCadastro>
            </TabPanel>
            <TabPanel>
              <RelatorioEmpresas></RelatorioEmpresas>
            </TabPanel>
            <TabPanel>
              <p>teste!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Grid>
    </Box>
  );
}

export default ListRelatorio;
