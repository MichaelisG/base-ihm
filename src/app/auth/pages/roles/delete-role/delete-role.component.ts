import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Role } from '../../../models/role.model';

@Component({
  selector: 'app-delete-role',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './delete-role.component.html',
  styleUrl: './delete-role.component.css'
})
export class DeleteRoleComponent {

  constructor(
     private dialogRef: MatDialogRef<DeleteRoleComponent>,
     @Inject(MAT_DIALOG_DATA) public data: Role,
  ) {}

  onCancel() {
    this.dialogRef.close(false);
  }

  onDelete() {
    this.dialogRef.close(true);
  }

}
