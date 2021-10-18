import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  counter:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  projectCounter : any = setInterval(()=>{
    this.counter++;
    if (this.counter==2068){
      clearInterval(this.projectCounter);
    }
  },5)

}
