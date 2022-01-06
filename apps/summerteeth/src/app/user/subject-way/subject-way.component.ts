import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'lunch-and-learn-subject-way',
  templateUrl: './subject-way.component.html',
  styleUrls: ['./subject-way.component.scss'],
})
export class SubjectWayComponent {
  usersSubject$ = this.userService.fetchusers();

  constructor(private userService: UserService) {}
}
