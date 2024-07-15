import axios from "axios";

export async function postCriarPix(body) {
  return await axios.post("http://localhost:3001/criar-pix", 
    body)
    // .then(response => {
    //   response
    // })
    // .catch((error) => {
    //   console.error(error)
    // });
}
