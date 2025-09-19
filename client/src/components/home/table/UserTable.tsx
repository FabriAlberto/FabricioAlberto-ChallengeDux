import React from "react";
import { apiDux } from "@/service/api.service";
import UserTableClient from "./UserTableClient";

export const revalidate = 60 * 60 * 24

type Props = {
  query?: string;
  currentPage: string;
  limit: string;
  sortField?: string;
  sortOrder?: "asc" | "desc";
  status?:string;
};
//Usamos este server component solo para poder obtener la información desde el servidor y aprovechar el suspense + fallback
export default async function UserTable({
  query,
  currentPage,
  limit,
  sortField,
  sortOrder,
  status
}: Props) {
  console.log('USER TABLE GET ')
  const { users } = await apiDux.getPersonal(
    currentPage,
    limit,
    query,
    sortField,
    sortOrder,
    status
  );

  return <UserTableClient users={users} />;
}
