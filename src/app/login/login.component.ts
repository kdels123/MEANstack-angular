import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    console.log([username, password]);
    if (username === 'admin' && password === 'admin') {
      this.service.login(username, password)
        .then(() => {
          this.router.navigate(['profile/admin']);
        });
    } else {
      this.service.login(username, password)
        .then(() => {
          this.router.navigate(['profile']);
        });
    }
  }

  constructor(private router: Router, private service: UserServiceClient) { }

  ngOnInit() {
  }

}
