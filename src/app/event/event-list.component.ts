import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Event } from './event';
import { EventService } from './event.service';
import { Router } from "@angular/router";
 
@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[]
  constructor(private eventService:EventService, private router: Router) { }

  ngOnInit() {
    let timer = Observable.timer(0,5000);
    timer.subscribe(()=>this.getEvents());
  }

  getEvents(){
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

  goToShow(event:Event):void{
    let eventLink = ['/events',event.id];
    this.router.navigate(eventLink)
  }

}
