import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http";
import { Angular2TokenService } from 'angular2-token';
import { AppComponent } from './app.component';
import { EventListComponent } from './event/event-list.component';
import { EventShowComponent } from "./event/event-show.component";
import { EventNewComponent } from "./event/event-new.component";
import { EventService } from './event/event.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './account/account.component';
import { AuthLinksComponent } from "./authentication/auth-links.component";
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventShowComponent,
    EventNewComponent,
    HomepageComponent,    
    AccountComponent,
    AuthLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AuthenticationModule
  ],
  providers: [
    EventService,
    Angular2TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
