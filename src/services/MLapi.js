import axios from "axios";

export const ML_API = axios.create({
  baseURL: "https://api.mercadolibre.com/",
});

ML_API.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error) => {

    return Promise.reject({
      message: "Error en la respuesta del servidor.",
      status: error.response.status,
      serverMessage: error.response?.data?.message,
    });
  }
);
