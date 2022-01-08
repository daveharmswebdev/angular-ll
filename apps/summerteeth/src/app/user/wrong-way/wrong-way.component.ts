import { Component, OnInit } from '@angular/core';
import { IUser } from '@lunch-and-learn/models';
import { firstValueFrom, Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'lunch-and-learn-wrong-way',
  templateUrl: './wrong-way.component.html',
  styleUrls: ['./wrong-way.component.scss'],
})
export class WrongWayComponent implements OnInit {
  users: IUser[] = [];

  users$: Observable<IUser[]> = this.userService.getUsers();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.getUsers().subscribe((users) => (this.users = users));

    // even worse
    this.userService
      .getUsers()
      .toPromise()
      .then((users) => {
        if (users) {
          this.users = users;
        }
      });

    // firstValueFrom(this.userService.getUsers()).then(
    //   (users) => (this.users = users)
    // );
  }
}
