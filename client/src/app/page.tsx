import Search from "@/components/home/Search";
import TableSkeleton from "@/components/home/TableSkeleton";
import UserTable from "@/components/home/UserTable";
import UserTablePaginatorClient from "@/components/home/UserTablePaginatorClient";
import { getCachedTotalCount } from "@/utils/cache";
import { Button } from "primereact/button";
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
  };
}) {
  const query = searchParams?.query || "";
  const page = searchParams?.page || "1";
  const limit = searchParams?.limit || "10";
  const sortField = searchParams?.sort || "";
  const sortOrder = (searchParams?.order as "asc" | "desc") || "asc";

  const totalCount = await getCachedTotalCount(query);

  return (
    <section>
      <div className="flex justify-content-between align-items-center">
        <p className="text-2xl font-bold text-black">Usuarios</p>
        <Button className="pi pi-plus"> Nuevo usuario </Button>
      </div>
      <div className="mb-3">
        <Search />
      </div>
      <Suspense
        key={query + page + limit + sortField + sortOrder}
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
