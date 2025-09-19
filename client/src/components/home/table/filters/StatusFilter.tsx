"use client";
import { useTableNavigation } from "@/hooks/useTableNavigation";
import { statusOptions } from "@/utils/home/items";
import { Dropdown } from "primereact/dropdown";
import React from "react";

const StatusFilter = () => {
  const { searchParams, handleChangeStatus } = useTableNavigation();
  const status = searchParams.get("status");
  return (
    <Dropdown
      options={statusOptions}
      placeholder="Seleccionar estado"
      value={status || ""}
      onChange={(e) => handleChangeStatus(e.target.value)}
    />
  );
};

export default StatusFilter;
