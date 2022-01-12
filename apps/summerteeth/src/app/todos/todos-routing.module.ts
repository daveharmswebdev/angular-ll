import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { ThingOneComponent } from './thing-one/thing-one.component';
import { ThingTwoComponent } from './thing-two/thing-two.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      { path: 'dialog', component: DialogExampleComponent },
      { path: 'one', component: ThingOneComponent },
      { path: 'two', component: ThingTwoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
