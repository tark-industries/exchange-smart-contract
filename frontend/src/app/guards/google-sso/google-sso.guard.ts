import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AngularFireAuth} from "angularfire2/auth";
import {APIService} from "../../service/api.service";

@Injectable({
  providedIn: 'root'
})
export class GoogleSSOGuard implements CanActivate {


  constructor(private afAuth: AngularFireAuth, private router: Router, private APIService: APIService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable((observer) => {
      this.APIService
        .checkAuthentication()
        .subscribe(
          (resp: any) => {
            observer.next(true);
          },
          err => {
            let result = err.status === 401;

            if (result) {
              this.router.navigate(['login'])
            }
            observer.next(result);
          });
    })
  }
}
