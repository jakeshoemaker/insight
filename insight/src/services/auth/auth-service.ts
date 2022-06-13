import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, catchError, Observable } from "rxjs";
import { UserLoginResponse } from "src/core/models/UserLoginResponse";
import { AuthStorageService } from "./local-storage-service";

@Injectable()
export class AuthService {
    private baseUri = 'http://localhost:5138';
    public isLoggedIn = false;
    private _token: string;
    private _access_token: string;

    constructor(private authStorageService: AuthStorageService,
                private http: HttpClient) {}

    public get token() { return this._token };
    public set token(tk: string) { this._token = tk; }

    public get accessToken() { return this._access_token };
    public set accessToken(atk: string) { this._access_token = atk };

    // TODO: hash pw
    public login(username: string, pw: string): Observable<boolean> {
        return this.http.post<UserLoginResponse>(this.baseUri + '/api/auth/login', {
            "username": username,
            "password": pw
        }).pipe(
            map((res: UserLoginResponse) => {
                if (res != null || res != undefined) {
                    this.authStorageService.setAuth('auth', res);
                    this.accessToken = res.user?.access_token ? res.user.access_token : '';
                    this.token = res.token;
                    this.isLoggedIn = true;
                }
                return this.isLoggedIn;
            }), catchError(err => { throw (err); })
        );
    }

    // TODO: implement accesstoken call we can grab this 
    // on login if the server doesnt return one
}
