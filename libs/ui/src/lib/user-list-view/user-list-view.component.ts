/* eslint-disable @angular-eslint/component-selector */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IUser } from '@lunch-and-learn/models';

@Component({
  selector: 'user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListViewComponent {
  @Input() users!: IUser[];
}
