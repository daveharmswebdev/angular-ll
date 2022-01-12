import { Component, OnInit } from '@angular/core';
import { DialogService } from '@lunch-and-learn/dialog';
import { Observable, switchMap } from 'rxjs';
import { TodosService } from '../todos.service';

@Component({
  selector: 'lunch-and-learn-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss'],
})
export class DialogExampleComponent {
  message = '';

  message$: Observable<string> = this.todosService
    .getDialogData()
    .pipe(
      switchMap((dialogData) =>
        this.dialogService.displayDialog(dialogData).afterClosed()
      )
    );

  constructor(
    private dialogService: DialogService,
    private todosService: TodosService
  ) {}

  // ngOnInit(): void {
  // this.showDialog();
  // }

  showDialog() {
    this.todosService.getDialogData().subscribe((data) => {
      this.dialogService
        .displayDialog(data)
        .afterClosed()
        .subscribe((message) => (this.message = message));
    });
  }
}
