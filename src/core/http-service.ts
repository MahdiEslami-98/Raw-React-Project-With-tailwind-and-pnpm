import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const httpService = axios.create({
  baseURL: "XXXXXXXXXXXXXXXXXXXXX",
  headers: {
    "Content-Type": "application/json",
  },
});

const baseApi = async <T>(
  url: string,
  options: AxiosRequestConfig,
): Promise<T> => {
  const response = await httpService(url, options);
  return response.data as T;
};

const readData = async <T>(
  url: string,
  headers?: AxiosRequestHeaders,
): Promise<T> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: headers,
  };
  return await baseApi<T>(url, options);
};

const createData = async <TReq, TRes>(
  url: string,
  data: TReq,
  headers?: AxiosRequestHeaders,
): Promise<TRes> => {
  const options: AxiosRequestConfig = {
    method: "POST",
    headers: headers,
    data: JSON.stringify(data),
  };
  return await baseApi<TRes>(url, options);
};

const updateData = async <TReq, TRes>(
  url: string,
  data: TReq,
  headers?: AxiosRequestHeaders,
): Promise<TRes> => {
  const options: AxiosRequestConfig = {
    method: "PUT",
    headers: headers,
    data: JSON.stringify(data),
  };
  return await baseApi<TRes>(url, options);
};

const deleteData = (
  url: string,
  headers?: AxiosRequestHeaders,
): Promise<void> => {
  const options: AxiosRequestConfig = {
    method: "DELETE",
    headers: headers,
  };
  return baseApi(url, options);
};

export { readData, createData, updateData, deleteData };
