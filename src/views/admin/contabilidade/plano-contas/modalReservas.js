import React, { useReducer, useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios, { Axios } from "axios";
import { postCriarPix } from "api/service";

// const api = axios.create({
//   baseURL: "https://api.mercadopago.com",
// });

// api.interceptors.request.use(async (config) => {
//   const token = "APP_USR-62c3699a-4e7e-44f7-b2da-dbfd2c499179";
//   config.headers.Authorization = `Bearer ${token}`

//   return config
// });

// const formReducer = (state, event) => {
//   return {
//     ...state,
//     [event.name]: event.value
//   }
// }

const MOCK_BODY = {
  transaction_amount: 4,
  description: "Pagamento de teste v05",
  paymentMethodId: "pix",
  email: "gersoncafilho2@gmail.com",
  identificationType: "CPF",
  number: "12345678909",
};

export default function ModalPagamentoPendente() {

  const [ticketUrl, setTicketUrl] = useState("");

  const handlePostCriarPix = () => {
    postCriarPix(MOCK_BODY).then(
      response => {
        console.log("response")
        console.log(response.data)
      }
    )
  };
  // const [formData, setFormData] = useState({
  //   date: "",
  //   activity: "",
  //   status: "",
  //   description: "",
  // });

  // const toast = useToast();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const [formData, setFormData]= useReducer(formReducer, {})

  // const handleChange = event => (
  //  setFormData ({
  //   name: event.target.name,
  //   value: event.target.value
  //  })
  // )

  // const handleSubmit = (event) => {

  //   event.preventDefault()
  //   // e.preventDefault();
  //   // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend
  //   // toast({
  //   //   title: "Pagamento pendente adicionado!",
  //   //   description: `Atividade de ${formData.activity} com status ${formData.status} para a data ${formData.date} foi adicionada como pendente.`,
  //   //   status: "success",
  //   //   duration: 5000,
  //   //   isClosable: true,

  //   const body = {
  //     "transaction_amount": 10,
  //     "paymant_method_id": "pix",
  //   }
  //   api.post ("v1/payments", body).then(response => {
  //   }).catch(err => {
  //     // alert(err)
  //   })

  //   console.log(formData)
  //   };
  // // Pode adicionar aqui a lógica para limpar o formulário após o envio
  // setFormData({
  //   date: '',
  //   activity: '',
  //   status: 'Pendente',
  //   description: '',
  // });

  return (
    <Box p={5} bg="white" borderRadius="lg" boxShadow="md" mx="auto">
      <Heading as="h3" size="lg" mb={6} textAlign="center">
        Adicionar Pagamento Pendente
      </Heading>
      <div>
      {MOCK_BODY.transaction_amount}
      </div>
      {/* <form>
        <FormControl mb={4}>
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            name="nome"
            placeholder="Nome"
            // onChange={handleChange}
          >
            {MOCK_BODY.transaction_amount}
          </Input>
        </FormControl>
        <FormControl mb={4}>
          <FormControl mb={4}>
            <FormLabel>Nome</FormLabel>
            <Input
              type="name"
              name="nome"
              placeholder="Nome"
              // onChange={handleChange}
            >
              {MOCK_BODY.description}
            </Input>
          </FormControl>
        </FormControl>
        <FormControl mb={4}>
          <FormControl mb={4}>
            <FormLabel>Nome</FormLabel>
            <Input
              type="name"
              name="nome"
              placeholder="Nome"
              // onChange={handleChange}
            >
              {MOCK_BODY.email}
            </Input>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Nome</FormLabel>
            <Input
              type="name"
              name="nome"
              placeholder="Nome"
              // onChange={handleChange}
            >
              {MOCK_BODY.number}
            </Input>
          </FormControl>
        </FormControl> */}
        {/* <FormControl id="status" mb={4} isRequired>
          <FormLabel>Status</FormLabel>
          <Select
            name="status"
            value={formData.s  tatus}
            // onChange={handleChange}
            placeholder="Selecione o status"
          >
            <option value="Pendente">Pendente</option>
            <option value="Pago">Pago</option>
          </Select>
        </FormControl> */}
        {/* <div>
          <label>Nome</label>
          <input onChange= {handleChange} name="nome" />
        </div> */}

        {/* <div>
          <label>Nome</label>
          <imput onChange= {handleChange} name="nome" />
        </div> */}
        {/* <Button colorScheme="blue" onClick={handlePostCriarPix} width="full">
          Enviar combrança
        </Button> */}
      {/* </form> */}

      <Button colorScheme="blue" onClick={handlePostCriarPix} width="full">
          Enviar combrança
        </Button>
    </Box>
  );
}
