import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
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

}
