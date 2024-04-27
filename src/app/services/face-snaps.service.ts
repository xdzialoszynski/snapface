import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({ providedIn: 'root' })
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      createdDate: new Date(),
      description: 'mon samiaou',
      imageUrl:
        'https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg?auto=compress&cs=tinysrgb&w=600',
      snaps: 7,
      title: 'Césari',
      location: "l'épanlerie",
    },
    {
      id: 2,
      createdDate: new Date(Date.parse('01 Jan 2021 00:00:00 GMT')),
      description: 'le sa du sa',
      imageUrl:
        'https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg?auto=compress&cs=tinysrgb&w=600',
      snaps: 0,
      title: 'Jules',
      location: 'En Auvergne',
    },
    {
      id: 3,
      createdDate: new Date(Date.parse('12 Oct 1973 00:00:00 GMT')),
      description: 'je suis le miaou du samiaou',
      imageUrl:
        'https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg?auto=compress&cs=tinysrgb&w=600',
      snaps: 0,
      title: 'Xavier',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
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
}
