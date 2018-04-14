import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {wordlists} from './wordlists.service'

@Injectable()
export class HangmanService {

    // private wordListsUrl = 'api/wordlists';  // URL to web api

    constructor(
        private http: HttpClient
    ) { }

    getWordLists(): Array<any> {
        // return this.http.get<any[]>(this.wordListsUrl).toPromise();
        return wordlists;
    }

}
