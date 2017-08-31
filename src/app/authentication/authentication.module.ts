import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent,
        ProfileComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    providers: [

    ] 
})

export class AuthenticationModule {}
