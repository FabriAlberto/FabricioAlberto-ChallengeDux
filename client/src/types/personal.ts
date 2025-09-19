export type User = {
  id: string;
  usuario: string;
  sector: number;
  estado: Status;
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
};
export enum Status{
  ACTIVE='ACTIVO',
  INACTIVE='INACTIVO'
}
export type FormUser = {
  id: string;
  usuario: string;
  sector: number;
  estado: Status | string;
};