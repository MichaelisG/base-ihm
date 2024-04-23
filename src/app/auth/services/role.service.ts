import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/role.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = 'http://localhost:8000/api/roles';

  constructor(
    private readonly http: HttpClient,
  ) { }

  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.baseUrl);
  }

  new(role: Partial<Role>) {
    return this.http.post<Role>(this.baseUrl, role);
  }

  delete(role: Role) {
    return this.http.delete<Role>(`${this.baseUrl}/${role.id}`);
  }
}
