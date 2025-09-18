export type User = {
  id: string;
  usuario: string;
  sector: number;
  estado: 'ACTIVO'|'INACTIVO';
};

export type Pagination = {
  limit?: number;
  page?: number;
};

export type UserTableColItem = {
  field: keyof User;
  header:string;
  sortable:boolean;
};

export type UsersResponse = {
  users: User[];
  totalCount: number;
};
