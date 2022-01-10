import { IPage, IUserPageRequest } from '@lunch-and-learn/models';
import { createAction, props } from '@ngrx/store';
import { UsersEntity } from './users.models';

export const loadUsers = createAction('[Users Page] Init');

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: UsersEntity[] }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);

export const loadUsersPage = createAction(
  '[Users Page] load users page',
  props<{ request: IUserPageRequest }>()
);

export const loadUsersPageSuccess = createAction(
  '[Users/API] Load Users Page Success',
  props<{ usersPage: IPage<UsersEntity> }>()
);

export const loadUsersPageFailure = createAction(
  '[Users/API] Load Users Page Failure',
  props<{ error: any }>()
);
