import { Injectable } from '@angular/core';

export class CourceService {
  public creationDate=new Date(2020, 4, 15);

  private allCourse={
    cource1:{
      name:"cource1",
      infoAbout:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      author:"Nikolo Tesla",
      Date:this.creationDate,
    }

  }
  

  constructor() { }

  public getAll(){
    return this.allCourse;
  }
}
