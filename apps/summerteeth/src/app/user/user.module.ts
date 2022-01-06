import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { WrongWayComponent } from './wrong-way/wrong-way.component';
import { UiModule } from '@lunch-and-learn/ui';
import { RightWayComponent } from './right-way/right-way.component';
import { ObservableWayComponent } from './observable-way/observable-way.component';
import { SubjectWayComponent } from './subject-way/subject-way.component';
import { UsersStateModule } from '@lunch-and-learn/users';
import { NgrxWayComponent } from './ngrx-way/ngrx-way.component';

@NgModule({
  declarations: [
    UserComponent,
    WrongWayComponent,
    RightWayComponent,
    ObservableWayComponent,
    SubjectWayComponent,
    NgrxWayComponent,
  ],
  imports: [CommonModule, UserRoutingModule, UiModule, UsersStateModule],
  providers: [UserService],
})
export class UserModule {}
