"use client";
import { useTableNavigation } from "@/hooks/useTableNavigation";
import { Button } from "primereact/button";
import React from "react";

const RemoveFiltersButton = () => {
  const { searchParams, removeFilters } = useTableNavigation();
  const query = searchParams.get("query");
  const status = searchParams.get("status");
  if (!query && !status) return null;
  return (
    <Button
      icon="pi pi-filter-slash"
      onClick={removeFilters}
      severity="danger"
      aria-label="Cancel"
      title="Limpiar filtros"
    />
  );
};

export default RemoveFiltersButton;
