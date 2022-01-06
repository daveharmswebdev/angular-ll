import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'lunch-and-learn-observable-way',
  templateUrl: './observable-way.component.html',
  styleUrls: ['./observable-way.component.scss'],
})
export class ObservableWayComponent {
  users$ = this.userService.users$;

  constructor(private userService: UserService) {}
}
