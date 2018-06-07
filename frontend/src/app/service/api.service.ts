import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserDTO} from "../models/user-dto";

@Injectable()
export class APIService {

  constructor(private http: HttpClient) {
  }

  private getIdTokenFromLS() {
    return localStorage.getItem('id_token');
  }

  private sendGet<T>(url, responseType?) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'id_token': this.getIdTokenFromLS()
      }),
      responseType: 'json' as 'json'
    };

    if(responseType) {
      httpOptions.responseType = responseType;
    }

    return this.http.get<T>(url, httpOptions);
  }

  public checkAuthentication() {
    return this.sendGet('http://127.0.0.1:3000/api/auth/check')
  }

  public registerUserByUID() {
    return this.sendGet('http://127.0.0.1:3000/api/user/register')
  }

  public getAllUsers() {
    return this.sendGet('http://127.0.0.1:3000/api/user/getAll')
  }

  public getCurrentUser() {
    return this.sendGet<UserDTO>('http://127.0.0.1:3000/api/user')
  }


}
