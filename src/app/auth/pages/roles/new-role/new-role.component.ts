import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-new-role',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './new-role.component.html',
  styleUrl: './new-role.component.css'
})
export class NewRoleComponent {

  newRoleForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    alias: [],
  });

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<NewRoleComponent>
  ) {}

  onCancel() {
    this.dialogRef.close(null);
  }

  onCreate() {
    this.dialogRef.close(this.newRoleForm.value);
  }

}
