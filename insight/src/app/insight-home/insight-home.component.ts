import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth-service';

@Component({
  selector: 'app-insight-home',
  templateUrl: './insight-home.component.html',
  styleUrls: ['./insight-home.component.css']
})
export class InsightHomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
