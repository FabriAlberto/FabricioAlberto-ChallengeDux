import { colItems } from "@/utils/home/items";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";
import React from "react";

type Props = {
  limit: number;
  sortField?: string;
  sortOrder?: "asc" | "desc";
};

const TableSkeleton = ({ limit, sortField, sortOrder }: Props) => {
  const mockItems = Array.from({ length: limit }, (v, i) => ({ i: i }));
  return (
    <div className="card">
      <DataTable
        value={mockItems}
        tableStyle={{ width: "100%" }}
        sortField={sortField}
        sortOrder={
          sortOrder === "asc" ? 1 : sortOrder === "desc" ? -1 : undefined
        }
      >
        {colItems.map((item) => (
          <Column
            key={item.field}
            field={item.field}
            header={item.header}
            sortable={item.sortable}
            style={{ width: "23%", height: "53px" }}
            body={<Skeleton />}
          />
        ))}
        <Column
          field="acciones"
          header="Acciones"
          align={"center"}
          body={<Skeleton />}
        />
      </DataTable>
    </div>
  );
};

export default TableSkeleton;
