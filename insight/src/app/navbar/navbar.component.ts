import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  isLoggedIn: boolean = true; // setting true for now - so we can develop app, will implement auth later

  constructor() { }

  ngAfterViewInit(): void {
    if (localStorage.getItem('auth') === null) {
        this.isLoggedIn = false;
    }
    this.isLoggedIn = true;
  }

  logout(): void {
      localStorage.removeItem('auth');
      this.isLoggedIn = false;
  }

  // get role: gets access level based off token that server sends


}
