import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { AdminScore } from '../admin-score';
import { CricketScore } from '../cricket-score';

@Injectable({
  providedIn: 'root'
})
// service to access the methods of cric api (www.cricapi.com)
export class CricapiService {

  movieRestUrl='http://localhost:8000/score';
  movieRestUrl1='http://localhost:8000/score2';
  movieRestUrl2='http://localhost:8000/scorebyteam';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json' }) 
 };
  // dependency injection of HttpClient service
  constructor(private http: HttpClient) { }
  getMovieEntries() : Observable<AdminScore[]> {
    return this.http.get<AdminScore[]>(this.movieRestUrl, this.httpOptions)
    .pipe(retry(3),catchError(this.httpErrorHandler));
 }
 addMovieEntry(movieEntry: CricketScore): Observable<CricketScore> {
  return this.http.post<CricketScore>(this.movieRestUrl, movieEntry, this.httpOptions)
  .pipe(
     retry(3),
     catchError(this.httpErrorHandler)
  );
}
//---------------Adding and Getting Scores-----------
addScores(scoreEntry: CricketScore): Observable<CricketScore> {
  return this.http.post<CricketScore>(this.movieRestUrl2, scoreEntry, this.httpOptions)
  .pipe(
     retry(3),
     catchError(this.httpErrorHandler)
  );
}
getScores() : Observable<AdminScore[]> {
  return this.http.get<AdminScore[]>(this.movieRestUrl2, this.httpOptions)
  .pipe(retry(3),catchError(this.httpErrorHandler));
}
//-------------------------------
getMovieEntries1() : Observable<AdminScore[]> {
  return this.http.get<AdminScore[]>(this.movieRestUrl1, this.httpOptions)
  .pipe(retry(3),catchError(this.httpErrorHandler));
}
addMovieEntry1(movieEntry: CricketScore): Observable<CricketScore> {
return this.http.post<CricketScore>(this.movieRestUrl1, movieEntry, this.httpOptions)
.pipe(
   retry(3),
   catchError(this.httpErrorHandler)
);
}

 private httpErrorHandler (error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
     console.error("A client side error occurs. The error message is " + error.message);
  } else {
     console.error(
        "An error happened in server. The HTTP status code is "  + error.status + " and the error returned is " + error.message);
  }
   return throwError("Error occurred. Pleas try again");
}
  // generated Api key from cricapi
  apikey: string = "dLGeON2q1aTVihU2hxeInpYKUNM2";

  // Get method to search players with the help of Player Name
  searchPlayer(name: string): Observable<any> {
    return this.http.get(`https://cricapi.com/api/playerFinder?apikey=${this.apikey}`, {
      params: new HttpParams().set("name", name)
    });
  }
  getUpcomingMatches(): Observable<any> {
    return this.http.get('http://cricapi.com/api/matches?apikey=ZpUlMqdgvKOMkSrrvl5Jy306roJ2');
  }

  // Get method to get the statistics of a particular player with the help of his pid
  statsPlayer(pid: number): Observable<any> {
    return this.http.get(`https://cricapi.com/api/playerStats?apikey=${this.apikey}`, {
      params: new HttpParams().set("pid", pid.toString())
    })
  }
  // getUpcomingMatches(): Observable<any> {
  //   return this.http.get('http://cricapi.com/api/matches?apikey=ZpUlMqdgvKOMkSrrvl5Jy306roJ2');
  // }
  // Get the schedule of upcoming matches
  matchcalendar(): Observable<any> {
    return this.http.get<any>(`https://cricapi.com/api/matches?apikey=${this.apikey}`)
  }
  
  getMatchScore(matchId): Observable<any> {
    return this.http.get('http://cricapi.com/api/matches?apikey=ZpUlMqdgvKOMkSrrvl5Jy306roJ2'+'&unique_id=' + matchId);
  }
}

// }https://cricapi.com/api/cricketScore?apikey=3yrLecH3lGMZdiyBhlhLjXMzPMA2&unique_id=1034809
