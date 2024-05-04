import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailNotificationsComponent } from './pages/mail-notifications/mail-notifications.component';

const routes: Routes = [
  {
    path: 'mail_notifications',
    component: MailNotificationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
