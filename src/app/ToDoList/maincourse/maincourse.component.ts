import { Component, OnInit } from '@angular/core';
import { CourceService } from 'src/app/cource/cource.service';

@Component({
  selector: 'app-maincourse',
  templateUrl: './maincourse.component.html',
  styleUrls: ['./maincourse.component.scss']
})

export class MaincourseComponent implements OnInit {


  constructor(private userCourse:CourceService) {

  }


  ngOnInit(): void {
    this.userCourse.getAll();
  }

}
