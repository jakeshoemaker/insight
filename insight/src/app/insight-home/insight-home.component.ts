import { Component, OnInit } from '@angular/core';
import { UserLoginResponse } from 'src/core/models/UserLoginResponse';
import { AuthStorageService } from 'src/services/auth/local-storage-service';

@Component({
  selector: 'app-insight-home',
  templateUrl: './insight-home.component.html',
  styleUrls: ['./insight-home.component.css']
})
export class InsightHomeComponent implements OnInit {
    
  isLoggedIn: Boolean;
  authValues: UserLoginResponse;

  constructor(private authStorageService: AuthStorageService) { }

  ngOnInit(): void {
    this.authValues = this.authStorageService.getAuth('auth');
    if(this.authValues.token !== '') {
        this.isLoggedIn = true;
        console.log(this.authValues);
    }
  }

  // TODO: create a menu here where we can view options
  // on where we want to go next ie credit/debit/charts

}
