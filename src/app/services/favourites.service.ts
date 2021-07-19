import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Favs } from '../models/fav';


@Injectable({
  providedIn: 'root'
})
// service to access the Favourites Microservice of backend and all the api's
export class FavouritesService {

  // dependency injection of http client
  constructor(private http: HttpClient) { }

  // Get method to get the favourites of a particular user by the help of its username
  getData(usern: String, token: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8002/api/fav?username=${usern}`, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

  // Post method to add a player to favourites
  addData(fav: Favs, token: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8002/api/fav`, fav, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

  

  // Delete method to remove all the players from the favourites of a particular user
  deleteData(usern: string, token: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8002/api/fav?username=${usern}`, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

  // method to delete a particular player from favourites by a particular user
  deleteDataUser(usern: string, pid: number, token: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8002/api/fav/id`, { "username": `${usern}`, "pid": `${pid}` }, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

}
