import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

@NgModule({
  declarations: [LandingpageComponent],
  imports: [CommonModule, FormsModule],
  exports: [LandingpageComponent],
})
export class LandingPageModule {}
