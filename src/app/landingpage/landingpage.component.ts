import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  constructor(private router: Router) {}

  onGoToSnapFace(): void {
    this.router.navigateByUrl('facesnaps');
  }
}
