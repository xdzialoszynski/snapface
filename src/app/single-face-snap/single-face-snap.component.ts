import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  constructor(
    private faceSnapsService: FaceSnapsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const faceSnapId = +this.activatedRoute.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  faceSnap!: FaceSnap;

  onAddSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
    // if (this.faceSnap.snaps > 0) {
    //   this.faceSnap.snaps--;
    // } else {
    //   this.faceSnap.snaps++;
    // }
  }
}