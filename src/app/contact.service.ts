import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
 
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
    
    sendMessage(message: Message): Promise<Response> {
        let encoded = Object.keys(message).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(message[k]);
            }).join("&");
        return this.http.post<Response>(this.googleScript, encoded, httpOptions).toPromise()
    }
}