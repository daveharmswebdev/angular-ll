import { Component } from '@angular/core';
import { IUser } from '@lunch-and-learn/models';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'lunch-and-learn-right-way',
  templateUrl: './right-way.component.html',
  styleUrls: ['./right-way.component.scss'],
})
export class RightWayComponent {
  users$: Observable<IUser[]> = this.userService.getUsers();

  constructor(private userService: UserService) {}
}
