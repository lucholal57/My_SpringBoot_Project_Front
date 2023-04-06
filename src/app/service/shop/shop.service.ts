import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Shop } from 'src/app/entity/shop/shop';


const Headers = {
  headers: new HttpHeaders({ 'content-type' : 'application/json',
                              'Authorization' : 'Bearer' +" "+ localStorage.getItem('token')}),
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private api = 'http://localhost:8080/api/v1/'

constructor(
  private router: Router,
  private http: HttpClient,
) { }

getShop():Observable<Shop> {
  return this.http.get<Shop>(this.api + 'shops/shop',Headers);
}

postShop(shop:Shop):Observable<Shop> {
  return this.http.post<Shop>(this.api + 'shops/shop', shop,Headers);
}

}
