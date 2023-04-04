import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/entity/category/category';


const Headers = {
  headers: new HttpHeaders({ 'content-type' : 'application/json',
                              'Authorization' : 'Bearer' +" "+ localStorage.getItem('token')}),
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private api = 'http://localhost:8080/api/v1/'

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  //get Producto
  getCategories():Observable<Category> {
    return this.http.get<Category>(this.api + 'products/category',Headers);
  }


}
