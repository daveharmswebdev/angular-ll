/* eslint-disable @angular-eslint/component-selector */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IUser } from '@lunch-and-learn/models';

@Component({
  selector: 'user-item-view',
  templateUrl: './user-item-view.component.html',
  styleUrls: ['./user-item-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemViewComponent {
  @Input() user!: IUser;
}
