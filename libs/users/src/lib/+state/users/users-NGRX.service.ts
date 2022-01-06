import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersEntity } from './users.models';

@Injectable()
export class UsersNGRXService {
  private baseUrl = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersEntity[]> {
    return this.http.get<UsersEntity[]>(this.baseUrl);
  }
}
