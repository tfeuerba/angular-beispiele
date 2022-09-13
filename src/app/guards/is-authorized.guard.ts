import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthorizedGuard implements CanActivate {
  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authorizationService
      .isUserAuthenticated()
      .pipe(
        map((authorized) =>
          authorized ? true : this.router.parseUrl('/login')
        )
      );
  }
}
