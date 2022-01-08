import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage, IUser } from '@lunch-and-learn/models';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

export interface ICachedUsers {
  modifiedAt: Date;
  users: IUser[];
}

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:8080/api/v2/users';

  users$ = this.http
    .get<IPage<IUser>>(this.baseUrl)
    .pipe(map((page) => page.content));

  private usersSubject = new BehaviorSubject<ICachedUsers | null>(null);
  userSubject$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http
      .get<IPage<IUser>>(this.baseUrl)
      .pipe(map((page) => page.content));
  }

  fetchusers(): Observable<ICachedUsers | null> {
    if (
      this.usersSubject.value === null ||
      this.fiveMinutesOld(this.usersSubject.value?.modifiedAt)
    ) {
      this.getUsers().subscribe((users) => {
        const modifiedAt = new Date();
        this.usersSubject.next({ modifiedAt, users });
        return of(this.usersSubject.value);
      });
    }
    return this.userSubject$;
  }

  getPageUsers(
    pageSize: number = 10,
    page: number = 0,
    lastName: string = ''
  ): Observable<IPage<IUser>> {
    const params = new HttpParams()
      .set('pageSize', pageSize.toString())
      .set('page', page.toString())
      .set('lastName', lastName);

    const url = `http://localhost:8080/api/v2/users?${params.toString()}`;

    return this.http.get<IPage<IUser>>(url);
  }

  private fiveMinutesOld(modifiedAt: Date | undefined): boolean {
    if (modifiedAt === undefined) {
      return false;
    }
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    return modifiedAt < fiveMinutesAgo;
  }
}
