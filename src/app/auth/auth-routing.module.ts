import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './pages/roles/roles.component';
import { GroupsComponent } from './pages/groups/groups.component';

const routes: Routes = [
  { 'path': '', component: RolesComponent },
  { 'path': 'groups', component: GroupsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
