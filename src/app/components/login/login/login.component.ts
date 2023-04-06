import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/entity/user/user';
import { LoginService } from 'src/app/service/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  user: User = new User();

  constructor(private loginService: LoginService,
    private router: Router) { }

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      (res) => {
        const regex = /accessToken:\s*([^\s]+)/;
        const match = res.accessToken.match(regex);
        const token = match ? match[1] : null;
        localStorage.setItem("token", token)

        if (localStorage.getItem("token")) {
          this.loginService.loginUser(this.username).subscribe(
            (res) => {
              this.user = res;
              this.loginService.setCurrentUser(res);
              console.log(res);
              this.router.navigate(['/product']);
            }
          )
        }
      }
    );
  }
}
