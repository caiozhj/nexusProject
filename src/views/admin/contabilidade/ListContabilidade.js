import React, { useState } from "react";
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
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

// components
import TabReservas from "./plano-contas/tabReservas";
import ModalInserir from "./plano-contas/modalInserir";

export default function ListCondominio() {
  const tabBg = useColorModeValue("gray.100", "gray.700");
  const tabSelectedBg = useColorModeValue("blue.300");
  const tabHoverBg = useColorModeValue("gray.200", "gray.600");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Box p={5} bg={cardBg} borderRadius="lg" boxShadow="md" mx="auto">
      <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        <Tabs variant="soft-rounded" colorScheme="green">
          <Flex justify="center">
            <TabList>
              <Tab _hover={{ bg: tabHoverBg }} bg={tabBg}>
                <Button
                  onClick={handleModalOpen}
                  _hover={{ bg: tabHoverBg }}
                  bg={tabBg}
                >
                  Plano de Contas
                </Button>
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Financeiro Baixa
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Entradas/Recebimentos
              </Tab>
              <Tab
                _selected={{ bg: tabSelectedBg }}
                _hover={{ bg: tabHoverBg }}
                bg={tabBg}
                isDisabled
              >
                Balancete
              </Tab>
            </TabList>
          </Flex>

          <TabPanels>
            <TabPanel>
              <TabReservas />
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

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={handleModalClose} size="60%">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Plano de Contas</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ModalInserir />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleModalClose}>
                Fechar
              </Button>
              {/* Outros botões de ação, se necessário */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}
