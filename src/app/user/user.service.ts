import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public admin ={
    email:"admin",
    password:"admin",
  }
}
