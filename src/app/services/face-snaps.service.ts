import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FaceSnapsService {
  constructor(private httpClient: HttpClient) {}

  getNextId(): number {
    const nextId = this.faceSnaps[this.faceSnaps.length - 1].id + 1;
    console.log(`Next id is:${nextId}`);
    return nextId;
  }

  faceSnaps: FaceSnap[] = [];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps/');
    // return this.faceSnaps;
  }

  snapFaceSnapById(id: number): Observable<FaceSnap> {
    return this.getFaceSnapById(id).pipe(
      map((faceSnap) => ({
        ...faceSnap,
        snaps:
          faceSnap.snaps +
          (faceSnap.snaps > 0 ? faceSnap.snaps-- : faceSnap.snaps++),
      })),
      switchMap((updatedFaceSnap) =>
        this.httpClient.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${id}`,
          updatedFaceSnap
        )
      )
    );
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.httpClient.get<FaceSnap>(
      `http://localhost:3000/facesnaps/${faceSnapId}`
    );
  }

  addFaceSnap(facesnap: FaceSnap) {
    this.faceSnaps = this.faceSnaps.concat(facesnap);
  }
}
