import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './components/login/login.component';
import {AngularFireAuth} from "angularfire2/auth";
import {HttpClientModule} from "@angular/common/http";


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
