import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupService } from '../../../services/group.service';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Role } from '../../../models/role.model';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrl: './new-group.component.css'
})
export class NewGroupComponent {
  newGroupForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    alias: [],
    roles: [],
  });
  errorMessage?: string;

  // separatorKeysCodes: number[] = [ENTER, COMMA];
  // filteredRoles: Observable<Role[]>;
  // roles: Role[];
  // allRoles: Role[];

  @ViewChild('fruitInput') roleInput?: ElementRef<HTMLInputElement>;

  constructor(
    private readonly fb: FormBuilder,
    private dialogRef: MatDialogRef<NewGroupComponent>,
    private groupService: GroupService,
  ) {
  //   this.filteredRoles = this.newGroupForm.get('roles')!.valueChanges.pipe(
  //     startWith(null),
  //     map((role: Role | null) => 
  //       (role ? this._filter(role) : this.allRoles.slice())
  //     ),
  //   );
  }

  onCancel() {
    this.dialogRef.close(null);
  }

  onCreate() {
    this.groupService.new(this.newGroupForm.value).pipe(
      catchError(res => {
        if (res.status === 422) {
          console.log('validation error:', res.error.detail);
          this.errorMessage = res.error.detail;
        }
        return of();
      }),
    ).subscribe(res => this.dialogRef.close(res));
  }

  // private _filter(value: Role): Role[] {
  //   const filterValue = value.name;

  //   return this.allRoles.filter(role => role.toLowerCase().includes(filterValue));
  // }
}
