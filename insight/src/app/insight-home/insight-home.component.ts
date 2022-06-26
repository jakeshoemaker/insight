import { Component, OnInit } from '@angular/core';
import { Account } from 'src/core/models/Account';
import { Transaction } from 'src/core/models/Transaction';
import { TransactionsGetResponse } from 'src/core/models/TransactionsGetResponse';
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
  errorString: string = "";
  transactions_blob: TransactionsGetResponse;
  transactions: Transaction[];
  accounts: Account[];
  account_name_helper: object[];

  constructor(private authStorageService: AuthStorageService,
              private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.authValues = this.authStorageService.getAuth('auth');
    if(this.authValues.token !== '') {
        this.isLoggedIn = true;
        console.log(this.authValues);
    this.transactions_blob = new TransactionsGetResponse;
    }
  }

  getTransactions() {
    this.transactionService.getTransactions(
        this.authValues.user.id, this.authValues.token, this.authValues.user.access_token)
        .subscribe((data: any) => {
            if(data) {
                this.transactions = data.transactions;
                this.accounts = data.accounts;
            } else {
                this.errorString = "no transactions recieved";
            }
        });
  }

  getAccountName(id: string): string {
    let name = "";
    this.accounts.find(x => {
       if (x.account_id === id) {
           name = x.name;
        }
    });
    return name;
  }
}

  // TODO: create a menu here where we can view options
  // on where we want to go next ie credit/debit/charts
