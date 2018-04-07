import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HangmanService {

    private wordListsUrl: string = "api/wordlists";  // URL to web api

    constructor(
        private http: HttpClient
    ) { }

    getWordLists(): Promise<any[]> {
        return this.http.get<any[]>(this.wordListsUrl).toPromise();
    }

}
