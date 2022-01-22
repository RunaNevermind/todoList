import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public user:UserService) { }
  public userEmail:string=this.user.admin.email;
  public userPassword:string=this.user.admin.password;
  public removeUser:boolean=false;


}
