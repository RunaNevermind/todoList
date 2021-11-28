import { Injectable } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginValidationService {

  constructor(private user: UserService) {}

  public validateState: boolean = false;
  private passwordState: boolean = false;
  private loginState: boolean = false;

  private userEmail: string = this.user.admin.email;
  private userPassword: string = this.user.admin.password;


  verLogin(inputLogin: string): boolean {
    if (this.userEmail === inputLogin) {
      this.loginState = true;
    } else {
      this.loginState = false;
    }
    return this.loginState;
  }

  verPassword(inputPassword: string): boolean {
    if (this.userPassword=== inputPassword) {
      this.passwordState = true;
    } else {
      this.passwordState = false;
    }
    return this.passwordState;
  }

  myValid(login: string, password: string): boolean {
    if (this.verLogin(login) && this.verPassword(password)) {
      this.validateState = true;
    } else {
      this.validateState = false;
    }
    return this.validateState;
  }
}
