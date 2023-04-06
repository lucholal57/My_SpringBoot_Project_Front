import { Role } from "src/app/enum/role.enum";

export class User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: Role;
  dateCreated?: Date;
  dateDelete?: Date;
}
