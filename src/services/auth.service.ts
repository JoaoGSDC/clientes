import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/interfaces/login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;

  private defaultUrl = 'http://localhost:3333';
  private loginUrl = `${this.defaultUrl}/auth`;

  constructor(private http: HttpClient) { }

  login(iLogin: Login): Observable<Login> {
    return this.http.post<Login>(this.loginUrl, iLogin).pipe();
  }
}
