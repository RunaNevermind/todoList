import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourceService } from 'src/app/cource/cource.service';
import { UserService } from '../../../user/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  private courceService;

  constructor(private user: UserService, courcesService:CourceService) {
    this.courceService= courcesService;
  }

  loginForm: FormGroup = new FormGroup({
    inputLogin: new FormControl('', [Validators.required]),
    inputPassword: new FormControl('', [Validators.required]),
  });



  public validateState: boolean = false;
  private passwordState: boolean = false;
  private loginState: boolean = false;

  private userEmail: string = this.user.admin.email;
  private userPassword: string = this.user.admin.password;

  verLogin(): boolean {
    if (this.loginForm.controls['inputLogin'].value === this.userEmail) {
      this.passwordState = true;
    } else {
      this.loginState = false;
    }
    return this.loginState;
  }

  verPassword(): boolean {
    if (this.loginForm.controls['inputPassword'].value === this.userPassword) {
      this.loginState = true;
    } else {
      this.passwordState = false;
    }
    return this.passwordState;
  }

  myValid(): boolean {
    if (this.verLogin() && this.verPassword()) {
      this.validateState = true;
    } else {
      this.validateState = false;
    }
    return this.validateState;
  }
  ngOnInit(): void {
    
  }
}
