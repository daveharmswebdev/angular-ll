import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPage, IUser, PageSize } from '@lunch-and-learn/models';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'lunch-and-learn-page-way',
  templateUrl: './page-way.component.html',
  styleUrls: ['./page-way.component.scss'],
})
export class PageWayComponent {
  form: FormGroup = this.fb.group({
    lastName: [''],
    pageSize: 15,
    page: 0,
  });
  pageOptions = [0];

  users$ = this.form.valueChanges.pipe(
    startWith({
      pageSize: this.form.get('pageSize')?.value,
      page: this.form.get('page')?.value,
      lastName: this.form.get('lastName')?.value,
    }),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(({ pageSize, page, lastName }) => {
      return this.userService.getPageUsers(pageSize, page, lastName).pipe(
        tap(({ totalPages }) => {
          this.pageOptions = [...Array(totalPages).keys()];
        }),
        map((page) => page.content)
      );
    })
  );

  get pageSizeValues() {
    return [10, 15, 20];
  }

  constructor(private userService: UserService, private fb: FormBuilder) {}
}
