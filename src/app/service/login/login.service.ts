import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from 'src/app/entity/user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUser: User=new User();
  private api = 'http://localhost:8080/api/v1/'

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this.http.post(this.api+ 'token/login', formData);
  }

  loginUser(username:string):Observable<User>{
    return this.http.get<User>(this.api+ 'users/user/?query=' + username)
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }





}
