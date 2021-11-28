import { Component, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { LoginValidationService } from '../authentication/login-validation.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private login: AuthenticationComponent,
    public router: Router,
    public validate: LoginValidationService,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log(this.validate.validateState)
    if (this.validate.validateState) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
