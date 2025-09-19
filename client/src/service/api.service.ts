import { User, UsersResponse } from "@/types/personal";
import { buildPersonalUrl, ApiParams } from "@/utils/api";
import { createApiClient } from "./api-client.service";
import { URLS } from "@/utils/service";

export const apiDux = {
  async getPersonal(
    page: string,
    limit: string,
    searchTerm?: string,
    sortField?: string,
    sortOrder?: "asc" | "desc",
    status?:string
  ): Promise<UsersResponse> {
    const params: ApiParams = { page, limit, searchTerm, sortField, sortOrder,status };
    const url = buildPersonalUrl(params);
    try {
      const { data } = await createApiClient().get(url);
      return { users: data };
    } catch (error) {
      console.log(error);
      throw new Error(`${error}`);
    }
  },

  async getPersonalTotal(searchTerm?: string,status?:string): Promise<number> {
    console.log("*********** GET PERSONAL TOTAL************");
    const params: ApiParams = { page: "1", limit: "1", searchTerm ,status};
    const url = buildPersonalUrl(params);
    try {
      const { headers } = await createApiClient().get(url);
      return parseInt(headers["x-total-count"] || "0");
    } catch (error) {
      console.log(error);
      throw new Error(`${error}`);
    }
  },

  async createPersonal(user: User) {
    try {
      const { data } = await createApiClient().post(`${URLS.PERSONAL}`, user);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al cetrar usuario");
    }
  },

  async deletePersonal(userId: string) {
    try {
      const { data } = await createApiClient().delete(
        `${URLS.PERSONAL}/${userId}`
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`${error}`);
    }
  },

  async getPersonalById(userId: string) {
    const { data } = await createApiClient().get(`${URLS.PERSONAL}/${userId}`);
    return data;
  },

  async updateUserById(userId: string, user: User) {
    try {
      const { data } = await createApiClient().patch(
        `${URLS.PERSONAL}/${userId}`,
        user
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`${error}`);
    }
  },
};
