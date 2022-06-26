import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, catchError, Observable } from 'rxjs';
import { TransactionsGetResponse } from 'src/core/models/TransactionsGetResponse';

@Injectable()
export class TransactionService {
    //TODO this is really lazy and ill clean it up later
    private _baseUri = 'http://localhost:5138';

    constructor(private http: HttpClient) { }
    

    public getTransactions(id: string, jwt: string, accessToken: string): Observable<object> {
        var uri = this._baseUri + '/api/plaid/user/' + id + '/transactions';
        return this.http.post<TransactionsGetResponse>(uri, {
            "start_date": "2020-01-01",
            "end_date": "2022-06-23",
            "access_token": accessToken,
        }, { headers: new HttpHeaders({
                'Authorization': `Bearer ${jwt}`
            })}).pipe(
                map((res: TransactionsGetResponse) => {
                return res;
        }), catchError(err => { throw (err); } ));
    }
}
