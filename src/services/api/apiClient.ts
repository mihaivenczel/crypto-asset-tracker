import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export type ApiClientInstance = ReturnType<typeof createApiClient>;
export type ApiRequest<Method extends keyof ApiClientInstance> =
  ApiClientInstance[Method];

const API_TIMEOUT = 30000;

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: API_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

const requestGetWithTimeout =
  <T = unknown>(instance: AxiosInstance) =>
  async (...args: Parameters<AxiosInstance["get"]>): Promise<T> => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), API_TIMEOUT);

    try {
      const config: AxiosRequestConfig = args[1] || {};
      config.signal = controller.signal;

      const response = await instance.get<T>(args[0], config);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      clearTimeout(timeout);
    }
  };

export const createApiClient = (baseURL: string) => {
  const axiosInstance = createAxiosInstance(baseURL);

  return {
    get: requestGetWithTimeout(axiosInstance),
  };
};
