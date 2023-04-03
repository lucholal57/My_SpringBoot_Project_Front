import { Category } from "../category/category";

export class Product {
  id?: number;
    name?: string;
    description?: string;
    category?: Category;
    price?: number;
    qty?: number;
    dateCreated?: string;
    dateDeleted?: string;
    products: Product[]=[];
}
