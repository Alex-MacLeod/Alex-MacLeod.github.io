import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from './message';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class ContactService {

    private googleScript = 'https://script.google.com/macros/s/AKfycbzCVcDrHI_yn2LPjr45k7r-E5Sw6PKTVph8jmNJTz2FtHAGkNne/exec';

    constructor(
        private http: HttpClient
    ) { }

    sendMessage(message: Message): Promise<Response> {
        const encodedMessage: string = Object.keys(message)
            .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(message[k]))
            .join('&');
        return this.http.post<Response>(this.googleScript, encodedMessage, httpOptions).toPromise();
    }
}
