import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";

  constructor(private loginService: LoginService,
              private router: Router) { }

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      (res) => {
        const regex = /accessToken:\s*([^\s]+)/;
        const match = res.accessToken.match(regex);
        const token = match ? match[1] : null;
        localStorage.setItem("token", token)

        this.router.navigateByUrl('product').then(() => {
          window.location.reload();
        })

      },

      (error) => {
        console.log(error);
        alert("Error al Inciiar Sesion")
      }
    )
  }

}
