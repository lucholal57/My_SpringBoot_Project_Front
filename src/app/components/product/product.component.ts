import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/entity/category/category';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  searchTerm:any;
  products: any[] = [];
  categories:any[] =[];
  categoryName="";
  obj=new Object();


  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private categoryService: CategoryService) { }
  //Formulario Registro
  formularioRegistro = this.formBuilder.group({
    id: [0],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    category: [, [Validators.required]],
    qty: ['', [Validators.required]],
    price:['',[Validators.required]],
  })

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.products;
      console.log(this.products);
    }, (error) => {
      console.error(error);
    });
  }

  setCategoryValue(){
    console.log(this.formularioRegistro.get('category')?.value)
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.categories;
    })
  }

  addProduct(){
    this.productService.postProduct(this.formularioRegistro.value).subscribe(
      (res) => {
        console.log(res);
        this.getProducts();
      },
      (error) => {
        console.log(error);
      }
    )
  }
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        alert("Producto Eliminado")
        console.log(res);
        this.getProducts();
      },
      (error) => {
        alert("Error al eliminar producto!!")
        console.log(error);
      }
    )
  }

  editProduct(){}

}
