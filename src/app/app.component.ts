import { Component } from '@angular/core';
import { AuthenticationService } from "./authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (private authService: AuthenticationService){}
  title = 'app';

  ngOnInit(){
  }
}
