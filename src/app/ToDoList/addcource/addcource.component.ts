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
  cources: Cource = new Cource("","","");
  cource: Cource[]=[];

 
  constructor(private router: Router){}
  saveCource(){
    if(this.cources.name!==""&& this.cources.synopsis!==""&& this.cources.author!==""){
      this.cource.push(new Cource(this.cources.name, this.cources.synopsis, this.cources.author));
      localStorage.setItem("cources", JSON.stringify(this.cources));
      this.cources.name="";
      this.cources.synopsis="";
      this.cources.author="";
      return this.cources;
    }
    else{
      return this.visible=false
    }

  }

}