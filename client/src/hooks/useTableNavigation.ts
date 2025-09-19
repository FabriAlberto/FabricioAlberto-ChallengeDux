"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { buildSearchParams } from "@/utils/api";
import { Status } from "@/types/personal";

export const useTableNavigation = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateParams = (
    updates: Partial<{
      query: string;
      page: string;
      limit: string;
      sort: string;
      order: "asc" | "desc";
      status: Status;
    }>
  ) => {
    const params = buildSearchParams(searchParams, updates);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleSort = (sortField: string, sortOrder: "asc" | "desc") => {
    updateParams({
      sort: sortField,
      order: sortOrder,
      page: "1",
    });
  };

  const handlePageChange = (page: number) => {
    updateParams({ page: page.toString() });
  };

  const handleSearch = (query: string) => {
    updateParams({
      query,
      page: "1",
    });
  };

  const handleLimitChange = (limit: number) => {
    updateParams({
      limit: limit.toString(),
      page: "1",
    });
  };
  const handleChangeStatus = (status: Status) => {
    updateParams({
      status,
    });
  };
  const removeFilters = () => {
    updateParams({
      status: undefined,
      query: "",
    });
  };
  return {
    searchParams,
    updateParams,
    handleSort,
    handlePageChange,
    handleSearch,
    handleLimitChange,
    handleChangeStatus,
    removeFilters,
  };
};
