"use client";
import React from "react";
import { User } from "@/types/personal";
import { colItems } from "@/utils/home/items";
import { DataTable, DataTableStateEvent } from "primereact/datatable";
import { Column } from "primereact/column";
import UserCell from "./UserCell";
import { useTableNavigation } from "@/hooks/useTableNavigation";
import RemoveUserButton from "./RemoveUserButton";

type Props = {
  users: User[];
};
//Este componente se decidió hacerlo del lado del cliente, ya que al tener que modificar celdas de una columna específica
//tuve que utilizar body para poder agregarle eventos (onclick) y ademas para poder manejar el sorting mediante hooks.

const UserTableClient: React.FC<Props> = ({ users }) => {
  const { searchParams, handleSort } = useTableNavigation();
  const sort = searchParams.get("sort") || "";
  const order = (searchParams.get("order") as "asc" | "desc") || "asc";

  const onSort = (e: DataTableStateEvent) => {
    const field = e.sortField;
    const order = e.sortOrder === 1 ? "asc" : "desc";
    handleSort(field, order);
  };

  return (
    <div className="card w-full ">
      <DataTable
        scrollHeight="65vh"
        value={users}
        sortField={sort}
        sortOrder={order === "asc" ? 1 : -1}
        onSort={onSort}
        size="normal"
        tableStyle={{ width: "100%" }}
        emptyMessage="No se encontraron usuarios"
      >
        {colItems.map((item) => {
          return (
            <Column
              key={item.field}
              field={item.field}
              header={item.header}
              sortable={item.sortable}
              style={{ width: "23%", height: "53px" }}
              body={
                item.field === "usuario"
                  ? (data) => {
                      return <UserCell user={data} />;
                    }
                  : undefined
              }
            />
          );
        })}
        <Column
          field="acciones"
          header="Acciones"
          align={"center"}
          body={(data) => {
            return <RemoveUserButton key={data.usuario} user={data} />;
          }}
        />
      </DataTable>
    </div>
  );
};

export default UserTableClient;
