import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss',
})
export class NewFaceSnapComponent implements OnInit {
  form!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private service: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.form = this.formBuilder.group(
      {
        title: [null, [Validators.required]],
        description: [null, [Validators.required]],
        imageUrl: [
          null,
          [Validators.required, Validators.pattern(this.urlRegex)],
        ],
        location: [null],
      },
      { updateOn: 'blur' }
    );

    this.faceSnapPreview$ = this.form.valueChanges.pipe(
      map((values) => ({
        ...values,
        createdDate: new Date(),
        snaps: 0,
        id: 0,
      }))
    );
  }

  onSubmitForm() {
    // Validators.
    console.log('titi  fff');
    console.log(this.form.value);
    this.service.addFaceSnap({
      title: this.form.value['title'],
      createdDate: new Date(),
      id: this.service.getNextId(),
      snaps: 0,
      imageUrl: this.form.value['imageUrl'],
      description: this.form.value['description'],
    });
    this.router.navigateByUrl('facesnaps');
  }
}