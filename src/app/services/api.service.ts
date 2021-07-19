import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class ApiService {
addMovieEntry(arg0: any) {
  throw new Error('Method not implemented.');
}
baseUrl = 'http://localhost:4000/';
constructor(private _http: HttpClient) {
}
getTypeRequest(url) {
return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
return res;
}));
}

postTypeRequest(url, payload) {
return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
return res;
}));
}
putTypeRequest(url, payload) {
return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
return res;
}));
}
searchforscores(team: string,url): Observable<any> {
  let params1=new HttpParams().set('team',team);
  return this._http.get(url,{params:params1});
  // return this._http.get(`http://localhost:4000/scorebyteam?`, {
  //   params: new HttpParams().set("team", team)
  
}
// get(url,id: any){
//     return this._http.get(`${this.baseUrl}${url}/${id}`).pipe(map(res=>{
//         return res;
//     }));
//   }
}
