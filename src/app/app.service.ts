import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    constructor() { }

    timeoutPromise(promise: Promise<any>, timeoutLength: number): Promise<any> {
        const timeout = new Promise((resolve, reject) => {
            const wait = setTimeout(() => {
                clearTimeout(wait);
                reject('Timed out after ' + timeoutLength + 'ms.');
            }, timeoutLength);
        });
        return Promise.race([promise, timeout]);
    }

}
