import { Component } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  submitted = false;

  contactForm;

  constructor(private formBuilder: FormBuilder) {

    this.contactForm = this.formBuilder.group({

      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      message: [
        '',
        Validators.required
      ]

    });

  }

  submitForm() {

    if (this.contactForm.valid) {

      this.submitted = true;

      this.contactForm.reset();

    }

  }
}