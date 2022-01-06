import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableWayComponent } from './observable-way/observable-way.component';
import { RightWayComponent } from './right-way/right-way.component';
import { SubjectWayComponent } from './subject-way/subject-way.component';
import { UserComponent } from './user.component';
import { WrongWayComponent } from './wrong-way/wrong-way.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'wrong-way', component: WrongWayComponent },
  { path: 'right-way', component: RightWayComponent },
  { path: 'obs-way', component: ObservableWayComponent },
  { path: 'subject-way', component: SubjectWayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
