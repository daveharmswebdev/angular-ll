import { Component, OnInit } from '@angular/core';
import * as fromUsersState from '@lunch-and-learn/users';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lunch-and-learn-ngrx-way',
  templateUrl: './ngrx-way.component.html',
  styleUrls: ['./ngrx-way.component.scss'],
})
export class NgrxWayComponent implements OnInit {
  users$ = this.store.select(fromUsersState.getAllUsers);

  constructor(private store: Store<fromUsersState.State>) {}

  ngOnInit(): void {
    this.store.dispatch(fromUsersState.loadUsers());
  }
}
