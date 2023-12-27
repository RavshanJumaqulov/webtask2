import axios, { AxiosError, AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: 'https://test.olimjohn.uz/api/',
})

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error: AxiosError) => {
        return error.response
    }
);
export { api }