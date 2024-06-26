import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { GroupsComponent } from './pages/groups/groups.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DeleteGroupComponent } from './pages/groups/delete-group/delete-group.component';
import { UpdateGroupComponent } from './pages/groups/update-group/update-group.component';
import { NewGroupComponent } from './pages/groups/new-group/new-group.component';
import { RolesComponent } from './pages/roles/roles.component';
import { NewRoleComponent } from './pages/roles/new-role/new-role.component';
import { DeleteRoleComponent } from './pages/roles/delete-role/delete-role.component';
import { UpdateRoleComponent } from './pages/roles/update-role/update-role.component';

@NgModule({
  declarations: [
    RolesComponent,
    NewRoleComponent,
    DeleteRoleComponent,
    UpdateRoleComponent,
    GroupsComponent,
    DeleteGroupComponent,
    UpdateGroupComponent,
    NewGroupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
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
    MatSnackBarModule,
    MatChipsModule,
    MatAutocompleteModule,
    NgIf,
    NgFor,
  ],
  providers: []
})
export class AuthModule { }
