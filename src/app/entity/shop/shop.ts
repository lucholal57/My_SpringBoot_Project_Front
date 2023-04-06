import { Product } from "../product/product";

export class Shop {
  id?: number;
  description?: string;
  price?: number;
  product: Product[]=[];
  date_created?: Date;
  date_deleted?: Date;
  shops?:Shop[]=[];
}
