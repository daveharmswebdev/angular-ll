import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import { UsersEntity } from './users.models';

export const USERS_FEATURE_KEY = 'users';

export interface State extends EntityState<UsersEntity> {
  selectedId?: string | 0; // which Users record has been selected
  loaded: boolean; // has the Users list been loaded
  error?: string | null; // last known error (if any)
  busy: boolean;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: State;
}

export const usersAdapter: EntityAdapter<UsersEntity> =
  createEntityAdapter<UsersEntity>();

export const initialState: State = usersAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  busy: false,
  page: 0,
  size: 0,
  totalElements: 0,
  totalPages: 0,
});

const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state) => ({
    ...state,
    loaded: false,
    busy: true,
    error: null,
  })),
  on(UsersActions.loadUsersSuccess, (state, { users }) =>
    usersAdapter.setAll(users, { ...state, loaded: true, busy: false })
  ),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    busy: false,
  })),
  on(UsersActions.loadUsersPage, (state) => ({
    ...state,
    loaded: false,
    busy: true,
    error: null,
  })),
  on(UsersActions.loadUsersPageSuccess, (state, { usersPage }) => {
    const { content, number, size, totalElements, totalPages } = usersPage;
    return usersAdapter.setAll(content, {
      ...state,
      loaded: true,
      busy: false,
      page: number,
      size,
      totalElements,
      totalPages,
    });
  }),
  on(UsersActions.loadUsersPageFailure, (state, { error }) => ({
    ...state,
    error,
    busy: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return usersReducer(state, action);
}
