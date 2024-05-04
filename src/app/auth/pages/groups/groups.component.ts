import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Group } from '../../models/group.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { GroupService } from '../../services/group.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, debounceTime, of } from 'rxjs';
import { NewGroupComponent } from './new-group/new-group.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {
  public groupFilterForm: FormGroup = this.fb.group({
    filter: [],
  });
  public displayedColumns = [
    'id',
    'name',
    'alias',
    'actions',
  ];
  public groups!: MatTableDataSource<Group>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private readonly groupService: GroupService,
    private readonly fb: FormBuilder,
    private dialog: MatDialog,
    private snack: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.refreshTable();
    this.onUpdateFilter();
  }

  refreshTable() {
    this.groupService.getAll().subscribe(groups => {
      this.groups = new MatTableDataSource(groups);
      this.groups.sort = this.sort;
      this.groups.paginator = this.paginator;
    });
  }

  onResetFilter() {
    this.groupFilterForm.patchValue({
      filter: '',
    });
  }

  onUpdateFilter() {
    this.groupFilterForm.get('filter')?.valueChanges
      .pipe(
        debounceTime(250),
      ).subscribe(filter => {
        this.groups.filter = filter;
      });
  }

  onNew() {
    const newDialog = this.dialog.open(NewGroupComponent);

    newDialog.afterClosed().subscribe(group => {
       if (group !== null) {
         this.refreshTable();
       }
     });
  }

  onDelete(group: Group) {
    // const deleteDialog = this.dialog.open(
    //   DeleteGroupComponent,
    //   { data: group },
    // );

    // deleteDialog.afterClosed().subscribe(res => {
    //   if (res === true) {
    //     this.groupService.delete(group).pipe(
    //       catchError((res) => {
    //         this.snack.open(
    //           `Error deleting group '${group.name}': ${res.error.detail}`,
    //           'Dismiss'
    //         );
    //         return of();
    //       })
    //     ).subscribe(_ => {
    //       this.refreshTable();
    //     });
    //   }
    // });
  }

  onUpdate(group: Group) {
  //   const updateDialog = this.dialog.open(
  //     UpdateGroupComponent,
  //     {data: group},
  //   );

  //   updateDialog.afterClosed().subscribe(group => {
  //     if (role !== null) {
  //       this.groupService.update(group)
  //         .pipe(
  //           catchError((res) => {
  //             this.snack.open(`Error updating group '${group.name}': ${res.error.detail}`, 'Dismiss');
  //             return of();
  //           }),
  //         ).subscribe(group => {
  //           this.snack.open(`Group ${group.name} updated`, 'Ok', { duration: 2000 });
  //           this.refreshTable();
  //         });
  //     }
  //   });
  }
}
