import { Component, OnInit } from '@angular/core';
import { DialogService } from '@lunch-and-learn/dialog';
import { IDialogData } from '@lunch-and-learn/models';
import { Observable, switchMap } from 'rxjs';
import { TodosService } from './todos.service';

@Component({
  selector: 'lunch-and-learn-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
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
