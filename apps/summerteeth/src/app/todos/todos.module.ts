import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { UiModule } from '@lunch-and-learn/ui';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { ThingOneComponent } from './thing-one/thing-one.component';
import { ThingTwoComponent } from './thing-two/thing-two.component';
import { UsersStateModule } from '@lunch-and-learn/users';

@NgModule({
  declarations: [
    TodosComponent,
    DialogExampleComponent,
    ThingOneComponent,
    ThingTwoComponent,
  ],
  imports: [CommonModule, TodosRoutingModule, UiModule, UsersStateModule],
})
export class TodosModule {}
