
import CreateUserButton from "@/components/home/create-user/CreateUserButton";
import Filter from "@/components/home/table/filters/Filter";
import TableSkeleton from "@/components/home/table/TableSkeleton";
import UserTable from "@/components/home/table/UserTable";
import UserTablePaginatorClient from "@/components/home/table/UserTablePaginatorClient";
import { getCachedPersonalTotal } from "@/utils/cache";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    limit?: string;
    sort?: string;
    order?: string;
    status?:string;
  };
}) {
  const query = searchParams?.query || "";
  const page = searchParams?.page || "1";
  const limit = searchParams?.limit || "10";
  const sortField = searchParams?.sort || "";
  const sortOrder = (searchParams?.order as "asc" | "desc") || "asc";
  const status= searchParams?.status||""

  const totalCount = await getCachedPersonalTotal(query,status);

  return (
    <section>
      <div className="flex justify-content-between align-items-center">
        <p className="text-2xl font-bold text-black">Usuarios</p>
        <CreateUserButton/>
      </div>
      <div className="mb-3">
        <Filter />
      </div>
      <Suspense
        key={query + page + limit + sortField + sortOrder+status}
        fallback={
          <TableSkeleton
            limit={Number(limit)}
            sortField={sortField}
            sortOrder={sortOrder}
          />
        }
      >
        <UserTable
          query={query}
          currentPage={page}
          limit={limit}
          sortField={sortField}
          sortOrder={sortOrder}
          status={status}
        />
      </Suspense>
      {/* En este caso separamos el paginador, para manejarlo por aparte, simulando o usando enrealidad 
       un get a /personal, pero solo con limit=1, para obtener desde el header el total y evitar que 
       el paginador haga la carga al igual que la tabla, ya que podría ser una mala experiencia para el usuario
      */}
      <UserTablePaginatorClient totalCount={totalCount} />
    </section>
  );
}
