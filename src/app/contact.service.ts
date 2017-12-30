import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
 
import { Message } from './message';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

@Injectable()
export class ContactService {

    constructor(
        private http: HttpClient
    ) { }

    private googleScript = "https://script.google.com/macros/s/AKfycbzCVcDrHI_yn2LPjr45k7r-E5Sw6PKTVph8jmNJTz2FtHAGkNne/exec";
    
    sendMessage(message: Message): Observable<string> {
        let encoded = Object.keys(message).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(message[k]);
            }).join("&");
        return this.http.post<string>(this.googleScript, encoded, httpOptions)
            .pipe(
                tap(() => console.log(`sent: ${encoded}`)),
                catchError(this.handleError<string>())
            )
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          // TODO: send the error to remote logging infrastructure
          console.error(`Operation failed: ${error.message}`);
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
    }
}