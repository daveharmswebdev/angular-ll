import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UsersNGRXService } from './users-NGRX.service';

import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      mergeMap(() =>
        this.usersNGRXservice.getUsers().pipe(
          map((users) => UsersActions.loadUsersSuccess({ users })),
          catchError((error) => of(UsersActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  loadUsersPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsersPage),
      mergeMap(({ request }) =>
        this.usersNGRXservice.getPageUsers(request).pipe(
          map((usersPage) => UsersActions.loadUsersPageSuccess({ usersPage })),
          catchError((error) =>
            of(UsersActions.loadUsersPageFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private usersNGRXservice: UsersNGRXService
  ) {}
}
