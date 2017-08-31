import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'myProfile', component: ProfileComponent}
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ],
    providers: [ AuthenticationService ] 
})

export class AuthRoutingModule {
    
}