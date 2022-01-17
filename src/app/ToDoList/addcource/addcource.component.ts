import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class Cource{
  constructor(public name:string, public synopsis: string, public author: string) { }
}
 
@Component({
  selector: 'app-addcource',
  templateUrl: './addcource.component.html',
  styleUrls: ['./addcource.component.scss']
})
export class AddcourceComponent {
  visible:boolean=true;
  cource: Cource = new Cource("","","");
  cources: Cource[]=[];

 
  constructor(private router: Router){}
  saveCource(){
    if(this.cource.name!==""&& this.cource.synopsis!==""&& this.cource.author!==""){
      this.cources.push(new Cource(this.cource.name, this.cource.synopsis, this.cource.author));
      localStorage.setItem("cource", JSON.stringify(this.cources));
      this.cource.name="";
      this.cource.synopsis="";
      this.cource.author="";
      return this.cource;
    }
    else{
      return this.visible=false
    }

  }

}