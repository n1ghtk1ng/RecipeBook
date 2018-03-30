/**
 * Created by aman on 10/10/17.
 */
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor (private authService: AuthService) {
  }

  canActivate (route: ActivatedRouteSnapshot, path: RouterStateSnapshot) {
    return this.authService.isAuthenticated();  // i.e. returning a boolean value
  }

}
