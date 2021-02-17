import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    // localStorage.setItem('token', '12345');
    // this.needsLogin();
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }
}
