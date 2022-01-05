import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { WrongWayComponent } from './wrong-way/wrong-way.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'wrong-way', component: WrongWayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
