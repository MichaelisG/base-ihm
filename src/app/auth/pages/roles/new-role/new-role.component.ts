import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RoleService } from '../../../services/role.service';
import { catchError, of } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrl: './new-role.component.css'
})
export class NewRoleComponent {

  newRoleForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    alias: [],
  });
  errorMessage?: string;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<NewRoleComponent>,
    private roleService: RoleService,
  ) {}

  onCancel() {
    this.dialogRef.close(null);
  }

  onCreate() {
    this.roleService.new(this.newRoleForm.value).pipe(
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
