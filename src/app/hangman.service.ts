import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HangmanService {

    private wordListsUrl: string = "api/wordlists";  // URL to web api

    constructor(
        private http: HttpClient
    ) { }

    loadWordLists(): Observable<any[]> {
        return this.http.get<any[]>(this.wordListsUrl);
    }

}
