import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '@lunch-and-learn/models';
import * as fromUsersState from '@lunch-and-learn/users';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lunch-and-learn-thing-two',
  templateUrl: './thing-two.component.html',
  styleUrls: ['./thing-two.component.scss'],
})
export class ThingTwoComponent implements OnInit, OnDestroy {
  users!: IUser[];
  private subscription = new Subscription();

  constructor(private store: Store<fromUsersState.State>) {}

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(fromUsersState.getAllUsers).subscribe((users) => {
        console.log(
          '22222222222---thing two is getting all users----222222222222222'
        );
        this.users = users;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
