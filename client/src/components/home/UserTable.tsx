import React from "react";
import { apiDux } from "@/service/api.service";
import UserTableClient from "./UserTableClient";

type Props = {
  query?: string;
  currentPage: string;
  limit: string;
  sortField?: string;
  sortOrder?: "asc" | "desc";
};
//Usamos este server component solo para poder obtener la información desde el servidor y aprovechar el suspense + fallback
export default async function UserTable({
  query,
  currentPage,
  limit,
  sortField,
  sortOrder,
}: Props) {
  const { users } = await apiDux.getPersonal(
    currentPage,
    limit,
    query,
    sortField,
    sortOrder
  );

  return <UserTableClient users={users} />;
}
