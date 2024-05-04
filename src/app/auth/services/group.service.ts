import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../models/group.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private baseUrl = 'http://localhost:8000/api/groups';

  constructor(
    private readonly http: HttpClient,
  ) { }

  getAll(): Observable<Group[]> {
    return this.http.get<Group[]>(this.baseUrl);
  }

  new(group: Partial<Group>) {
    return this.http.post<Group>(this.baseUrl, group);
  }

  delete(group: Group) {
    return this.http.delete<Group>(`${this.baseUrl}/${group.id}`);
  }

  update(group: Group) {
    return this.http.put<Group>(`${this.baseUrl}/${group.id}`, group);
  }  
}
