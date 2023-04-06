import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:any[]=[];

  constructor(
    private sersService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.sersService.getUsers().subscribe(
      (res) => {
        this.users = res.users;
        console.log(res);
      })
  }

}
