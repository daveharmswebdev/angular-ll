import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { DialogService } from './dialog.service';

@NgModule({
  imports: [CommonModule],
  declarations: [SimpleDialogComponent],
  exports: [SimpleDialogComponent],
  providers: [DialogService],
})
export class DialogModule {}
