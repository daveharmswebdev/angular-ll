import { Injectable } from '@angular/core';
import { IDialogData } from '@lunch-and-learn/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  getDialogData(): Observable<IDialogData> {
    const data: IDialogData = {
      message: 'Hello Forty AU!',
      value: 40,
    };
    return of(data);
  }
}
