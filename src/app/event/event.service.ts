import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Event } from './event'

@Injectable()

export class EventService {
    private eventsUrl = "http://localhost:3000/events";
    constructor(private http:Http){}
    getEvents():Observable<Event[]>{
        return this.http.get(this.eventsUrl)
        .map((response:Response) => <Event[]>response.json())
    }
    getEvent(id:number){
        return this.http.get(this.eventsUrl + "/" + id + ".json")
    }
    // createEvent(event:Event): Observable<Event>{
    //     let headers = new Headers({'Content-Type':'application/json'})
    //     let options = new RequestOptions({headers:headers})
    //     return this.http.post(this.eventsUrl, JSON.stringify(event), options).map((res:Response) => res.json())
    // }
} 