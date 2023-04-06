import { Product } from "../product/product";
import { User } from "../user/user";

export class Shop {
  id?: number;
  description?: string;
  price?: number;
  user?: User;
  products: Product[]=[];
  date_created?: Date;
  date_deleted?: Date;
  shops?:Shop[]=[];
}
