import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/pedroalcon09/api-to-dos",
});

export default api;
