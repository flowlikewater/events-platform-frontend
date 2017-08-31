import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
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
    errorMessage: any;
    editBtnClicked: boolean = false;
    returnUrl: string;
    // private subscription

    constructor(
        private http:Http,
        private route:ActivatedRoute, 
        private eventService: EventService,
        private router:Router
    ) {}
 
    @Input() event: Event;

    ngOnInit(){
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || '/events'
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

    update(event:Event) {
        this.editBtnClicked = true;
        this.eventService.updateEvent(event)
            .subscribe(
                data => {return true}, 
                error => {console.log('Error editing post'); return Observable.throw(error);
        })
    }

    delete(event:Event) {
        this.eventService.deleteEvent(this.event.id)
            .subscribe(data => {this.router.navigate([this.returnUrl])}, error => this.errorMessage = error)
    }

    onUpdateClicked(){
        this.router.navigate([this.returnUrl])
        this.editBtnClicked = false;
    }

    // cancel(event:Event){
    //     this.editBtnClicked = false;
    //     this.subscription.unsubscribe()
    // }

}