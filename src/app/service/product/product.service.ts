import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/entity/product/product';

const Headers = {
  headers: new HttpHeaders({ 'content-type' : 'application/json',
                              'Authorization' : 'Token' +" "+ localStorage.getItem('token')}),
}

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
    return this.http.get<Product>(this.api + 'products/product',Headers);
  }
  //post producto
  postProduct(formularioRegistro:any):Observable<Product> {
    return this.http.post<Product>(this.api+ 'products/product', formularioRegistro,Headers);
  }
}