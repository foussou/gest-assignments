import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserContextService } from 'src/app/shared/user-context.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private userContextService: UserContextService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var user = this.userContextService.user$.getValue();
        if (user != null) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to connexion page with the return url and return false
        this.router.navigate(['/connexion'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
