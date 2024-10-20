import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginMoldel } from './shared/model/loginModel';
import { LoginService } from './shared/services/login.service';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CommonModule } from '@angular/common';


@NgModule({ declarations: [ SignupComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, CommonModule, FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule, HttpClientModule],
    providers: [LoginMoldel, LoginService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
