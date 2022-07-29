import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public messageForHeader = "PARENT";

  public top_position = 200;
  public left_position = 300;

  public gameDirection($event){
    console.log($event)
    if ($event == 1) {
      this.top_position -= 5;
    } else if ($event == 2) {
      this.left_position -= 5;
    } else if ($event == 3) {
      this.left_position += 5;
    } else if ($event == 4) {
      this.top_position += 5;
    }
  }

}
