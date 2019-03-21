import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {SignupComponent} from './signup/signup.component';
import {ServicesComponent} from './services/services.component';
import {HomeComponent} from './home/home.component';
import {ClassifiedsComponent} from './classifieds/classifieds.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'classifieds', component: ClassifiedsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
