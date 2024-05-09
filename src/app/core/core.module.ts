import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { httpInterceptorProviders } from './interceptors';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent],
  providers: [
    httpInterceptorProviders,
    { provide: LOCALE_ID, useValue: 'pl-PL' },
  ],
})
export class CoreModule {}
