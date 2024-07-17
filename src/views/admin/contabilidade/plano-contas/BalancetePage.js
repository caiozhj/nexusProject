import React from "react";
import {
  Box,
  Heading,
  Divider,
  Text,
  VStack,
  Grid,
  GridItem,
  Flex
} from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const BalancetePage = () => {
  const transactions = [
    { id: 1, category: "Receita", description: "Taxa de Condomínio", type: "entrada", amount: 20000 },
    { id: 2, category: "Despesa", description: "Fornecedores", type: "saida", amount: -5000 },
    { id: 3, category: "Despesa", description: "Salários", type: "saida", amount: -3000 },
    { id: 4, category: "Despesa", description: "Manutenção", type: "saida", amount: -2500 },
    { id: 5, category: "Receita", description: "Reserva de Caixa", type: "entrada", amount: 5000 },
  ];

  const saldoInicial = 15000; // Exemplo de saldo inicial
  const saldoFinal = saldoInicial + transactions.reduce((total, transaction) => total + transaction.amount, 0);

  const categorias = transactions.reduce((acc, transaction) => {
    if (!acc.includes(transaction.category)) {
      acc.push(transaction.category);
    }
    return acc;
  }, []);

  const getTotalPorCategoria = (categoria) => {
    return transactions
      .filter((transaction) => transaction.category === categoria)
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  // Preparando dados para o gráfico de pizza (despesas)
  const COLORS = ["#FF4500", "#FF8C00", "#FFD700", "#32CD32", "#4169E1", "#BA55D3"];

  const despesasData = categorias
    .filter((categoria) => categoria === "Despesa")
    .map((categoria, index) => ({
      name: categoria,
      value: Math.abs(getTotalPorCategoria(categoria)),
      color: COLORS[index % COLORS.length], // Selecionando cores da paleta
    }));

  // Calculando total das despesas
  const totalDespesas = despesasData.reduce((total, item) => total + item.value, 0);

  return (
    <Box p={5} bg="gray.100" minHeight="100vh">
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Balancete Mensal - Gerenciamento de Condomínio
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {/* Coluna do Balancete */}
        <GridItem colSpan={1}>
          <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
            <Heading as="h3" size="lg" mb={4}>
              Balancete Mensal
            </Heading>
            <Divider mb={4} />
            <VStack align="start" spacing={4}>
              {categorias.map((categoria) => (
                <Box key={categoria} w="100%">
                  <Heading as="h4" size="md" mb={2}>
                    {categoria === "Receita" ? "Receitas" : "Despesas"}
                  </Heading>
                  <Divider />
                  {transactions
                    .filter((transaction) => transaction.category === categoria)
                    .map((transaction) => (
                      <Box key={transaction.id} w="100%" mb={2}>
                        <Flex justify="space-between">
                          <Text>{transaction.description}</Text>
                          <Text color={transaction.type === "entrada" ? "green.500" : "red.500"}>
                            {transaction.type === "entrada" ? "+" : "-"} R${" "}
                            {Math.abs(transaction.amount)}
                          </Text>
                        </Flex>
                      </Box>
                    ))}
                  <Divider />
                  <Flex justify="space-between" w="100%" mt={2}>
                    <Text fontWeight="bold">Total {categoria === "Receita" ? "Receitas:" : "Despesas:"}</Text>
                    <Text fontWeight="bold">
                      R$ {getTotalPorCategoria(categoria)}
                    </Text>
                  </Flex>
                </Box>
              ))}
              <Divider my={4} />
              <Flex justify="space-between" w="100%">
                <Text fontWeight="bold">Saldo Inicial:</Text>
                <Text>R$ {saldoInicial}</Text>
              </Flex>
              <Flex justify="space-between" w="100%">
                <Text fontWeight="bold">Saldo Final:</Text>
                <Text>R$ {saldoFinal}</Text>
              </Flex>
            </VStack>
          </Box>
        </GridItem>

        {/* Coluna dos Gráficos */}
        <GridItem colSpan={1}>
          <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
            <Heading as="h3" size="lg" mb={4}>
              Gráficos
            </Heading>
            <Divider mb={4} />
            <Box mb={6}>
              <Heading as="h4" size="md" mb={2}>
                Gráfico de Movimentação Financeira
              </Heading>
              <Divider />
              <Box mt={4} height="300px">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={transactions}>
                    <XAxis dataKey="description" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="amount" stroke="#82ca9d" strokeWidth={2} dot={{ stroke: "#82ca9d", strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Box>

            <Box>
              <Heading as="h4" size="md" mb={2}>
                Distribuição das Despesas
              </Heading>
              <Divider />
              <Box mt={4} height="300px">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={despesasData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name} - R$ ${value}`}
                    >
                      {despesasData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={despesasData[index].color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Text textAlign="center" mt={4} fontWeight="bold">
                Total de Despesas: R$ {totalDespesas}
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default BalancetePage;
