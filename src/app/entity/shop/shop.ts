import { Product } from "../product/product";

export interface Shop {
  id?: number;
  description?: string;
  price?: DoubleRange;
  product: Product[];
  date_created?: Date;
  date_deleted?: Date;
}
