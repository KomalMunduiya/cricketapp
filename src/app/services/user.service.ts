import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RouterService } from './router.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
// user service to access user backend microservice
export class UserService {

  constructor(private httprequest:HttpClient) { }
  addUser(register:User):Observable<any>{
    console.log("Inside services");
   return  this.httprequest.post("http://localhost:8080/register",register);
    
  }

  public getdetails(username: string, token: string): Observable<any> {
    return this.httprequest.get<any>(`http://localhost:8001/api/user/pro/token?username=${username}`, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }
}
