import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  constructor(private faceSnapsService: FaceSnapsService) {}
  @Input() faceSnap!: FaceSnap;

  onAddSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
    // if (this.faceSnap.snaps > 0) {
    //   this.faceSnap.snaps--;
    // } else {
    //   this.faceSnap.snaps++;
    // }
  }
}
