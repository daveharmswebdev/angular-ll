import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDialogData } from '@lunch-and-learn/models';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  displayDialog(data: IDialogData) {
    return this.dialog.open(SimpleDialogComponent, {
      data,
      width: '75vw',
    });
  }
}
