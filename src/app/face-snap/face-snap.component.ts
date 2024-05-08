import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../core/models/face-snap.model';
import { FaceSnapsService } from '../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}
  @Input() faceSnap!: FaceSnap;

  onAddSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
