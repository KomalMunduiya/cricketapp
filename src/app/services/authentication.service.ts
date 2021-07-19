import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAuth } from '../models/userAuth';

@Injectable({
  providedIn: 'root'
})
// service to implement the User authentication Backend Microservice and its api's
export class AuthenticationService {

  url :string;
  constructor(private httpClient : HttpClient) {
    this.url = 'http://localhost:8080/login';
  }
  authenticationLogin(loginUser : any){
    return this.httpClient.post(this.url,loginUser,{observe:"response",responseType:'text'}).pipe(
     map(
       userData => {
         return userData;
       }));
    
  }
 
   // Method to set bearer token into Session Storage
   setBearerToken(token: string) {
     sessionStorage.setItem('token', token);
   }
 
   // Method to get the bearer token from the Session Storage
   getBearerToken() {
     return sessionStorage.getItem('token');
   }
 
 
  
  isAuthenticatedUser(token :  string){
    console.log("is authenticated  is working");
    
    return this.httpClient.post(`${this.url}/isAuthenticated`,{
      headers : new HttpHeaders().set('authorization',token)
    })
  }
}
