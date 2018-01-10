import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';

interface IAlert {
    type: string;
    message: string;
}

@Injectable()
export class NotifyService {
    notification$ = new Subject();

    update(m: string, t: string) {
        this.pushAlert({
            type: t,
            message: m,
        });
    }

    pushAlert(alert: IAlert) {
        this.notification$.next(alert);
    }

}