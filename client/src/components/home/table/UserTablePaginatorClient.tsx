"use client";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import React, { FC } from "react";
import { useTableNavigation } from "@/hooks/useTableNavigation";

type Props = {
  totalCount: number;
};

const UserTablePaginatorClient: FC<Props> = ({ totalCount }) => {
  const { searchParams, handlePageChange, handleLimitChange } = useTableNavigation();
  
  const currentPage = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    const newPage = event.page + 1; // PrimeReact usa 0-based, nosotros 1-based
    const newLimit = event.rows;
    if (newLimit !== limit) {
      handleLimitChange(newLimit);
    } else {
      handlePageChange(newPage);
    }
  };

  return (
    <div className="card">
      <Paginator
        first={(currentPage - 1) * limit}
        rows={limit}
        totalRecords={totalCount}
        rowsPerPageOptions={[5, 10, 15]}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default UserTablePaginatorClient;
