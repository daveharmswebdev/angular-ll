import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxWayComponent } from './ngrx-way/ngrx-way.component';
import { ObservableWayComponent } from './observable-way/observable-way.component';
import { PageWayComponent } from './page-way/page-way.component';
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
  { path: 'ngrx-way', component: NgrxWayComponent },
  { path: 'page-way', component: PageWayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
