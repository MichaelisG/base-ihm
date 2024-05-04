import { Role } from "./role.model";

export interface Group {
  id: number;
  name: string;
  alias: string;
  roles: Role[];
}