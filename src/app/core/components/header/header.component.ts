import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  snapface!: string;

  constructor(private router:Router) {
    this.snapface = 'snapface';
  }

  onAddNewFaceSnap(){
    this.router.navigateByUrl('/create');
  }
}
