import axios from "axios";

const api = axios.create({
  baseURL: "http://homologacao3.azapfy.com.br/api/ps/metahumans  ",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default api;
