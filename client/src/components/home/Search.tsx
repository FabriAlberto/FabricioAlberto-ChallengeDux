"use client";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useDebounce } from "primereact/hooks";
import React, { useEffect } from "react";
import { useTableNavigation } from "@/hooks/useTableNavigation";

const Search = () => {
  const { searchParams, handleSearch } = useTableNavigation();
  
  const currentQuery = searchParams.get("query") || "";
  const [inputValue, debouncedValue, setInputValue] = useDebounce(currentQuery, 300);

  useEffect(() => {
    if (debouncedValue !== currentQuery) {
      handleSearch(debouncedValue);
    }
  }, [debouncedValue, currentQuery, handleSearch]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText
          placeholder="Buscar"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </IconField>
    </div>
  );
};

export default Search;
