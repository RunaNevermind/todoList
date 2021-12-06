import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourceService } from 'src/app/cource/cource.service';
import { UserService } from '../../../user/user.service';
import { LoginValidationService } from './login-validation.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  constructor(public validation: LoginValidationService){}

  public inputLogin: string = '';
  public inputPassword: string = '';
  validateState: boolean = this.validation.validateState;
  removeWarning:boolean=true;
  hideIt(){
    if(this.inputLogin!==" "||this.inputPassword!==" "){
      this.removeWarning=false;
      return this.removeWarning;
    }
    return this.removeWarning;
  }
}
