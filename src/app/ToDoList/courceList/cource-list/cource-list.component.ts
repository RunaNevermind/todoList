import { Component, OnInit, } from '@angular/core';
import { CourceService } from 'src/app/cource/cource.service';

@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss']
})
export class CourceListComponent implements OnInit{

  constructor(public cources:CourceService){
  }
  public newCources: any='';
  ngOnInit(): void {

    this.newCources=this.cources.getAll();
    console.log(this.newCources)
  }
  

}
