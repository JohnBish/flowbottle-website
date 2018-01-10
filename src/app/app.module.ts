import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { NotifyService } from './notify.service';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyDdaK_m07JuxPlMJ-sOjnboO7yStiboOiM",
  authDomain: "water-app-launch.firebaseapp.com",
  databaseURL: "https://water-app-launch.firebaseio.com",
  projectId: "water-app-launch",
  storageBucket: "water-app-launch.appspot.com",
  messagingSenderId: "886809362729"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    NotificationsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
