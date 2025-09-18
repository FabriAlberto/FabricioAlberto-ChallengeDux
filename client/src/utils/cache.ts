import { apiDux } from "@/service/api.service";

// Cache simple en memoria del servidor
const totalCountCache = new Map<string, { count: number; timestamp: number }>();

export async function getCachedTotalCount(query: string): Promise<number> {
  const cacheKey = query || "default";
  const cached = totalCountCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < 30000) {
    return cached.count;
  }

  try {
    const count = await apiDux.getPersonalTotal(query);
    totalCountCache.set(cacheKey, {
      count,
      timestamp: Date.now()
    });
    return count;
  } catch (error) {
    console.error("Error fetching total count:", error);
    return 0;
  }
}
