import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import PlaidLinkTokenResponse from 'src/core/interfaces/interfaces';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PlaidLinkTokenService {
    private baseUri = 'http://localhost:5138';
    constructor(private http: HttpClient) {}

    public getLinkToken(): Observable<PlaidLinkTokenResponse> {
        return this.http.get<PlaidLinkTokenResponse>(this.baseUri + '/api/plaid/link/create').pipe(
            map((data: PlaidLinkTokenResponse) => {
                return data;
            }), catchError(err => {
                throw(err)
            })
        )
    }
}
