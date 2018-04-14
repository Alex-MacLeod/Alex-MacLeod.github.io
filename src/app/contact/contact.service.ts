import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from './message';

@Injectable()
export class ContactService {

    private googleScript = 'https://script.google.com/macros/s/AKfycbzCVcDrHI_yn2LPjr45k7r-E5Sw6PKTVph8jmNJTz2FtHAGkNne/exec';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };

    constructor(
        private http: HttpClient
    ) { }

    sendMessage(message: Message): Promise<Response> {
        if ( !!message.getHoneypot() ) {
            return new Promise((resolve, reject) => {
                reject('Honeypot field filled');
            });
        }
        const messageKeys: Array<string> = Object.keys(message);
        messageKeys.pop();
        const encodedMessage: string = messageKeys
            .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(message[k]))
            .join('&');
        return this.http.post<Response>(this.googleScript, encodedMessage, this.httpOptions).toPromise();
    }
}
