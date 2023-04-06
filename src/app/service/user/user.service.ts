import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/entity/user/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: any;
  private api = 'http://localhost:8080/api/v1/'

constructor(
  private router: Router,
  private http: HttpClient,
) { }

//get Producto
getUsers():Observable<User> {
  return this.http.get<User>(this.api + 'users/user',httpOptions);
}

}
