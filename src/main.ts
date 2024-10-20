import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { AboutComponent } from './app/about/about.component';
import { LoginComponent } from './app/login/login.component';
import { LoginMoldel } from './app/shared/model/loginModel';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];


  const firebaseConfig= {
    apiKey: "AIzaSyB6h95x8exfkFwnLbq0sIoeVk23wmGttEo",
    authDomain: "testproect-382c3.firebaseapp.com",
    databaseURL: "https://testproect-382c3-default-rtdb.firebaseio.com/",
    projectId: "testproect-382c3",
    storageBucket: "testproect-382c3.appspot.com",
    messagingSenderId: "143279276096",
    appId: "1:143279276096:web:50c1465f87478c9687dfa5",
    measurementId: "G-HL6L3RP6MC"
  }

bootstrapApplication(AppComponent, {
  providers: [ {provide: FIREBASE_OPTIONS, useValue: firebaseConfig},
    provideRouter(routes),
    LoginMoldel, // Provide routes using Angular's router
    importProvidersFrom([
      HttpClientModule,
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage())
    ]),
  ],
}).catch(err => console.error(err));

