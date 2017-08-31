import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Event } from './event'

@Injectable()

export class EventService {
    headers: Headers;
    options: RequestOptions;

    private eventsUrl = "http://localhost:3000/events";

    constructor(private http:Http){
        this.headers = new Headers({'Content-Type':'application/json'})
        this.options = new RequestOptions({headers:this.headers})
    }

    getEvents():Observable<Event[]>{
        return this.http.get(this.eventsUrl)
        .map((response:Response) => <Event[]>response.json())
    }

    getEvent(id:number){
        return this.http.get(this.eventsUrl + "/" + id + ".json")
    }

    createEvent(event:Event): Observable<Event>{
        return this.http.post(this.eventsUrl, JSON.stringify(event), this.options).map((res:Response) => res.json())
    }

    deleteEvent(id:number):Observable<Event>{
        const url=`${this.eventsUrl}/${id}`;
        return this.http.delete(url, this.options)
            .map(this.extractData)
            .catch(this.handleError); 
    }

    updateEvent(event:Event):Observable<Event>{
        const url=`${this.eventsUrl}/${event.id}`
        return this.http.put(url, JSON.stringify(event), this.options)
            .map((res:Response) => res.json()).catch(this.handleError);
    }

    private extractData(res:Response){
        let body = res.json()
        return body || {};
    }
    private handleError(error:any): Promise<any>{
        console.error("An error occured ", error);
        return Promise.reject(error.message || error)
    }
}