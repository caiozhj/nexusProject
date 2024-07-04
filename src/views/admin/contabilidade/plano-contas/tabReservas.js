import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import TableReservas from "./tableReservas";
import SecondTable from "./secondTable";

export default function TabReservas() {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const data = [
    { month: "Jan", receita: 4000 },
    { month: "Fev", receita: 3000 },
    { month: "Mar", receita: 2000 },
    { month: "Abr", receita: 5000 },
    { month: "Mai", receita: 6000 },
    { month: "Jun", receita: 8000 },
  ];

  return (
    <Box
      p={5}
      bg={bgColor}
      borderRadius="lg"
      boxShadow="md"
      borderWidth="1px"
      borderColor={borderColor}
      mx="auto"
    >
      <Heading as="h3" size="lg" mb={6} textAlign="center">
        Financeiro
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box height="100%">
          <TableReservas />
        </Box>

        <Box height="100%">
          <SecondTable />
          <Divider my={6} />{" "}
          {/* Adiciona um espaçamento de 6 unidades (ou outro valor desejado) */}
          <Box height="100%" mt={6}>
            <Heading as="h4" size="md" mb={4} textAlign="center">
              Faturamento do Mês
            </Heading>

            <ResponsiveContainer width="95%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="receita"
                  stroke="#805AD5" // Cor roxa
                  strokeWidth={2} // Largura da linha
                  dot={{ stroke: "#805AD5", strokeWidth: 2, r: 6 }} // Estilo do ponto
                  activeDot={{ stroke: "#805AD5", strokeWidth: 3, r: 8 }} // Estilo do ponto ativo
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
