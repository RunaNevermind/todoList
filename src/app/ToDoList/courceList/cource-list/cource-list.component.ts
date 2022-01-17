import { Component, } from '@angular/core';
import { CourceService } from 'todoList/src/app/cource/cource.service';

@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss']
})
export class CourceListComponent{

  constructor(public cources:CourceService){
  }
  

}
