import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {auth} from "firebase";
import {APIService} from "../../service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth, APIService]
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private APIService: APIService, private Router: Router) {
  }

  private onIdToken = (idToken) => {
    console.log(`IdToken: ${idToken}`);
    if (idToken) {
      localStorage.setItem('id_token', idToken);
      this.Router.navigate(['home']);
    }
  };

  private onIdTokenError = (err) => {
    console.log(err)
  };

  ngOnInit() {
    this.afAuth.idToken.subscribe(this.onIdToken, this.onIdTokenError);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
