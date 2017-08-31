import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event/event-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventShowComponent } from "./event/event-show.component";
import { EventNewComponent } from "./event/event-new.component";
import { AccountComponent } from "./account/account.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent},  
  { path: 'events', component: EventListComponent },
  { path: 'event/new', component: EventNewComponent},
  { path: 'events/:id', component: EventShowComponent } ,
  { path: 'profile', component: AccountComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }