import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
  providers: [
    httpInterceptorProviders,
    { provide: LOCALE_ID, useValue: 'pl-PL' },
  ],
})
export class CoreModule {}
