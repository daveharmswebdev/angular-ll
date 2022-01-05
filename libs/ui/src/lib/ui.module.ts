import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunchAndLearnMaterialModule } from './LunchAndLearnMaterial.module';

@NgModule({
  imports: [CommonModule, LunchAndLearnMaterialModule],
  exports: [LunchAndLearnMaterialModule],
})
export class UiModule {}
