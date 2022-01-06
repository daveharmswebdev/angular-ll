import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@lunch-and-learn/models';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface ICachedUsers {
  modifiedAt: Date;
  users: IUser[];
}

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:8080/api/v1/users';

  users$ = this.http.get<IUser[]>(this.baseUrl);

  private usersSubject = new BehaviorSubject<ICachedUsers | null>(null);
  userSubject$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl);
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

  private fiveMinutesOld(modifiedAt: Date | undefined): boolean {
    if (modifiedAt === undefined) {
      return false;
    }
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    return modifiedAt < fiveMinutesAgo;
  }
}
