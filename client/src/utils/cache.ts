import { apiDux } from "@/service/api.service";
import { unstable_cache } from "next/cache";

// usamos unestable_cache para tener un manejo más controlado de la cache para las peticiones al total de las páginas
// para que exista una mejor experiencia de usuario
export const getCachedPersonalTotal = unstable_cache(
  async (searchTerm?: string,status?:string) => {
    return apiDux.getPersonalTotal(searchTerm,status);
  },
  [],
  {
    tags: ["personalTotal"],
  }
);
