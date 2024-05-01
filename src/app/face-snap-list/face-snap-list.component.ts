import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Subject, filter, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  subject$!:Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {}
  ngOnDestroy(): void {
    this.subject$.next(true);
  }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    this.subject$ = new Subject();
    interval(1000).pipe(
      takeUntil(this.subject$),
      filter(value=> value.toLocaleString.length>3),
      tap(console.log)
    ).subscribe();
  }

}
