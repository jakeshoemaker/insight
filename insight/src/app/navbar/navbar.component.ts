import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = true; // setting true for now - so we can develop app, will implement auth later
  roles: string[] = ['guest'];

  constructor() { }

  ngOnInit(): void {
  }

  // get role: gets access level based off token that server sends

}
