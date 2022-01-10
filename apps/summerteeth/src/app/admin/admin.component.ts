import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ILastName, IUserPageRequest } from '@lunch-and-learn/models';
import * as usersState from '@lunch-and-learn/users';
import { getAllUsers, loadUsersPage } from '@lunch-and-learn/users';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { AdminService } from './admin.service';

@Component({
  selector: 'lunch-and-learn-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  users$ = this.store.select(getAllUsers);
  lastNameControl = new FormControl('');
  lastNames$ = this.lastNameControl.valueChanges.pipe(
    startWith(''),
    debounceTime(750),
    distinctUntilChanged(),
    tap((name) => {
      if (name && name.lastName) {
        this.requestUsers(name.lastName);
      } else {
        this.requestUsers(name);
      }
    }),
    map((value) => (typeof value === 'string' ? value : value.name)),
    switchMap((name) => this.adminService.getLastNames(name))
  );

  constructor(
    private store: Store<usersState.State>,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.requestUsers('');
  }

  requestUsers(lastName: string) {
    const request: IUserPageRequest = {
      pageSize: 10,
      page: 0,
      lastName,
    };
    this.store.dispatch(loadUsersPage({ request }));
  }

  displayFn(name: ILastName): string {
    return name && name.lastName ? name.lastName : '';
  }
}
