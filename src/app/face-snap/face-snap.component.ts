import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
 @Input() faceSnap! :FaceSnap;
  
  
  onAddSnap() {
    if (this.faceSnap.snaps > 0) {
      this.faceSnap.snaps--;
    } else {
      this.faceSnap.snaps++;
    }
  }
}
