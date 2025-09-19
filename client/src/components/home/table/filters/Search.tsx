"use client";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import React, { useEffect, useState } from "react";
import { useTableNavigation } from "@/hooks/useTableNavigation";

const Search = () => {
  const { searchParams, handleSearch } = useTableNavigation();
  const currentQuery = searchParams.get("query") || "";
  const [inputValue, setInputValue] = useState(currentQuery);
  
  useEffect(() => {
    setInputValue(currentQuery);
  }, [currentQuery]);

  // Debounce manual
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue !== currentQuery) {
        handleSearch(inputValue);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, currentQuery, handleSearch]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className="w-full md:w-auto">
      <IconField iconPosition="left" className="w-full">
        <InputIcon className="pi pi-search"> </InputIcon>
        <InputText
          placeholder="Buscar"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-full"
        />
      </IconField>
    </div>
  );
};

export default Search;
