import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  mailForm = new FormGroup({
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.warn(this.mailForm.value);
  }
}
