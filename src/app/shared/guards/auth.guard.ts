import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private userService: UserService, private router: Router) {}

  async canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.checkPermissions(route, state);
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.checkPermissions(route, state);
  }

  checkPermissions(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.userService.getUser();
    const visitingAuth = state.url.includes('auth');

    if (currentUser) {
      if (visitingAuth) {
        this.router.navigate(['/app']);
        return false;
      }
      return true;
    } else {
      if (visitingAuth) {
        return true;
      }
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
