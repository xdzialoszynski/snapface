import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnaps = [
      {
        createdDate: new Date(),
        description: 'mon samiaou',
        imageUrl:
          'https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg?auto=compress&cs=tinysrgb&w=600',
        snaps: 0,
        title: 'César',
        location: "l'épanlerie",
      },
      {
        createdDate: new Date(Date.parse('01 Jan 2021 00:00:00 GMT')),
        description: 'le sa du sa',
        imageUrl:
          'https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg?auto=compress&cs=tinysrgb&w=600',
        snaps: 0,
        title: 'Jules',
        location: 'En Auvergne',
      },
      {
        createdDate: new Date(Date.parse('12 Oct 1973 00:00:00 GMT')),
        description: 'je suis le miaou du samiaou',
        imageUrl:
          'https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg?auto=compress&cs=tinysrgb&w=600',
        snaps: 0,
        title: 'Xavier',
      },
    ];
  }
}
