// import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
// import { Observable, throwError } from "rxjs";
// import { catchError, retry } from "rxjs/operators";

// export class Score1 {

// private movieRestUrl = 'http://localhost:8000/api/movie';
//   private httpOptions = { 
//     headers: new HttpHeaders( { 'Content-Type': 'application/json' }) 
//  };
//   constructor(private httpClient : HttpClient) { }

//   getMovieEntries() : Observable<> {
//     return this.httpClient.get<MovieManager[]>(this.movieRestUrl, this.httpOptions)
//     .pipe(retry(3),catchError(this.httpErrorHandler));
//  }
 
//  getMovieManager(id: number) : Observable<MovieManager> {
//     return this.httpClient.get<MovieManager>(this.movieRestUrl + "/" + id, this.httpOptions)
//     .pipe(retry(3),
//        catchError(this.httpErrorHandler)
//     );
//  }
//   private httpErrorHandler (error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//        console.error("A client side error occurs. The error message is " + error.message);
//     } else {
//        console.error(
//           "An error happened in server. The HTTP status code is "  + error.status + " and the error returned is " + error.message);
//     }
//      return throwError("Error occurred. Pleas try again");
//  }

//  addMovieEntry(movieEntry: MovieManager): Observable<MovieManager> {
//   return this.httpClient.post<MovieManager>(this.movieRestUrl, movieEntry, this.httpOptions)
//   .pipe(
//      retry(3),
//      catchError(this.httpErrorHandler)
//   );
// }
// }