import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/entity/product/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = 'http://localhost:8080/api/v1/'

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  //get Producto
  getProducts():Observable<Product> {
    return this.http.get<Product>(this.api + 'products/product',httpOptions);
  }
  //post producto
  postProduct(formularioRegistro:any):Observable<Product> {
    return this.http.post<Product>(this.api+ 'products/product', formularioRegistro,httpOptions);
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete<any>(this.api+ 'products/product/' + id,httpOptions);
  }
}
