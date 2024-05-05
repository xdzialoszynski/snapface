import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FaceSnapsService {
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

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap: any = this.faceSnaps.find(
      (element) => element.id == faceSnapId
    );
    if (faceSnap) {
      return faceSnap;
    }
    throw new Error('Method not implemented.');
  }

  addFaceSnap(facesnap: FaceSnap) {
    this.faceSnaps = this.faceSnaps.concat(facesnap);
  }

  constructor(private httpClient: HttpClient) {}
}
