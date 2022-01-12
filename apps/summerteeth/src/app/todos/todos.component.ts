import { Component, OnInit } from '@angular/core';
import { IUserPageRequest } from '@lunch-and-learn/models';
import * as fromUsersState from '@lunch-and-learn/users';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lunch-and-learn-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private store: Store<fromUsersState.State>) {}

  ngOnInit(): void {
    const request: IUserPageRequest = {
      page: 0,
      pageSize: 10,
      lastName: '',
    };
    this.store.dispatch(fromUsersState.loadUsersPage({ request }));
  }
}
