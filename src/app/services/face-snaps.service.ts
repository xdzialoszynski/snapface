import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

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
        snaps: faceSnap.snaps + (faceSnap.snaps > 0 ? -1 : 1),
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

  addNewFaceSnap(faceSnap: FaceSnap): Observable<FaceSnap> {
    return this.httpClient
      .get<FaceSnap[]>('http://localhost:3000/facesnaps')
      .pipe(
        // map((value) => value[value.length - 1].id + 1),
        // tap(console.log)
        map((faceSnaps) => [...faceSnaps].sort((a, b) => a.id - b.id)),
        map((sortedFaceSnaps) => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
        tap(console.log),
        switchMap((lastFaceSnap) => {
          faceSnap.id = lastFaceSnap.id + 1;
          console.log(faceSnap);
          return this.httpClient.post<FaceSnap>(
            'http://localhost:3000/facesnaps/',
            faceSnap
          );
        })
      );
  }

  testArray(): void {
    var num: number[];
    num.fil;
  }
}
