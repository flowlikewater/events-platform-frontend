import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event/event-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventShowComponent } from "./event/event-show.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent},  
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventShowComponent }  
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