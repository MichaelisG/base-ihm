import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MailNotification } from '../../models/mail-notification.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MailNotificationService } from '../../services/mail-notification.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime } from 'rxjs';
import { NewMailNotificationComponent } from './new-mail-notification/new-mail-notification.component';

@Component({
  selector: 'app-mail-notifications',
  templateUrl: './mail-notifications.component.html',
  styleUrl: './mail-notifications.component.css'
})
export class MailNotificationsComponent implements OnInit {

  public mailNotificationFilterForm: FormGroup = this.fb.group({
    filter: [],
  });
  public displayedColumns = [
    'id',
    'code',
    'subject',
    'actions',
  ];
  public mailNotifications!: MatTableDataSource<MailNotification>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private readonly mailNotificationService: MailNotificationService,
    private readonly fb: FormBuilder,
    private dialog: MatDialog,
    private snack: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.refreshTable();
    this.onUpdateFilter();
  }

  refreshTable() {
    this.mailNotificationService.getAll().subscribe(mailNotifications => {
      this.mailNotifications = new MatTableDataSource(mailNotifications);
      this.mailNotifications.sort = this.sort;
      this.mailNotifications.paginator = this.paginator;
    });
  }

  onResetFilter() {
    this.mailNotificationFilterForm.patchValue({
      filter: '',
    });
  }

  onUpdateFilter() {
    this.mailNotificationFilterForm.get('filter')?.valueChanges
      .pipe(
        debounceTime(250),
      ).subscribe(filter => {
        this.mailNotifications.filter = filter;
      });
  }

  onNew() {
    const newDialog = this.dialog.open(NewMailNotificationComponent);

    newDialog.afterClosed().subscribe(
      mailNotification => {
        if (mailNotification !== null) {
          this.refreshTable();
        }
      }
    );
  }

  onDelete(mailNotification: MailNotification) {
  //   const deleteDialog = this.dialog.open(
  //     DeleteRoleComponent,
  //     { data: role },
  //   );

  //   deleteDialog.afterClosed().subscribe(res => {
  //     if (res === true) {
  //       this.roleService.delete(role).pipe(
  //         catchError((res) => {
  //           this.snack.open(
  //             `Error deleting role '${role.name}': ${res.error.detail}`,
  //             'Dismiss'
  //           );
  //           return of();
  //         })
  //       ).subscribe(_ => {
  //         this.refreshTable();
  //       });
  //     }
  //   });
  }

  onUpdate(mailNotification: MailNotification) {
  //   const updateDialog = this.dialog.open(
  //     UpdateRoleComponent,
  //     {data: role},
  //   );

  //   updateDialog.afterClosed().subscribe(
  //     role => {
  //       if (role !== null) {
  //         this.roleService.update(role)
  //           .pipe(
  //             catchError((res) => {
  //               this.snack.open(`Error updating role '${role.name}': ${res.error.detail}`, 'Dismiss');
  //               return of();
  //             }),
  //           ).subscribe(role => {
  //             this.snack.open(`Role ${role.name} updated`, 'Ok', { duration: 2000 });
  //             this.refreshTable();
  //           });
  //       }
  //     }
  //   );
  }

}
