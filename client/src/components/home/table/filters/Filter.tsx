import React from "react";
import Search from "./Search";
import StatusFilter from "./StatusFilter";
import RemoveFiltersButton from "./RemoveFiltersButton";

const Filter = () => {
  return (
    <div className="w-full flex gap-3 flex-wrap flex-column md:flex-row">
      <Search />
      <StatusFilter />
      <RemoveFiltersButton />
    </div>
  );
};

export default Filter;
