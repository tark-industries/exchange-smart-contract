import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class APIService {

  constructor(private http: HttpClient) {
  }

  public test(idToken) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ID_TOKEN': idToken
      })
    };

    return this.http.get('http://127.0.0.1:3000/api/test', httpOptions);
  }
}
