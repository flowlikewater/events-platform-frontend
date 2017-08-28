import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Event } from './event';
import { EventService } from './event.service';

@Component({
    selector: 'event-new',
    templateUrl: 'event-new.component.html',
    styleUrls: ['event.component.css']
})

export class EventNewComponent {
    event = new Event;
    submitted: boolean = false; // check if form is submitted

    constructor(private eventService:EventService){}

    createEvent(event:Event){
        this.submitted = true
        this.eventService.createEvent(event)
            .subscribe( data => {return true},
                error => {
                    console.log('Error creating event');
                    return Observable.throw(error);
                });
    }

}