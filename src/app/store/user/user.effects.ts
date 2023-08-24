import { Injectable } from "@angular/core";
import * as UserActions from './user.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { RootState } from "../root/root.selectors";
import { map, tap } from "rxjs";
import { SignInService } from "src/app/services/sign-in.service";


@Injectable()
export class UserEffects {

    signIn$ = createEffect(()=> this.actions$.pipe(
        ofType(UserActions.signIn),
        map((action) => this.signIn.signIn(action.username, action.password) ),
        tap(async (res)=> {
            const RESO = await res
            console.log(RESO)
        })
    ), {dispatch: false})


    constructor(
        private actions$: Actions,
        private store: Store<RootState>,
        private signIn: SignInService
      ) {
      }
}
