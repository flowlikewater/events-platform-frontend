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
    event = new Event 
}