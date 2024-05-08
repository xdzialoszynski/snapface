import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import * as pl from '@angular/common/locales/pl';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingpageComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
    registerLocaleData(pl.default);
  }
}
