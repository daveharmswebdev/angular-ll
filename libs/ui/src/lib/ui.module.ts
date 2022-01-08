import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunchAndLearnMaterialModule } from './LunchAndLearnMaterial.module';
import { UserItemViewComponent } from './user-item-view/user-item-view.component';
import { UserListViewComponent } from './user-list-view/user-list-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, LunchAndLearnMaterialModule, FlexLayoutModule],
  exports: [
    LunchAndLearnMaterialModule,
    UserItemViewComponent,
    UserListViewComponent,
  ],
  declarations: [UserItemViewComponent, UserListViewComponent],
})
export class UiModule {}
