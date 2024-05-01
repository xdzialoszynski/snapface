import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  userEmail:string="toto";
  constructor(private router: Router) {}

  onGoToSnapFace(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form:NgForm):void{
    console.log(form.value);
  }
}
