import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Divider,
  Button,
  Stack,
  Link,
  Flex,
  Input,
  FormLabel,
  FormControl
} from "@chakra-ui/react";
import { BiSolidFilePdf } from "react-icons/bi";


import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


export default function RelatorioFinanceiroBruto() {
  return (
    
    <Box width={900}>
      {/* <Card> */}
        <Accordion defaultIndex={[0]} allowMultiple>
          <Text as="b">Relatório Financeiro</Text>

          <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Relatório Receita Bruta
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4}>
            <Stack spacing={4} align="center">
              <Flex>
                <FormControl flex={1}>
                  <FormLabel>Data Inicial</FormLabel>
                  <Input type="date" placeholder="Data Inicial" />
                </FormControl>

                <Box mx={4} />

                <FormControl flex={1}>
                  <FormLabel>Data Final</FormLabel>
                  <Input type="date" placeholder="Data Final" />
                </FormControl>
              </Flex>

              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ px: 2 }}
              >
                <Button fullWidth colorScheme="yellow">
                  <Link
                    href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/arquivos-e-imagens/relatorio-mensal-das-receitas-brutas-1.pdf"
                    isExternal
                  >
                    <Flex align="center">
                      <span>Gerar relatórios</span>
                      <BiSolidFilePdf style={{ marginLeft: "5px" }} />
                    </Flex>
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Relatório de Receita Liquida
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4}>
            <Stack spacing={4} align="center">
              <Flex>
                <FormControl flex={1}>
                  <FormLabel>Data Inicial</FormLabel>
                  <Input type="date" placeholder="Data Inicial" />
                </FormControl>

                <Box mx={4} />

                <FormControl flex={1}>
                  <FormLabel>Data Final</FormLabel>
                  <Input type="date" placeholder="Data Final" />
                </FormControl>
              </Flex>

              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ px: 2 }}
              >
                <Button fullWidth colorScheme="yellow">
                  <Link
                    href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/arquivos-e-imagens/relatorio-mensal-das-receitas-brutas-1.pdf"
                    isExternal
                  >
                    <Flex align="center">
                      <span>Gerar relatórios</span>
                      <BiSolidFilePdf style={{ marginLeft: "5px" }} />
                    </Flex>
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Relatório de Contas a Pagar/Receber
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4}>
            <Stack spacing={4} align="center">
              <Flex>
                <FormControl flex={1}>
                  <FormLabel>Data Inicial</FormLabel>
                  <Input type="date" placeholder="Data Inicial" />
                </FormControl>

                <Box mx={4} />

                <FormControl flex={1}>
                  <FormLabel>Data Final</FormLabel>
                  <Input type="date" placeholder="Data Final" />
                </FormControl>
              </Flex>

              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ px: 2 }}
              >
                <Button fullWidth colorScheme="yellow">
                  <Link
                    href="https://www.gov.br/empresas-e-negocios/pt-br/empreendedor/arquivos-e-imagens/relatorio-mensal-das-receitas-brutas-1.pdf"
                    isExternal
                  >
                    <Flex align="center">
                      <span>Gerar relatórios</span>
                      <BiSolidFilePdf style={{ marginLeft: "5px" }} />
                    </Flex>
                  </Link>
                </Button>
              </Stack>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        </Accordion>
      {/* </Card> */}
    </Box>
    
  );
}
