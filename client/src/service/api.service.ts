import { URLS } from "@/utils/service";
import { createApiClient } from "./api-client.service";
import { config } from "@/config";

export const apiDux = {
  async getPersonal(): Promise<any> {
    /* throw new Error("error") */
    try {
      const { data } = await createApiClient().get(
        `${URLS.PERSONAL}?sector=${config.sector}&_limit=10&_page=1`
      );
     
      return data;
    } catch (error) {
      return error as Response;
    }
  },
};
