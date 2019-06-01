import { Component, OnInit } from '@angular/core';
import { AdminService } from '../servises/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AdminServ:AdminService) { }

  ngOnInit() {
  }

  userName='';
  password='';

  Login(user){
    this.AdminServ.login(user).subscribe(
      (res)=>{console.log(res);localStorage.setItem('currentUserToken', JSON.stringify({ token: res, name: user.username }));
    },
      (error)=>{console.log(error.message)},
      ()=>{alert("welcome "+user.username)}
    )
  }
}
