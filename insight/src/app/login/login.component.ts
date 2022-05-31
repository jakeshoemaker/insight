import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  pw: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submitLogin() {
    this.authService.login(this.username, this.pw).subscribe((data: Boolean) => {
      if (data) {
        this.router.navigateByUrl('/');
        console.log('successful login!');
      }
    });
  }
}
