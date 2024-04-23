import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { NewRoleComponent } from './new-role/new-role.component';
import { Role } from '../../models/role.model';
import { DeleteRoleComponent } from './delete-role/delete-role.component';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  public roleFilterForm: FormGroup = this.fb.group({
     filter: [],
  });
  public displayedColumns = [
    'id',
    'name',
    'alias',
    'actions',
  ];
  public roles!: MatTableDataSource<Role>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private readonly roleService: RoleService,
    private readonly fb: FormBuilder,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.refreshTable();
    this.onUpdateFilter();
  }

  refreshTable() {
    this.roleService.getAll().subscribe(roles => {
      this.roles = new MatTableDataSource(roles);
      this.roles.sort = this.sort;
      this.roles.paginator = this.paginator;
    });
  }

  onResetFilter() {
    this.roleFilterForm.patchValue({
      filter: '',
    });
  }

  onUpdateFilter() {
    this.roleFilterForm.get('filter')?.valueChanges
    .pipe(
      debounceTime(250),
    ).subscribe(filter => {
      this.roles.filter = filter;
    });
  }

  onNew() {
    const newDialog = this.dialog.open(NewRoleComponent);

    newDialog.afterClosed().subscribe(
      role => {
        if (role !== null) {
          this.roleService.new(role).subscribe(role => {
            this.refreshTable();
          });
        }
      } 
    );
  }

  onDelete(role: Role) {
    const deleteDialog = this.dialog.open(
      DeleteRoleComponent,
      {data: role},
    );

    deleteDialog.afterClosed().subscribe(res => {
      if (res === true) {
        this.roleService.delete(role).subscribe(_ => {
          this.refreshTable();
        });
      }
    });
  }

  onUpdate(role: Role) {
    
  }

}
