import { Component, OnInit } from '@angular/core';
import { UserLoginResponse } from 'src/core/models/UserLoginResponse';
import { AuthStorageService } from 'src/services/auth/local-storage-service';
import { TransactionService } from 'src/services/transactions/transaction-service';

@Component({
  selector: 'app-insight-home',
  templateUrl: './insight-home.component.html',
  styleUrls: ['./insight-home.component.css']
})
export class InsightHomeComponent implements OnInit {
    
  isLoggedIn: Boolean;
  authValues: UserLoginResponse;
  transactions: object;
  errorString: string = "";

  constructor(private authStorageService: AuthStorageService,
              private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.authValues = this.authStorageService.getAuth('auth');
    if(this.authValues.token !== '') {
        this.isLoggedIn = true;
        console.log(this.authValues);
    this.transactions = [];
    }
  }

  getTransactions() {
    this.transactionService.getTransactions(
        this.authValues.user.id, this.authValues.token, this.authValues.user.access_token)
        .subscribe((data: any) => {
            if(data) {
                console.log('we got data');
                this.transactions = data;
            } else {
                this.errorString = "no transactions recieved";
            }
        });
  }
}

  // TODO: create a menu here where we can view options
  // on where we want to go next ie credit/debit/charts

