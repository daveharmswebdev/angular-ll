import { Component, OnInit } from '@angular/core';
import { IUser } from '@lunch-and-learn/models';
import * as fromUsersState from '@lunch-and-learn/users';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lunch-and-learn-thing-one',
  templateUrl: './thing-one.component.html',
  styleUrls: ['./thing-one.component.scss'],
})
export class ThingOneComponent implements OnInit {
  users!: IUser[];

  constructor(private store: Store<fromUsersState.State>) {}

  ngOnInit(): void {
    this.store.select(fromUsersState.getAllUsers).subscribe((users) => {
      console.log(
        '111111111111111----thing one is getting all users------1111111111111'
      );
      this.users = users;
    });
  }
}
