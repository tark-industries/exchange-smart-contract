import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {AngularFireAuth} from "angularfire2/auth";
import {APIService} from "./service/api.service";
import {WelcomeComponent} from './components/welcome/welcome.component';
import {GoogleSSOGuard} from "./guards/google-sso/google-sso.guard";


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [GoogleSSOGuard]},
  {path: 'welcome', component: WelcomeComponent, canActivate: [GoogleSSOGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AngularFireAuth, APIService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
