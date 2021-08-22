import { Component, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationComponent } from '../authentication/authentication.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private validate: AuthenticationComponent) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (this.validate.validateState) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
