import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user/user';
import { LoginService } from 'src/app/service/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";
  user:User=new User();

  constructor(private loginService: LoginService,
              private router: Router) { }

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      (res) => {
        const regex = /accessToken:\s*([^\s]+)/;
        const match = res.accessToken.match(regex);
        const token = match ? match[1] : null;
        localStorage.setItem("token", token)

        if(localStorage.getItem("token")){
          this.loginService.loginUser(this.username).subscribe(
            (res) => {
              this.user = res;
              console.log(res);

            }
          )

          this.router.navigateByUrl('product').then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 500);
          });
        }


      },

      (error) => {
        console.log(error);
        alert("Error al Inciiar Sesion")
      }
    )
  }

}
