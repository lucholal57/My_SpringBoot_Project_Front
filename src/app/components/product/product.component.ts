import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  searchTerm:any;
  products: any[] = [];
  categoryName="";

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,) { }
  //Formulario Registro
  formularioRegistro = this.formBuilder.group({
    id: [0],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    category: [new Object({name: "TECNOLOGIA"}), [Validators.required]],
    qty: ['', [Validators.required]],
    price:['',[Validators.required]],
  })

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.products;
      console.log(this.products);
    }, (error) => {
      console.error(error);
    });
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
  deleteProduct(){}

  editProduct(){}

}
