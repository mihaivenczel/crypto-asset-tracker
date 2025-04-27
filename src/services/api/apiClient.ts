import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export type ApiClientInstance = ReturnType<typeof createApiClient>;
export type ApiRequest<Method extends keyof ApiClientInstance> =
  ApiClientInstance[Method];

const API_TIMEOUT = 30000;

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: API_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export const createApiClient = () => {
  const axiosInstance = createAxiosInstance();

  return {
    get: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
      axiosInstance.get<T>(url, config),
  };
};
