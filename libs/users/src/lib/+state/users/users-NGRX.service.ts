import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage, IUser, IUserPageRequest } from '@lunch-and-learn/models';
import { map, Observable } from 'rxjs';
import { UsersEntity } from './users.models';

@Injectable()
export class UsersNGRXService {
  private baseUrl = 'http://localhost:8080/api/v2/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UsersEntity[]> {
    return this.http
      .get<IPage<UsersEntity>>(this.baseUrl)
      .pipe(map((page) => page.content));
  }

  getPageUsers(request: IUserPageRequest): Observable<IPage<IUser>> {
    const params = new HttpParams()
      .set('pageSize', request.pageSize.toString())
      .set('page', request.page.toString())
      .set('lastName', request.lastName);

    const url = `http://localhost:8080/api/v2/users?${params.toString()}`;

    return this.http.get<IPage<IUser>>(url);
  }
}
