import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Role } from '../../../models/role.model';

@Component({
  selector: 'app-update-role',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './update-role.component.html',
  styleUrl: './update-role.component.css'
})
export class UpdateRoleComponent {
  updateRoleForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    alias: [],
  });

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public role: Role,
  ) {
    this.updateRoleForm.patchValue(this.role);
  }

  onCancel() {
    this.dialogRef.close(null);
  }

  onUpdate() {
    this.dialogRef.close(this.updateRoleForm.value);
  }
}
