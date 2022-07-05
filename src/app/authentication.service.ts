import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authResponse } from './model/authresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   url = "http://localhost:8080/authapp"

  constructor(private http: HttpClient) { }
  getUserToken(empDetails: any) {
    return this.http.post<authResponse>(this.url + "/login", empDetails);
  }
}
