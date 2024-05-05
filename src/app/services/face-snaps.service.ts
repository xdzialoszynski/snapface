import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  snapFaceSnapById(id: number): void {
    const faceSnap = this.faceSnaps.at(id - 1);
    if (faceSnap) {
      if (faceSnap.snaps > 0) {
        faceSnap.snaps--;
      } else {
        faceSnap.snaps++;
      }
    } else {
      throw new Error('FaceSnap not found');
    }
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
