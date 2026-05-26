import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeService } from './time-service';
import { Time } from './time.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  times:Time[]=[];
  constructor(private timeService:TimeService){}
  ngOnInit() {
    this.timeService.getTimes().subscribe(data=>{
       this.times=data;
    })
  }
}
