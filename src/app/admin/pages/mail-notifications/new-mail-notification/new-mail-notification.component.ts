import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MailNotificationService } from '../../../services/mail-notification.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-new-mail-notification',
  templateUrl: './new-mail-notification.component.html',
  styleUrl: './new-mail-notification.component.css'
})
export class NewMailNotificationComponent {
  newMailNotificationForm: FormGroup = this.fb.group({
    code: ['', Validators.required],
    mailTo: ['', Validators.required],
    mailCc: [],
    subject: ['', Validators.required],
    text: [],
    html: []
  });
  errorMessage?: string;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<NewMailNotificationComponent>,
    private mailNotificationService: MailNotificationService,
  ) {}

  onCancel() {
    this.dialogRef.close(null);
  }

  onCreate() {
    this.mailNotificationService.new(this.newMailNotificationForm.value).pipe(
      catchError(res => {
        if (res.status === 422) {
          console.log('validation error:', res.error.detail);
          this.errorMessage = res.error.detail;
        }
        return of();
      }),
    ).subscribe(res => this.dialogRef.close(res));
  }
}
