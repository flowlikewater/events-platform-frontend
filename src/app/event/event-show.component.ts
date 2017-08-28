import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';
import { Event } from './event';
import { EventService } from './event.service';

@Component({
    selector: 'event-show',
    templateUrl: 'event-show.component.html',
    styleUrls: ['event.component.css']
})

export class EventShowComponent implements OnInit {
    id: number;
    routeId: any;
    constructor(
        private http:Http,
        private route:ActivatedRoute,
        private eventService: EventService
    ) {}
 
    @Input() event: Event;

    ngOnInit(){
        this.routeId = this.route.params.subscribe(
        params => {
            this.id = +params["id"];
        }
    )
    let eventRequest = this.route.params
        .flatMap((params:Params) => 
        this.eventService.getEvent(+params['id']));
        eventRequest.subscribe(response => this.event = response.json())
    }
}