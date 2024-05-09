import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landing-page/components/landingpage/landingpage.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  {
    path: 'facesnaps',
    loadChildren: () =>
      import('./face-snaps/face-snaps.module').then((m) => m.FaceSnapsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
