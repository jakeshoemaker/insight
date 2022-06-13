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
        if (localStorage.getItem('auth')) {
        // logged in so return true
            return true;
        }

        // redirect since not logged in
        this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
        return false;
    }
}

