import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { EventListComponent } from './event/event-list.component';
import { EventService } from './event/event.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { EventShowComponent } from "./event/event-show.component";

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    HomepageComponent,
    EventShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
