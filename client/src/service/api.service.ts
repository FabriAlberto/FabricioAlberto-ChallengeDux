import { createApiClient } from "./api-client.service";
import { UsersResponse } from "@/types/personal";
import { buildPersonalUrl, ApiParams } from "@/utils/api";

export const apiDux = {
  async getPersonal(
    page: string,
    limit: string,
    searchTerm?: string,
    sortField?: string,
    sortOrder?: 'asc' | 'desc'
  ): Promise<UsersResponse> {
    const params: ApiParams = {
      page,
      limit,
      searchTerm,
      sortField,
      sortOrder
    };
    
    const url = buildPersonalUrl(params);
    try {
      const { data, headers } = await createApiClient().get(url);
      const totalCount = parseInt(headers["x-total-count"] || "0");
      return { users: data, totalCount };
    } catch (error) {
      console.log(error);
      throw new Error(`${error}`);
    }
  },

  // Nuevo método para obtener solo el total
  async getPersonalTotal(
    searchTerm?: string,
  ): Promise<number> {
    const params: ApiParams = {
      page: "1",
      limit: "1", 
      searchTerm,
    };
    const url = buildPersonalUrl(params);
    try {
      const { headers } = await createApiClient().get(url);
      return parseInt(headers["x-total-count"] || "0");
    } catch (error) {
      console.log(error);
      throw new Error(`${error}`);
    }
  },
};