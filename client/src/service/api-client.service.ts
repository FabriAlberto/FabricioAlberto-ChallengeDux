import { config } from "@/config";
import axios, { CreateAxiosDefaults } from "axios";
export function createApiClient() {
  const axiosConfig: CreateAxiosDefaults = { baseURL: config.duxUrlBase };
  const axiosClient = axios.create(axiosConfig);
  return axiosClient;
}
