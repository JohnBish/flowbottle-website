import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthService } from '../auth.service';

@Component({
  selector: '[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(private _authService: AuthService) { }

  loginAnonymous() {
    this._authService.anonymousLogin();
    this.user = this._authService.getUser();
  }

  logout() {
    this._authService.signOut();
    this.user = this._authService.getUser();
  }

  ngOnInit() {
  }

}
