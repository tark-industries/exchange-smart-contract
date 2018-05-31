import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {auth} from "firebase";
import {APIService} from "../../service/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth, APIService]
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private APIService: APIService) {
  }

  ngOnInit() {
    console.log('1')
    this.afAuth.idToken.subscribe((idToken) => {
      console.log(idToken);
      this.APIService.test(idToken).subscribe((data)=> {
        console.log(data);
      })
    });


    this.afAuth.authState.subscribe((auth) => {
      if (auth) {
        console.log('authed', auth)
      } else {
        console.log('not')
      }
    });
  }


  private onAuthStateChanged(auth) {


  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
