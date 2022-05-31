import { Injectable } from "@angular/core";
import User from "src/core/models/User";

@Injectable()
export class UserStorageService {
    setUser(key: string, user: User) {
        localStorage.setItem(key, JSON.stringify(user));
    }

    clearUser() {
        localStorage.clear();
    }

    getUser(key: string) {
        return JSON.parse(localStorage.getItem(key) || '{}');
    }
}