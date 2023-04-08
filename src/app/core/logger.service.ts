import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    constructor() { }

    private getDate(): string {
        return (new Date()).toUTCString();
    }

    error(msg: string) {
        console.error(`Error:: ${this.getDate()} ${msg}`);
    }

    warn(msg: string) {
        console.warn(`Warning:: ${this.getDate()} ${msg}`);
    }

    log(msg: string) {
        console.log(`Info:: ${this.getDate()} ${msg}`);
    }
}
