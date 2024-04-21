import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps! :number;
  imageUrl! :string;

  ngOnInit(): void {
    this.title = "Cesar";
    this.description = "mon samiaou";
    this.createdDate = new Date();
    this.snaps = 0;
    this.imageUrl="https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg?auto=compress&cs=tinysrgb&w=600";
  }

  onAddSnap() {
    
    if (this.snaps > 0) {
      this.snaps--;
    } else {
      this.snaps++;
    }
   
  }
}
