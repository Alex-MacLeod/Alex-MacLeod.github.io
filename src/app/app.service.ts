import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    constructor() { }

    timeoutPromise(promise: Promise<any>, timeoutLength: number): Promise<any> {
        let timeout = new Promise((resolve, reject) => {
            let wait = setTimeout(() => {
                clearTimeout(wait);
                reject('Timed out in '+ timeoutLength + 'ms.');
            }, timeoutLength);
        });
        
        return Promise.race([promise, timeout]);
    }

}