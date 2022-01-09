import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UiModule } from '@lunch-and-learn/ui';
import { UsersStateModule } from '@lunch-and-learn/users';
import { AdminService } from './admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UiModule,
    UsersStateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AdminService],
})
export class AdminModule {}
