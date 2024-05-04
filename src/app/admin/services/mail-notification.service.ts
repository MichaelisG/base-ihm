import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MailNotification } from '../models/mail-notification.model';

@Injectable({
  providedIn: 'root'
})
export class MailNotificationService {
  private baseUrl = 'http://localhost:8000/api/mail_notifications';

  constructor(
    private readonly http: HttpClient,
  ) { }

  getAll(): Observable<MailNotification[]> {
    return this.http.get<MailNotification[]>(this.baseUrl);
  }

  new(mailNotification: Partial<MailNotification>) {
    return this.http.post<MailNotification>(this.baseUrl, mailNotification);
  }

  delete(mailNotification: MailNotification) {
    return this.http.delete<MailNotification>(`${this.baseUrl}/${mailNotification.id}`);
  }

  update(mailNotification: MailNotification) {
    return this.http.put<MailNotification>(`${this.baseUrl}/${mailNotification.id}`, mailNotification);
  }  
}
