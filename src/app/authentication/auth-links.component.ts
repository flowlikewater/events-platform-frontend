import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'

@Component({
    selector: 'auth-links',
    template: `
        <div class='ui form'>
            <div class='fields'>
                <div class='field'>
                    <button (click)='checking()'class='btn btn-outline-success my-2 my-sm-0'>console user</button>
                </div>
                <div class='field'>
                    <button class='btn btn-outline-success my-2 my-sm-0' type='submit' routerLink='/login' routerLinkActive='active' *ngIf="!isLoggedIn()">Log In </button>
                </div>
                <div class='field'>
                    <button class='btn btn-outline-success my-2 my-sm-0' type='submit' routerLink='/signup' routerLinkActive='active' *ngIf="!isLoggedIn()">Sign Up </button>
                </div>
                <div class='field'>
                    <button class='btn btn-outline-success my-2 my-sm-0' routerLink='/myProfile' *ngIf="isLoggedIn()">My Profile </button>
                </div>
                <div class='field'>
                    <button class='btn btn-outline-success my-2 my-sm-0' type='submit' routerLink='/logout' *ngIf="isLoggedIn()" (click)='logOut()'>Log Out </button>
                </div>
            </div>
        </div>
    `
})
 
export class AuthLinksComponent {
    constructor(private authService: AuthenticationService){}

    isLoggedIn():boolean{
        return this.authService.isLoggedIn();
    }


    isLoggedOut():boolean{
        return !this.authService.isLoggedIn(); 
    } 

    logOut():void {
        this.authService.logOut();
    }

    checking(){
        console.log(this.authService.isLoggedIn())
    }
}