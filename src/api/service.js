import axios from "axios";

export async function postCriarPix(body) {
  return await axios.post("http://localhost:3001/criar-pix", body)
    .then(response => {
      return response.data; // Retorne os dados da resposta
    })
    .catch((error) => {
      console.error("Erro ao criar PIX:", error); // Adicione uma mensagem de erro descritiva
      throw error; // Lançar o erro para que quem chamar a função possa tratá-lo
    });
}