import { Injectable } from "@angular/core";
import { UserLoginResponse } from "src/core/models/UserLoginResponse";

@Injectable()
export class AuthStorageService {
    setAuth(key: string, res: UserLoginResponse): void {
        localStorage.setItem(key, JSON.stringify(res));
    }

    clearAuth(): void {
        localStorage.clear();
    }

    getAuth(key: string): UserLoginResponse {
        return JSON.parse(localStorage.getItem(key) || '{}');
    }
}
