import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar.component';
import { LogoComponent } from './logo.component';
import { LoginComponent } from './login.component';

export const ROUTES: Routes = [];

@NgModule({
    declarations: [
        NavbarComponent,
        LogoComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        NavbarComponent,
        LogoComponent,
        LoginComponent
    ]
})
export class SharedModule { }