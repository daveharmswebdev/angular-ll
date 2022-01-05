import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { WrongWayComponent } from './wrong-way/wrong-way.component';
import { UiModule } from '@lunch-and-learn/ui';

@NgModule({
  declarations: [UserComponent, WrongWayComponent],
  imports: [CommonModule, UserRoutingModule, UiModule],
  providers: [UserService],
})
export class UserModule {}
