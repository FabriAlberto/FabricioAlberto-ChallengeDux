import { URLS } from "@/utils/service";
import { config } from "@/config";

export type ApiParams = {
  page: string;
  limit: string;
  searchTerm?: string;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
};

export const buildPersonalUrl = (params: ApiParams): string => {
  let url = `${URLS.PERSONAL}?sector=${config.sector}&_page=${params.page}&_limit=${params.limit}`;
  
  if (params.searchTerm) {
    url += `&usuario_like=${params.searchTerm}`;
  }
  
  if (params.sortField) {
    url += `&_sort=${params.sortField}`;
    if (params.sortOrder) {
      url += `&_order=${params.sortOrder}`;
    }
  }
  
  return url;
};

export const buildSearchParams = (
  currentParams: URLSearchParams,
  updates: Partial<{
    query: string;
    page: string;
    limit: string;
    sort: string;
    order: 'asc' | 'desc';
  }>
): URLSearchParams => {
  const params = new URLSearchParams(currentParams);
  
  Object.entries(updates).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      params.set(key, value.toString());
    } else {
      params.delete(key);
    }
  });
  
  return params;
};
