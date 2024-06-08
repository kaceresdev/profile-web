import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private emailService: EmailService) {}

  mailForm = new FormGroup({
    email: new FormControl<string>('', Validators.required),
    subject: new FormControl<string>('', Validators.required),
    comments: new FormControl<string>('', Validators.required),
  });

  onSubmit() {
    if (this.mailForm) {
      this.emailService
        .sendEmail(
          this.mailForm.get('subject')?.value!,
          this.mailForm.get('email')?.value!,
          this.mailForm.get('comments')?.value!
        )
        .subscribe({
          next: (resp) => console.log('Email sent ', resp),
          error: (err) => console.error('An error occurred :', err),
          complete: () => console.log('There are no more action happen.'),
        });
    }
  }
}
