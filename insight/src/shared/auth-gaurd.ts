import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from 'src/services/auth/auth-service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGaurd implements CanActivate {
    constructor(private authService: AuthService, public router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.authService.isLoggedIn !== true) {
            window.alert('Please Login');
            this.router.navigate(['login']);
        }
        return true;
    }
}

