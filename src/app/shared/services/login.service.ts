import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginMoldel } from '../model/loginModel';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/items';

  getItem(): Observable<LoginMoldel> {
    return this.http.get<LoginMoldel>(this.apiUrl);
  }

  addLoginDetails(logindetail: LoginMoldel):Observable<LoginMoldel> {
    return this.http.post<LoginMoldel>(this.apiUrl, logindetail);
  }
}
