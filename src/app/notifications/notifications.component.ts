import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NotifyService } from '../notify.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [NotifyService],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  @Input() addAlert: Observable<any>;
  public alerts: Array<IAlert> = [];
  alert: any;
  subscription: Subscription;

  constructor(private _notifyService: NotifyService) { }

  public pushAlert(alert: IAlert) {
    this.alerts.push(alert);
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  ngOnInit() {
    this._notifyService.notification$.subscribe(alert => {
      this.alert = alert;
      this.pushAlert(this.alert);
    });
    this._notifyService.update('Notifs Work!', 'success');
  }

  ngOnDestroy() {
    this._notifyService.notification$.unsubscribe();
  }

}

export interface IAlert {
  type: string;
  message: string;
}
